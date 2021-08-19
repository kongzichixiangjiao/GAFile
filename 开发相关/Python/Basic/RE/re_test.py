import re

# re库 采用raw string类型

# search在一个字符串中搜索匹配正则表达式第一个位置
# re.search()

# match从一个字符串的 开始 位置起匹配正则表达式
# re.match()

# findall 搜索字符串，以列表类型返回全部能匹配的子串
# re.findall()

# split将一个字符串按照正则表达式匹配结果进行分割，返回列表类型
# re.split()

# finditer搜索字符串，返回一个匹配结果的迭代类型，每个迭代元素是match对象
# re.finditer()

# 在一个字符串中替换所有匹配正则表达式的子串，返回替换后的字符串
# re.sub()

# 标记
# re.I # 忽略大小写
# re.M # 匹配字符串每行开始匹配
# re.S # .匹配所有字符 .默认匹配除换行符外的所有字符


if __name__ == '__main__':
    match = re.search(r'[1-9]\d{5}', 'BIT 100081')
    if match:
        print(match.group(0))

    ls = re.findall(r'[1-9]\d{5}', 'BIT100081 BB100099')
    print(ls)
