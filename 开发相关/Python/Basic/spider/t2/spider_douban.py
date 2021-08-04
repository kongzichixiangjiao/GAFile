import requests
from bs4 import BeautifulSoup

url = "https://movie.douban.com/"
headers = {'user-agent': 'my-app/0.0.1'}
response = requests.get(url=url, headers=headers)
# print(response.text)


html_doc = """
<html><head><title>The Dormouse's story</title></head>
<body>
<p class="title"><b>The Dormouse's story</b></p>

<p class="story">Once upon a time there were three little sisters; and their names were
<a href="http://example.com/elsie" class="sister" id="link1">Elsie</a>,
<a href="http://example.com/lacie" class="sister" id="link2">Lacie</a> and
<a href="http://example.com/tillie" class="sister" id="link3">Tillie</a>;
and they lived at the bottom of a well.</p>

<p class="story">...</p>
"""

# soup = BeautifulSoup(response.text, 'html.parser')
soup = BeautifulSoup(html_doc, 'html.parser')
# print(soup.prettify())

# print(soup.title)
# print(soup.title.name)
# print(soup.title.string)

# print(soup.find_all('a'))
# print(soup.p)
# print(soup.find(id='link1'))
print(soup.find(class_='story'))
print(soup.find(class_='story').find('a').string)
