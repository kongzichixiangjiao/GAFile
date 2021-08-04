import requests
from bs4 import BeautifulSoup

start = 0
max_start = 250

movie_links = []
movive_titles = []
while start != max_start:
    headers = {'user-agent': 'my-app/0.0.1'}
    url = "https://movie.douban.com/top250?start=" + str(start)
    # print(url)
    response = requests.get(url=url, headers=headers)

    # print(response.text)
    soup = BeautifulSoup(response.text, 'html.parser')
    grid_view = soup.find(class_="grid_view")
    # print(grid_view)
    class_hd = grid_view.find_all(class_="hd")
    # print(class_hd)
    for hd in class_hd:
        # print(hd)
        movie_link = hd.find('a', href=True)['href']
        movive_title = hd.find(class_="title").string
        movie_links.append(movie_link)
        movive_titles.append(movive_title)

        # print(movie_link)
        # print(movive_title)

    # print(start)
    start += 25

# print(movie_links)
# print(movive_titles)
print(len(movive_titles))
print(len(movie_links))

for (title, link) in zip(movive_titles, movie_links):
    print(title, ':', link)
