from urllib import request
import re


class Slider():
    url = 'https://dota2.178.com/list/vide/wodota.html'
    root_pattern = '<div class="newly newly897 clearfix">[\s\S]*?</div>'
    item_pattern = '</dt>([\s\S]*?)</dl>'
    title_pattern = ' >([\s\S]*)</a>'
    time_pattern = '>发布时间：([\s\S]*)</dd>'

    def __fetch_content(self):
        r = request.urlopen(Slider.url)
        htmls = r.read()
        htmls = str(htmls, encoding='utf-8')
        return htmls

    def __analysis(self, htmls):
        root_html = re.findall(Slider.root_pattern, htmls)
        root_html = re.findall(Slider.item_pattern, root_html[0])

        requestData = []
        for item in root_html:
            title = re.findall(Slider.title_pattern, item)
            time = re.findall(Slider.time_pattern, item)
            requestData.append({'title': title, 'time': time})

        return requestData

    def go(self):
        htmls = self.__fetch_content()
        requestData = self.__analysis(htmls)

        print(requestData)


s = Slider()
s.go()


# root_html = re.findall(
#     '<div>([\s\S]*?)</div>', '<div><dd>123</dd><dd>456</dd></div>')
# print(root_html)
