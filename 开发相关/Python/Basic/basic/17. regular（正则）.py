# 正则表达式

import re

a = 'C0C++7Java8Python9Javascript'
r = re.findall('Python', a)
print(r)  # ['Python']

if len(r) > 0:
    print("包含Python")
else:
    print("不包含Python")

# 元字符 数字：\d [0-9]  非数字：\D [^0-9]
r = re.findall('[0-9]', a)
r = re.findall('\d', a)
print(r)  # ['0', '7', '8', '9']


# 包含哪些：[]  不包含哪些：[^]  包含哪到哪：[-]
a = 'ab, acc, adc, aec, afc, ahc'
r = re.findall('a[cf]c', a)
r = re.findall('a[^hed]c', a)
print(r)  # ['acc', 'afc']
r = re.findall('a[^a-f]c', a)
print(r)  # ['ahc']


# 数字、大小写字母、_：\w   非\w：\W  空白字符：\s  \S
a = 'python111、）……1java12313swift'
r = re.findall('\w', a)
print(r)  # ['p', 'y', 't', 'h', 'o', 'n', '1', '1', '1', '1', 'j', 'a', 'v', 'a', '1', '2', '3', '1', '3', 's', 'w', 'i', 'f', 't']
r = re.findall('\W', a)
print(r)  # ['、', '）', '…', '…']


# 数量： {n}
r = re.findall('[a-z]{2}', a)
print(r)  # ['py', 'th', 'on', 'ja', 'va', 'sw', 'if']

r = re.findall('[a-z]{3,6}', a)
print(r)  # ['python', 'java', 'swift']

# 默认：贪婪 非贪婪使用：?  匹配成功就结束

# 非贪婪
r = re.findall('[a-z]{3,6}?', a)
print(r)  # ['pyt', 'hon', 'jav', 'swi']


# 匹配0次或者无限次： *
# 匹配1次或者无限次： +
# 匹配0次或者1次： ?  # 和非贪婪区分
a = 'python0python1pythonnnnn2pythooooon'
r = re.findall('python*', a)
print(r)  # ['python', 'python', 'pythonnnnn', 'pytho']
r = re.findall('python+', a)
print(r)  # ['python', 'python', 'pythonnnnn']
r = re.findall('python?', a)
print(r)  # ['python', 'python', 'python', 'pytho']


# 边界匹配: ^ $
a = '100001'
# 4-8位
r = re.findall('\d{4,8}', a)
print(r)  # ['100001']

a = '100001789'
# 4-8位
r = re.findall('\d{4,8}', a)
print(r)  # ['10000178']

a = '100001'
# 4-8位
r = re.findall('^\d{4,8}$', a)
print(r)  # ['100001']

a = '100001789'
# 4-8位
r = re.findall('^\d{4,8}$', a)
print(r)  # []

a = '1001'
r = re.findall('000$', a)
print(r)  # []

a = '1000'
r = re.findall('000$', a)
print(r)  # ['000']


# 租 (内容)

a = 'PythonPythonPythonPythonPython'

r = re.findall('(Python){2}', a)
print(r)  # ['Python', 'Python']


# 匹配模式  忽略大小写：i  匹配所有字符：s

a = 'PythonSwift\nJavascript'
r = re.findall('swift.{1}', a, re.I | re.S)
print(r)  # ['Swift\n']

print("--sub--")
# sub
a = 'PythonSwiftJavascript'
r = re.sub('Python', '哈哈', a)
print(r)  # 哈哈SwiftJavascript

# sub替换多少个
a = "PythonSwiftJavascriptSwiftC++"
r = re.sub('Swift', '哈哈', a, 1)
print(r)  # Python哈哈JavascriptSwiftC++

# replace
a = a.replace("Swift", '哈哈')
print(a)  # Python哈哈Javascript哈哈C++


def convert(value):
    print(value)  # <re.Match object; span=(21, 26), match='Swift'>
    return '!!'


a = "PythonSwiftJavascriptSwiftC++"
r = re.sub('Swift', convert, a)

print(r)  # Python!!Javascript!!C++


a = 'ABC123123D99'


def convert(value):
    matched = value.group()
    if int(matched) >= 6:
        return '9'
    else:
        return '0'


r = re.sub('\d', convert, a)
print(r)  # ABC000000D99


a = 'ABC123123D99'


def convert(value):
    matched = value.group()
    if int(matched) >= 6:
        return '9'
    else:
        return '0'


r = re.sub('\d', convert, a)
print(r)  # ABC000000D99


# findall: 查找所有的匹配
# match：从字符串首字母开始匹配 匹配一次
# seach: 查找响应字符串 只匹配一次
# span: 匹配结果位置
# group 匹配结果的值
a = 'A83B73C1D8E99'

r = re.match('\d', a)
print(r)  # None

r = re.search('\d', a)
print(r)  # <re.Match object; span=(1, 2), match='8'>
print(r.span())  # (1, 2)
print(r.group())  # 8


# group
a = 'life is short, i use python'
r = re.search('(life.*python)', a)
print(r)  # <re.Match object; span=(0, 27), match='life is short, i use python'>
print(r.group(0))  # life is short, i use python


a = 'life is short,i use python'
r = re.search('life(.*)python', a)
print(r)  # <re.Match object; span=(0, 26), match='life is short,i use python'>
print(r.group(0))  # life is short,i use python
print(r.group(1))  # is short,i use

# (.*)
a = 'life is short,i use python'
r = re.search('life(.*),i (.*) python', a)
print(r)  # <re.Match object; span=(0, 26), match='life is short,i use python'>
print(r.group(0))  # life is short,i use python
print(r.group(1))  # is short
print(r.group(2))  # use
