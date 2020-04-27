# coding=utf-8

"""
这个脚本的意义就在于:
在下载了列表后
通过浏览列表，找到自己想要下载的片
同时记住图片的排头文件编号

比如:  25_xxxxxx.jpg 它的编号就是 25
运行这个程序， 告诉它 25 ，它就知道自动去采集编号 25 的视频

加密过程用的 sha256
    t = 'avHDl0l.com.av6vo8KD53Zk415875203622120015'
    print(hashlib.sha256(t.encode()).hexdigest())

格式: avHDl0l.com.av + 视频编号 + 时间戳 + 用户ID

"""

import os
import re
import json
import time
import hashlib
import requests
from config import SEED_LIST
from config import HEADERS_VIDEO
from config import URL_1
from config import REFERER_1
from config import PARAMS_1
from config import S1
from config import TMP_M3U8
from config import REAL_M3U8
from config import TMP_TS
from config import VIDEO_FILE
from config import IP
from config import HEADERS_M3U8
from config import ALREADY
from multiprocessing import Pool
from login_model import do_login
from config import ssn


UX = ''


def collect_list():
    ux = do_login()
    global UX
    UX = ux
    print('\tcookie装载完毕')
    code_list = []
    while True:
        av_code = input('请输入图片编号, 结束请输入:end。\t')
        if av_code == 'end':
            break
        if av_code in code_list:
            print('该\t{}\tID已经输入...')
            continue
        code_list.append(av_code)
    code_list.sort()
    print('当前需要下载的编号为:\t', code_list)
    return code_list


def collect_list_old():
    cookie = input('请输入当前cookie:\t')
    deal_cookie(cookie)
    print('\t注意!!!!!!\n\t\t【不要超过5个，防止cookie过期以及m3u8文件过期】')
    code_list = []
    while True:
        av_code = input('请输入图片编号, 结束请输入:end。\t')
        if av_code == 'end':
            break
        if av_code in code_list:
            print('该\t{}\tID已经输入...')
            continue
        code_list.append(av_code)
    code_list.sort()
    print('当前需要下载的编号为:\t', code_list)
    return code_list


def deal_cookie(cookie_str):
    cnt_list = cookie_str.split(';')
    cookie = {}
    for each in cnt_list:
        info = each.split('=')
        cookie.update({info[0]: info[1]})
    ssn.cookies.update(cookie)
    print('完成 cookie 的装载')


def load_seeds(code_list):
    seeds = []
    already_set = set([i.strip() for i in open(ALREADY, 'r', encoding='utf-8')])
    for i in open(SEED_LIST, 'r', encoding='utf-8'):
        info = i.strip().split('\u0001')
        if info[0] in code_list:
            if info[2] not in already_set:
                seeds.append(info)
            else:
                print('该 {0}\t{1}\t片已经存在'.format(info[0], info[2]))
    print('完成种子装载...')
    return seeds


def crawl_video(seeds):
    for seed in seeds:
        number, uri, title, img = seed
        path = m3u8_handler(uri, title)
        print('开始采集\t{0}\t{1}'.format(number, title))
        if path:
            print('开始下载视频')
            download_video(path)
            with open(ALREADY, 'a', encoding='utf-8') as f:
                f.write(title + '\n')
        # 下载完毕后，删除


def download_video(path):
    """
    下载片段，然后合并
    多进程为主
    """
    count = 1
    pool = Pool(15)
    for i in open(path, 'r', encoding='utf-8'):
        info = i.strip()
        if info.startswith('http'):
            # do_download_video(info, count)
            pool.apply_async(do_download_video, (info, count))
            count += 1
    print('该视频长度为:\t{}'.format(count))
    pool.close()
    pool.join()
    # 开始验证完整
    print('下载完毕\t验证完整性')
    while True:
        redownload_list = veriy_tmp_file(count)
        if redownload_list:
            print('经检查不完整, 开始重新下载')
            print('需要重新下载的个数为:\t{}'.format(len(redownload_list)))
            pool = Pool(3)
            t = 1
            for i in open(path, 'r', encoding='utf-8'):
                info = i.strip()
                if info.startswith('http'):
                    if t in redownload_list:
                        # do_download_video(info, t)
                        pool.apply_async(do_download_video, (info, t))
                    t += 1
            pool.close()
            pool.join()
        else:
            print('文件完整......\n开始合并')
            break
    # 猜猜这里为啥title我要这么处理?
    title = path.split('/')[2].replace('.m3u8', '')
    all_in_one(count, title)


def all_in_one(n, title):
    # 合并文件
    with open('{}/{}.ts'.format(VIDEO_FILE, title), 'wb') as f:
        for i in range(1, n):
            p = open(''.join([TMP_TS, '/{}.ts'.format(i)]), 'rb')
            f.write(p.read())
            p.close()
            os.remove(''.join([TMP_TS, '/{}.ts'.format(i)]))


def veriy_tmp_file(n):
    """
    验证是否为完整，返回不存在的
    :return:
    """
    data = []
    for i in range(1, n):
        if not os.path.exists(''.join([TMP_TS, '/{}.ts'.format(i)])):
            data.append(i)
    return data


def do_download_video(url, count):
    time.sleep(0.1)
    print('接收到任务:\t{}\t开始下载'.format(count))
    cnt = do_no_headers_request(url)
    if cnt:
        with open('{}/{}.ts'.format(TMP_TS, count), 'wb') as f:
            f.write(cnt)


def m3u8_handler(uri, title):
    video_code = uri.split('=')[1]
    s, t = do_sha256(video_code)
    params = PARAMS_1
    params.update({'v': video_code,
                   't': t,
                   'ux': UX,
                   's': s})
    referer = ''.join([REFERER_1, uri])
    print('开始请求第一个链接')
    html = do_simple_request(referer, params)
    if html:
        js_dict = json.loads(html)
        url = js_dict.get('url')
        print('开始请求 m3u8文件')
        m3u8_1 = do_request(url)
        m3u8_1_path = '{}/{}_1.m3u8'.format(TMP_M3U8, title)
        with open(m3u8_1_path, 'w', encoding='utf-8') as f:
            f.write(m3u8_1)
        hd, uri = deal_m3u8_1(m3u8_1_path)
        print('当前解析出最高分辨率为:\t{}p'.format(hd))
        print('开始下载当前m3u8文件....注意该m3u8文件有时效性')
        m3u8_2 = do_request(''.join([REFERER_1, uri]))
        m3u8_2_path = '{}/{}.m3u8'.format(REAL_M3U8, title)
        with open(m3u8_2_path, 'w', encoding='utf-8') as f:
            f.write(m3u8_2)
        print('真实 m3u8文件 保存完毕')
        return m3u8_2_path


def deal_m3u8_1(path):
    # 读文件，然后找出 分辨率最高的一个
    uri, hd, cr_hd = '', 0, 0
    for i in open(path, 'r', encoding='utf-8'):
        i = i.strip()
        if i.endswith('HD"') or i.endswith('p"'):
            cr_hd = int(re.findall('(\d{3,4})p', i)[0])
            if cr_hd > hd:
                hd = cr_hd
        if i.startswith('/video') and hd == cr_hd:
            uri = i
    return hd, uri


def do_sha256(video_code):
    tm = int(time.time())
    # cr = '{}{}{}{}{}'.format(S1, video_code, IP, tm, UX)
    cr = '{}{}{}{}'.format(S1, video_code, tm, UX)
    s = hashlib.sha256(cr.encode()).hexdigest()
    return s, tm


def do_simple_request(referer, params):
    retry = 5
    headers = HEADERS_VIDEO
    headers.update({'referer': referer})
    html = None
    while retry > 0:
        try:
            resp = ssn.get(url=URL_1, headers=headers, params=params)
            print(resp.status_code)
            if resp.status_code < 300:
                html = resp.content.decode('utf-8')
                break
            time.sleep(1)
        except Exception as e:
            print('请求出错', e)
            time.sleep(10)
        retry -= 1
    return html


def do_request(url):
    retry = 5
    headers = HEADERS_VIDEO
    html = None
    while retry > 0:
        try:
            resp = ssn.get(url=url, headers=headers)
            if resp.status_code < 300:
                html = resp.content.decode('utf-8')
                break
            time.sleep(5)
        except Exception as e:
            print('请求出错', e)
            time.sleep(10)
        retry -= 1
    return html


def do_no_headers_request(url):
    retry = 5
    html = None
    while retry > 0:
        try:
            resp = requests.get(url=url)
            if resp.status_code < 300:
                html = resp.content
                break
            time.sleep(5)
        except Exception as e:
            print('请求出错', e)
            time.sleep(10)
        retry -= 1
    return html


def run():
    code_list = collect_list()
    seeds = load_seeds(code_list)
    # 准备采集
    crawl_video(seeds)


if __name__ == '__main__':
    run()
