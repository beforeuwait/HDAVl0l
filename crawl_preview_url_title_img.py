# coding=utf-8


"""
这个脚本的意义在于

在非登录的情况下
尽可能的采集
因为存在不想要的情况

所以，采集到的片子，分两个地方存储， 图片集合， 和映射集合

下载的时候，就可以根据，图片的编号，去找到对应的链接 然后开始下载
"""

import os
import time
import requests
from urllib.parse import quote
from lxml import etree
from config import URL_ORIGIN
from config import HEADERS_LIST
from config import PARAMS_LIST
from config import PROXY
from config import REFERER_LIST


def input_command():
    # 启动时候接收参数
    search = input('请输入分类:\t')
    pages = int(input('请输入搜索页数:\t'))

    print('当前接收到的参数为:\t{0}\t请求页数为:\t{1}'.format(search, pages))
    check_file_exists(search)
    crawl_data(search, int(pages))


def check_file_exists(search):
    path = './{}'.format(search)
    if not os.path.exists(path):
        print('目录:\t{}\t不存在,创建目录'.format(path))
        os.mkdir(path)
    else:
        print('目录存在:\t{}存在'.format(path))


def crawl_data(key_word, pages):
    seed_set, count = read_seeds_list_count_num()
    print('已经存在:\t{}\t条'.format(count))
    params = PARAMS_LIST
    current_page = 1
    while current_page <= pages:
        print('采集:\t{0}\t第\t{1}\t页'.format(key_word, current_page))
        referer = quote(REFERER_LIST.format(key_word, current_page))
        params.update({'q': key_word, 'p': current_page})
        html = do_simple_request(referer, params)
        data = parse_html(html)
        if data:
            for each in data:
                if each[0] not in seed_set:
                    print(each, '未下载')
                    with open('./seeds_list.txt', 'a', encoding='utf-8') as f:
                        count += 1
                        print(str(count) + '\u0001' + '\u0001'.join(each))
                        f.write(str(count) + '\u0001' + '\u0001'.join(each) + '\n')
                    # 下载图片
                    if each[2]:
                        download_cover(count, key_word, each[1], each[-1])
        current_page += 1
        time.sleep(3)


def parse_html(html):
    selector = etree.HTML(html)
    data = []
    for each in selector.xpath('//div[@class="row"]/ul/li'):
        url = each.xpath('header/h3/a/@href')[0]
        title = each.xpath('a[@class="cover"]/img/@title')[0].replace('\\', '_')
        img = each.xpath('a[@class="cover"]/img/@data-src')[0] if each.xpath('a[@class="cover"]/img/@data-src') else each.xpath('a[@class="cover"]/img/@src')[0]
        data.append([url, title, img])
    return data


def do_simple_request(referer, params):
    retry = 5
    headers = HEADERS_LIST
    # headers.update({'referer': referer})
    html = None
    while retry > 0:
        try:
            resp = requests.get(url=URL_ORIGIN, headers=headers, params=params, proxies=PROXY)
            print(resp.status_code)
            if resp.status_code < 300:
                html = resp.content.decode('utf-8')
                break
        except Exception as e:
            print('请求出错', e)
            time.sleep(5)
        retry -= 1
    return html


def download_cover(count, key_word, name,url):
    retry = 5
    cnt = None
    print('下载图片\t{0}_{1}.jpg'.format(count, name))
    while retry > 0:
        try:
            resp = requests.get(url=url, proxies=PROXY)
            if resp.status_code < 300:
                cnt = resp.content
                with open('./{0}/{1}_{2}.jpg'.format(key_word, count, name), 'wb') as f:
                    f.write(cnt)
                break
        except Exception as e:
            print('请求出错', e)
            time.sleep(5)
        retry -= 1
    return cnt


def read_seeds_list_count_num():
    seeds_set = set([i.strip().split('\u0001')[1] for i in open('./seeds_list.txt', 'r', encoding='utf-8')])
    return seeds_set, len(seeds_set)

if __name__ == '__main__':
    input_command()