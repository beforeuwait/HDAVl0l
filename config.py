# coding=utf-8

# 代理

PROXY = {
    'http': '127.0.0.1:55093',
    'https': '127.0.0.1:55093'
}

# 下载 列表

URL_ORIGIN = 'https://avhd101.com/search'
REFERER_LIST = 'https://avhd101.com/search?q={0}&ft=0&p={1}'


HEADERS_LIST = {
    'HOST': 'avhd101.com',
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
