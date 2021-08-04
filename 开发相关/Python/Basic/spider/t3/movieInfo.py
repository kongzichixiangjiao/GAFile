from pandas import Series, DataFrame
import pandas as pd
import requests
from bs4 import BeautifulSoup


def get_arrs(rs):
    r = []
    for item in rs:
        r.append(item.string)
    return r


def get_str(s):
    str = soup.find(text=s).next_element
    return str.strip()


url = "https://movie.douban.com/subject/6786002/"
headers = {'user-agent': 'my-app/0.0.1'}
response = requests.get(url=url, headers=headers)
# print(response.text)

soup = BeautifulSoup(response.text, 'html.parser')

result = {}

# 名称
result["title"] = soup.find('span', property="v:itemreviewed").string
# 导演
director = soup.find_all(class_="attrs")[1].find_all('a')
result["director"] = get_arrs(director)
# 编剧
scriptwriter = soup.find_all(class_="attrs")[1].find_all('a')
result["scriptwriter"] = get_arrs(scriptwriter)
# 主演
protagonist = soup.find_all(class_="attrs")[2].find_all('a')
result["protagonist"] = get_arrs(protagonist)
# 类型
genre = soup.find_all(property="v:genre")
result["genre"] = get_arrs(genre)
# 制片国家/地区
result["country"] = get_str("制片国家/地区:")
# 语言
result["language"] = get_str("语言:")
# 上映时日期
releaseDate = soup.find(property="v:initialReleaseDate").string
result["releaseDate"] = releaseDate
# 片长
runTime = soup.find(property="v:runtime").string
result["runTime"] = runTime
# 又名
result["alternateName"] = get_str("又名:")
# IMDb
result["IMDb"] = get_str("IMDb:")
# 豆瓣评分
average = soup.find(property="v:average").string
result["average"] = average
# 评价人数
votes = soup.find(property="v:votes").string
result["votes"] = votes
# 星级占比
ratings = soup.find(class_="ratings-on-weight")

ratings_items = []
for item in ratings.find_all(class_="item"):
    num = item.find(class_="starstop").string.strip()
    proportion = item.find(class_="rating_per").string.strip()
    # print(proportion)
    # print(num)
    ratings_items.append({"num": num, "proportion": proportion})

result["ratings_items"] = ratings_items

print(result)
print("1")
data = pd.DataFrame([result])
print("12")
data.to_excel("xxx.xlsx")
print("13")
