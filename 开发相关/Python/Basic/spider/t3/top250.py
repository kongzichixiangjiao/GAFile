
import requests
from bs4 import BeautifulSoup
import pandas as pd


all_info = []


def get_arrs(rs):
    r = []
    for item in rs:
        r.append(item.string)
    return r


def get_str(soup, s):
    item = soup.find(text=s)
    if item is not None:
        str = item.next_element
        return str.strip()
    else:
        return ""


def get_page(url):
    start = 0
    max_start = 250
    while start <= max_start:
        headers = {'user-agent': 'my-app/0.0.1'}
        response = requests.get(url=url + "?start=" +
                                str(start), headers=headers)

        print("=============")
        print(start)
        get_links(response)
        start += 25


def get_links(page_info):
    soup = BeautifulSoup(page_info.text, 'html.parser')
    grid_view = soup.find(class_="grid_view")
    if grid_view is not None:
        class_hd = grid_view.find_all(class_="hd")

        movie_links = []
        movive_titles = []
        for hd in class_hd:
            # print(hd)
            movie_link = hd.find('a', href=True)['href']
            movive_title = hd.find(class_="title").string
            movie_links.append(movie_link)
            movive_titles.append(movive_title)

        for (link, title) in zip(movie_links, movive_titles):
            print("title:" + title)
            print("link:" + link)
            get_infos(link)


def get_infos(url):
    headers = {'user-agent': 'my-app/0.0.1'}
    response = requests.get(url=url, headers=headers)

    soup = BeautifulSoup(response.text, 'html.parser')

    result = {}
    # 链接
    result["linkUrl"] = url
    # 异常处理
    try:
        # 名称
        # print("==1=")
        # print(soup.find(property="v:itemreviewed"))
        # print("==2=")
        itemreviewed = soup.find(property="v:itemreviewed")
        if itemreviewed is None:
            result["title"] = ""
        else:
            result["title"] = soup.find(property="v:itemreviewed").string

        attrs = soup.find_all(class_="attrs")
        if len(attrs) > 0:
            # 导演
            director = attrs[0].find_all('a')
            result["director"] = get_arrs(director)
        if len(attrs) > 1:
            # 编剧
            scriptwriter = attrs[1].find_all('a')
            result["scriptwriter"] = get_arrs(scriptwriter)
        if len(attrs) > 2:
            # 主演
            protagonist = attrs[2].find_all('a')
            result["protagonist"] = get_arrs(protagonist)

        # 类型
        genre = soup.find_all(property="v:genre")
        result["genre"] = get_arrs(genre)
        # 制片国家/地区
        result["country"] = get_str(soup, "制片国家/地区:")
        # 语言
        result["language"] = get_str(soup, "语言:")
        # 上映时日期
        releaseDate = soup.find(property="v:initialReleaseDate").string
        result["releaseDate"] = releaseDate
        # 片长
        runTime = soup.find(property="v:runtime").string
        result["runTime"] = runTime
        # 又名
        result["alternateName"] = get_str(soup, "又名:")
        # IMDb
        result["IMDb"] = get_str(soup, "IMDb:")
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
    except AttributeError:
        print("数据错误")

    all_info.append(result)
    print(len(all_info))


# if __name__ == '__main__':
print("开始抓取数据")
get_page("https://movie.douban.com/top250")
print(all_info)
data = pd.DataFrame(all_info)
data.to_excel("250部高分电影.xlsx")
print("抓取数据结束")
