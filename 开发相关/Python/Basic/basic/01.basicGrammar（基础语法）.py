# -*- coding: utf-8 -*-
'''
添加utf-8编码，解决
SyntaxError: Non-ASCII character '\xe4' in file ... 错误
'''

# import sys
from sys import argv, path, version
import keyword

# python保留字
print("python保留字")

print(keyword.kwlist)

'''
['and', 'as', 'assert', 'break', 'class',
'continue', 'def', 'del', 'elif', 'else',
'except', 'exec', 'finally', 'for', 'from',
'global', 'if', 'import', 'in', 'is', 'lambda',
'not', 'or', 'pass', 'print', 'raise', 'return',
'try', 'while', 'with', 'yield']
'''

# 打印
print("打印")

print("Hello, Python!")

# 换行打印
print("a")
print("b")

# 不换行打印
print("a", end=" ")
print("b", end=".")

# 行与缩进
print("行与缩进")

if True:
    print("True")
else:
    print("False")

# 多行语句
print("多行语句")

str1 = 'a' + \
    'b' + \
    'c'

print(str1)

# 数字（Number）类型
print("数字（Number）类型")

'''
int 表示长整型
bool
float 
complex 负数
'''

# 字符串（String）
print("字符串（String）")

'abc' == "abc"

longString = '''
我是一段很长的字符串，
还可以换行
'''
print(longString)

longString = """
我是一段很长的字符串，
还可以换行
"""

print(longString)

print("我是转移字符串\n很厉害。")
print(r"我是转移字符串\n不能转义了。因为字符串前面使用了r")

print("this" " is" " string. ""被合并了")

print("字符串合并使用+ ：" + "a" + "b")

print("字符串重复使用* ：" + "a" * 2)

print("python中的字符串不能被改变")

# 字符串截取 (先编码成utf-8，再解码)
print("字符串截取格式：" + "变量[头下标:尾下标:步长]")

str2 = "还有12天过年，年货还没有准备。"
print("字符串长度函数len():" + str(len(str2)))  # 字符串长度函数len():44
# str是python的保留关键字 定义了str，再使用str函数会报错：TypeError: 'str' object is not callable
print(str2[3:10])
# str2 = str2.decode('utf-8')[3:10].encode('utf-8')
# str2_1 = str2.decode('utf-8')[3:10:2].encode('utf-8')
str2 = str2[3:10]
str2_1 = str2[3:10:2]
print(str2)  # 2天过年，年货
print(str2_1)  # 年年

str3 = str2 + "-新拼接字符串"
print(str3)  # 2天过年，年货-新拼接字符串

# 分割
str4 = str3.split('-')
print(str4)  # ['2\xe5\xa4\xa9\xe8\xbf\x87\xe5\xb9\xb4\xef\xbc\x8c\xe5\xb9\xb4\xe8\xb4\xa7', '\xe6\x96\xb0\xe6\x8b\xbc\xe6\x8e\xa5\xe5\xad\x97\xe7\xac\xa6\xe4\xb8\xb2']

print(str4[0])  # 2天过年，年货
print(str4[1])  # 新拼接字符串

# 等待用户输入
# input("\n\n 输入Enter结束")

# 打印python版本
print(sys.version)  # 3.8.5 (default, Aug 15 2020, 14:16:35)
