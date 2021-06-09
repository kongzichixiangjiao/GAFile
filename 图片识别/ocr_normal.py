# encoding:utf-8

import requests
import base64
import os

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


def file_name(file_dir):
    L = []
    for root, dirs, files in os.walk(file_dir):
        print(root)  # 当前目录路径
        print(dirs)  # 当前路径下所有子目录
        print(files)  # 当前路径下所有非目录子文件
        for file in files:
            if os.path.splitext(file)[1] == '.png':
                L.append(os.path.join(root, file))
    return L


result = file_name(".")
filename = ''

if (result.count == 2):
    print("没有图片")
else:
    filename = result[0][2:]

request_url = "https://aip.baidubce.com/rest/2.0/ocr/v1/accurate_basic"
# 二进制方式打开图片文件
f = open(result[-1], 'rb')
img = base64.b64encode(f.read())

params = {"image": img}
access_token = get_token()
request_url = request_url + "?access_token=" + access_token
headers = {'content-type': 'application/x-www-form-urlencoded'}
response = requests.post(request_url, data=params, headers=headers)
if response:
    result = response.json()
    print(result)
    print("开始-打印结果")
    print(result["words_result"][0]["words"])
    print("结束-打印结果")
