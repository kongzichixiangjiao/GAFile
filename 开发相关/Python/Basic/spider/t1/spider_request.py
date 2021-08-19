import sys
import requests
import os


def base():
    response = requests.get("http://www.baidu.com")
    response.encoding = response.apparent_encoding
    print("状态码：" + str(response.status_code))

    print(response.text)

    print(sys.version)

    print(sys.path)


# user-agent
def userAgent():
    url = "https://www.amazon.cn/gp/product/B01M8L5Z3Y"
    kv = {'user-agent': 'Mozilla/5.0'}
    r = requests.get(url, headers=kv)
    r.raise_for_status()
    print(r.encoding)
    print(r.apparent_encoding)
    r.encoding = r.apparent_encoding
    print(r.status_code)
    print(r.text[:1000])


# 搜索
def search():
    kv = {'wd': 'Python'}
    r = requests.get('http://www.baidu.com/s', params=kv)
    r.raise_for_status()
    print(r.status_code)
    print(r.request.url)
    print(len(r.text))


# 网络图片
def image():
    url = "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic3.zhimg.com%2Fv2-609352d09565ed1b150d398e44667ac4_1200x500.jpg"
    root = "./pics/"
    path = root + os.path.basename(url)
    print(path)
    try:
        if not os.path.exists(root):
            os.mkdir(root)
        if not os.path.exists(path):

            r = requests.get(url)
            print("--")
            print(r.status_code)
            with open(path, 'wb') as f:
                f.write(r.content)
                f.close()
                print("文件保存成功")
        else:
            print("文件已存在")
    except:
        print("出现异常")


# ip
def ip():
    url = "http://ip-api.com/json/"
    try:
        r = requests.get(url + '202.204.80.112')
        r.raise_for_status()
        r.encoding = r.apparent_encoding
        print(r.text)
    except:
        print("爬取失败")


if __name__ == '__main__':
    ip()
