# coding=utf-8

# 代理

PROXY = {
    'http': '127.0.0.1:55093',
    'https': '127.0.0.1:55093'
}

# 登录
URL_HOME = 'https://cn.ax101.cc/'

URL_LOGIN = 'https://cn.ax101.cc/login'

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

DATA_LOGIN = {
    '_token': '',
    'email': '',
    'password': '',
    'gtoken': ''
}

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
    'cookie': '_gat_gtag_UA_78207029_10=1; XSRF-TOKEN=eyJpdiI6IlJrV3Axb216cnRqVFM2NXc1WkVWSkE9PSIsInZhbHVlIjoiQ2RzWGZcL0YxMTkzTU01ZGJMQ1hxUEpzVE5iN2RyYk1LKzJkclF4RTBITit3YmlyUTV3cUVWK0NzWEh4U0NMTTYiLCJtYWMiOiI3MmMxOWUwZGRlZjU0ZGI2ZTY4MTRkZjUyYjgxYzMwNjlhZjI3M2U0NTA1NTIxYmZhYjMzNGU5MDg3ZDBmMzg5In0%3D; miao_cn=eyJpdiI6IkVOXC83enRrd3Bmc0FPanBhek5FVGJRPT0iLCJ2YWx1ZSI6IlJoekozbnpOOWFBUVR0VEJYb1BlaFBuSkFoTWpWTXZvbVVESDI4am1Id1RtV3c2WWROTWNSeGIrUFpaRWVqbWciLCJtYWMiOiJkZjYzMjc3Y2U1NjhlYmU0MGI0MDkzOTU1NTFmZmFjMDk2NDIwZDk2ZDBkMmM4MzA0Yjk2ZmUzMzk2ZjIzY2NjIn0%3D; rr=https://cn.ax101.cc/search?q=%E7%BE%8E%E8%85%BF; hello=1; _ga=GA1.2.1911202415.1587790086; _gid=GA1.2.914766122.1587790086',
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
UX = '2120015'


PARAMS_1 = {
    'v': 'OanBaDlJXbk',         # 视频编号
    'ip': '47.244.148.48',    # ip
    't': '1587610559',          # 时间戳
    'ux': UX,            # 用户id
    's': '2ab0d8e520e8bcb8fa4315240912fb21709e00cae5507f0c7c9fb7019ad3eef1',    # 计算出的参数
}

