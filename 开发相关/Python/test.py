# encoding:utf-8

import requests
import base64

'''
通用文字识别（高精度版）
'''


def get_token():
    '''
    获取access_token
    :param API_KEY:
    :param SECRET_KEY:
    :return:
    '''
    access_token_url = "https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id={}&client_secret={}".format(
        "DKSLqUGSi4NIECYE2BTPA6W8", "i2xYW3UsHUqI0oYohvdal4QCipoYBzRm")
    access_token = requests.post(access_token_url)
    return access_token.json()['access_token']


request_url = "https://aip.baidubce.com/rest/2.0/ocr/v1/accurate_basic"
# 二进制方式打开图片文件
f = open('1.png', 'rb')
img = base64.b64encode(f.read())

params = {"image": img}
access_token = get_token()
request_url = request_url + "?access_token=" + access_token
headers = {'content-type': 'application/x-www-form-urlencoded'}
response = requests.post(request_url, data=params, headers=headers)
if response:
    print(response.json())
