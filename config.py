# coding=utf-8

import requests

ssn = requests.session()
# 登录
URL_HOME = 'https://cn.ax101.cc/'

URL_LOGIN_PRE = 'https://cn.ax101.cc/login?refer=https%3A%2F%2Fcn%2Eax101%2Ecc'

URL_LOGIN = 'https://cn.ax101.cc/login'


HEADERS_HOME = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Cache-Control': 'max-age=0',
    'Connection': 'keep-alive',
    'Host': 'cn.ax101.cc',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36'
}


HEADERS_LOGIN = {
    'Accept': '*/*',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Connection': 'keep-alive',
    'Content-Length': '102',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Host': 'cn.ax101.cc',
    'Origin': 'https://cn.ax101.cc',
    'Referer': 'https://cn.ax101.cc/login?refer=https%3A%2F%2Fcn%2Eax101%2Ecc',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest'
}


# ##########
# 账号密码##
# #########
EMAIL = ''
PASSWORD = ''


# 下载 列表


URL_ORIGIN = 'https://cn.ax101.cc/search'

REFERER_LIST = 'https://cn.ax101.cc/search?q={0}&ft=0&p={1}'

HEADERS_LIST = {
    'HOST': 'cn.ax101.cc',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
    'accept-encoding': 'gzip, deflate',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'referer': 'https://avhd101.com/search?q=%E7%BE%8E%E8%85%BF&ft=0&p=3',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-user': '?1',
    'cookie': 'hello=1; _ga=GA1.2.890790156.1587831033; _gid=GA1.2.1659091950.1587831033; rr=https://cn.ax101.cc/;',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36'
}

PARAMS_LIST = {
    'q': '美腿',        # 分类
    'ft': '0',          # 应该是 高清/无码/。。。
    'p': '7'            # 当前页
}


# file

SEED_LIST = './seeds_list.txt'

PATH_LIST = './Images'

TMP_M3U8 = './temp_m3u8'

REAL_M3U8 = './real_m3u8'

TMP_TS = './temp_ts'

VIDEO_FILE = './video'

ALREADY = './already_crawl.txt'


############### 下载视频

URL_1 = 'https://cn.ax101.cc/api/video'


REFERER_1 = 'https://cn.ax101.cc'

HEADERS_VIDEO = {
    'Accept': '*/*',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Connection': 'keep-alive',
    'Host': 'cn.ax101.cc',
    'Referer': 'https://cn.ax101.cc/watch?v=OanBaDlJXbk',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.113 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest'
}

HEADERS_M3U8 = {
    'Host': 'play.avhd101.com',
    'accept': '*/*',
    'accept-encoding': 'gzip, deflate',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'origin': 'https://avhd101.com',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36'
}
# sha256

S1 = 'avHDl0l.com.av'
IP = '47.244.148.48'


PARAMS_1 = {
    'v': 'OanBaDlJXbk',         # 视频编号
    'ip': '47.244.148.48',    # ip
    't': '1587610559',          # 时间戳
    'ux': '',            # 用户id
    's': '2ab0d8e520e8bcb8fa4315240912fb21709e00cae5507f0c7c9fb7019ad3eef1',    # 计算出的参数
}

