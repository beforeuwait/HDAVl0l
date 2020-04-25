# coding=utf-8


import time
import re
import json
import requests
from config import URL_LOGIN
from config import URL_HOME
from config import HEADERS_LOGIN
from config import HEADERS_HOME
from config import EMAIL
from config import PASSWORD
from lxml import etree
from config import ssn


def do_login():
    print('请求主页')
    visit_home_page()
    ssn.cookies.update({
        'hello': '1',
        '_ga': 'GA1.2.890790156.1587831033',
        '_gid': 'GA1.2.1659091950.1587831033' ,
        '_gat_gtag_UA_78207029_10': '1'
    })
    print('请求登录页面')
    token = visit_login_page()
    print('装载参数')
    data = {
        '_token': token,
        'email': EMAIL,
        'password': PASSWORD,
        'gtoken': ''
    }
    print('用户信息:\t{}'.format(data))
    print('开始登录')
    login(data)
    print('当前cookie,{}'.format(ssn.cookies.items))
    print('找到用户当前的ux')
    ux = get_ux()
    return ux


def visit_home_page():
    do_request(URL_HOME)


def visit_login_page():
    html = do_request(URL_LOGIN)
    selector = etree.HTML(html)
    token = selector.xpath('//input[@name="_token"]/@value')[0]
    return token


def login(data):
    do_post_request(data)


def get_ux():
    html = do_request(URL_HOME)
    ux = re.findall('user_id: "(\d{4,9})"', html, re.S)[0]
    print('ux:\t',ux)
    return ux


def do_request(url):
    retry = 5
    headers = HEADERS_HOME
    html = None
    while retry > 0:
        try:
            resp = ssn.get(url=url, headers=headers)
            print(resp.status_code)
            if resp.status_code < 300:
                html = resp.content.decode('utf-8')
                break
            time.sleep(5)
        except Exception as e:
            print('请求出错', e)
            time.sleep(10)
        retry -= 1
    return html


def do_post_request(data):
    retry = 5
    while retry > 0:
        try:
            resp = ssn.post(url=URL_LOGIN, headers=HEADERS_LOGIN, data=data)
            print(resp.status_code)
            if resp.status_code < 300:
                break
            time.sleep(5)
        except Exception as e:
            print('请求出错', e)
            time.sleep(10)
        retry -= 1
    return 

if __name__ == '__main__':
    do_login()
