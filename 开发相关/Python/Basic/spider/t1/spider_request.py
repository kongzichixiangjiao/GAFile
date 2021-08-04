import sys
import requests

response = requests.get("http://www.baidu.com")
response.encoding = response.apparent_encoding
print("状态码：" + str(response.status_code))

print(response.text)

print(sys.version)

print(sys.path)
