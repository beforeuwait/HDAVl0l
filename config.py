# coding=utf-8

# 代理

PROXY = {
    'http': '127.0.0.1:55093',
    'https': '127.0.0.1:55093'
}

# 下载 列表

URL_ORIGIN = 'https://avhd101.com/search'
# URL_ORIGIN = 'https://cn.ax101.cc/search'
# REFERER_LIST = 'https://cn.ax101.cc/search?q={0}&ft=0&p={1}'
REFERER_LIST = 'https://avhd101.com/search?q={0}&ft=0&p={1}'


HEADERS_LIST = {
    'HOST': 'avhd101.com',
    # 'HOST': 'cn.ax101.cc',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
    'accept-encoding': 'gzip, deflate',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'referer': 'https://avhd101.com/search?q=%E7%BE%8E%E8%85%BF&ft=0&p=3',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-user': '?1',
    'cookie': '__cfduid=d5f78bf8a10e5e5023cec32874fc949bf1587565483; rr=https%3A%2F%2Favhd101.com%2Fsearch%3Fq%3D%25E7%25BE%258E%25E8%2585%25BF%26ft%3D0%26p%3D1; XSRF-TOKEN=eyJpdiI6IlwvM0d3MUFSSTB0a2tuUVFzVG5GVVRBPT0iLCJ2YWx1ZSI6IkU2UGR0ZVBYMzg3S2FjTGxLOTJreTFjakJnS3JqY2NMS2ZRaXozWUl5MnBFVXhWdHg2c2JDRlRcL3UxYTE3RUd2IiwibWFjIjoiMWMwMTg2NGMyZGIzNmY5MDcwZWUxZmEzMTk1ZWIyYmQ3MjA3YmI2MTNhMGY4MjM4NzQ5NDg3NTBhYTZmNDRlNCJ9; miao_ss=eyJpdiI6IkdablE2b1RWclN4R0s3WU9tRFVGVWc9PSIsInZhbHVlIjoiUFdLSG0yYVY5NVNxZlNVSW1QcFBaQ3RybjgwUG9MXC9uWEhJTUc1NUdjTWlnWmlETlUxemc0SEM5b2tISVNlVDciLCJtYWMiOiI0MzM0YzEwZTkyMzJiNDJiMGVmMGVmOTdlNDY0YjZjM2FjZDQ5NmZmODNmZjM0OTBiZjg2ZWZhYjkyNDEyMDY0In0%3D; iadult=1',
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

# URL_1 = 'https://avhd101.com/api/video'

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
    # 'referer': 'https://avhd101.com/watch?v=6vo8K7l68k4',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36'
}
# sha256

S1 = 'avHDl0l.com.av'
# S1 = 'AvHDl0l.com.aV'
IP = '47.244.148.48'
UX = '2120015'


PARAMS_1 = {
    'v': 'OanBaDlJXbk',         # 视频编号
    'ip': '47.244.148.48',    # ip
    't': '1587610559',          # 时间戳
    'ux': UX,            # 用户id
    's': '2ab0d8e520e8bcb8fa4315240912fb21709e00cae5507f0c7c9fb7019ad3eef1',    # 计算出的参数
}

