# -*- coding: utf-8 -*-

# 基本数据类型

# 整型变量
counter = 100

# 浮点型变量
miles = 1000.0

# 字符串
name = "hjn"

print(counter)  # 100
print(miles)  # 1000.0
print(name)  # hjn


# 多变量赋值
a = b = c = 1
print(a, b, c)  # 1 1 1
a, b, c = 1, 2, 'hjn'
print(a, b, c)  # 1 2 hjn


# 标准数据类型
'''
Number （数字）
String  (字符串)
List (列表)
Tuple (元组)
Set (集合)
Dictionary (字典)

不可变数据：Number String Tuple
可变数据：List Dictionary Set 
'''

# int float bool complex

a, b, c, d = 20, 12.3, False, 4+2j

print(a, b, c, d)  # 20 12.3 False (4+2j)
# <class 'int'> <class 'float'> <class 'bool'> <class 'complex'>
print(type(a), type(b), type(c), type(d))

# isinstance
print(isinstance(a, int))  # True
print(isinstance(b, int))  # False


var1 = 1
var2 = 10
var3 = 11

# del var1, var3
# print(var1) NameError: name 'var1' is not defined


# 数值运算

print("-数值运算-")
print(5 + 4)  # 9
print(4.3 - 2)  # 2.3
print(3 * 5)  # 15
print(2 / 4)  # 0.5  # 得到一个浮点数
print(6 // 4)  # 1  # 得到一个整数
print(17 % 3)  # 2  # 取余
print(2 ** 4)  # 16  # 2的4次方

print(3.14j)

# 字符串

print("-字符串-")

str18 = 'leishaomei xixixi'
print(len(str18))  # 17
print(str18)  # leishaomei xixixi
print(str18[-6:])  # xixixi
print(str18[0:-1])  # leishaomei xixix

print(str18[0])  # l
print(str18[2: 5])  # ish
print(str18[2:])  # ishaomei xixixi
print(str18 * 2)  # leishaomei xixixileishaomei xixixi
print(str18 + '----add')  # leishaomei xixixi----add


# 转移字符 原始字符

print('转义\n换行')
print(r'转义\n原始字符')


# List

list = ['abc', 798, 2.33, 'hjnnnn', 88.8]
tinylist = [123, 'hjnnnn']

print(list)  # ['abc', 798, 2.33, 'hjnnnn', 88.8]
print(list[0])  # abc
print(list[1:3])  # [798, 2.33]
print(list[2:])  # [2.33, 'hjnnnn', 88.8]
print(tinylist * 2)  # [123, 'hjnnnn', 123, 'hjnnnn']
print(list + tinylist)  # ['abc', 798, 2.33, 'hjnnnn', 88.8, 123, 'hjnnnn']

list[0] = '修改的abc'
print(list[0])  # 修改的abc


list[2:3] = [999, 1000, 1001]
print(list)  # ['修改的abc', 798, 999, 1000, 1001, 'hjnnnn', 88.8]

# [1开始到4，步长为2]
print(list[1:4:2])  # [798, 1000]


def reverseWords(input):

    # 通过空格将字符串分隔符，把各个单词分隔为列表
    inputWords = input.split(" ")

    # 翻转字符串
    # 假设列表 list = [1,2,3,4],
    # list[0]=1, list[1]=2 ，而 -1 表示最后一个元素 list[-1]=4 ( 与 list[3]=4 一样)
    # inputWords[-1::-1] 有三个参数
    # 第一个参数 -1 表示最后一个元素
    # 第二个参数为空，表示移动到列表末尾
    # 第三个参数为步长，-1 表示逆向
    inputWords = inputWords[-1::-1]

    # 重新组合字符串
    output = ' '.join(inputWords)

    return output


input = 'I like lsm'
rw = reverseWords(input)
print(rw)


# Tuple

tuple = ('abc', 798, 2.33, 'hjnnnn', 88.8)
tinyTuple = (123, 'hjnnnn')

print(tuple)  # ('abc', 798, 2.33, 'hjnnnn', 88.8)
print(tuple[0])  # abc
print(tuple[1: 3])  # (798, 2.33)
print(tuple[2:])  # (2.33, 'hjnnnn', 88.8)
print(tinyTuple * 2)  # (123, 'hjnnnn', 123, 'hjnnnn')
print(tuple + tinyTuple)  # ('abc', 798, 2.33, 'hjnnnn', 88.8, 123, 'hjnnnn')

tuple1 = ()
tuple2 = (20,)


# Set

sites = {'Google', 'Taobao', 'Runoob', 'Facebook', 'Zhihu', 'Baidu', 'Baidu'}

# 输出集合，重复的元素被自动去掉
print(sites)  # {'Google', 'Baidu', 'Facebook', 'Zhihu', 'Taobao', 'Runoob'}

if 'Google' in sites:
    print('Google 在集合中')
else:
    print('Google 不在集合中')


a = set('abracadabra')
b = set('alacazam')

print(a)  # {'b', 'a', 'r', 'd', 'c'}

# a 和 b 的差集
print(a - b)  # {'r', 'b', 'd'}

# a 和 b 的并集
print(a | b)  # {'c', 'l', 'm', 'z', 'a', 'b', 'd', 'r'}

# a 和 b 的交集
print(a & b)  # {'c', 'a'}

# a 和 b 中不同时存在的元素
print(a ^ b)  # {'l', 'm', 'z', 'd', 'b', 'r'}


# Dictionary

dict = {}
dict['one'] = '1-haha'
dict[2] = '2-xixi'

tinydict = {'name': 'hjn', 'code': 1, 'site': 'www.hjn.com'}

print(dict['one'])  # 1-haha
print(dict[2])  # 2-xixi
print(tinydict)  # {'name': 'hjn', 'code': 1, 'site': 'www.hjn.com'}
print(tinydict.keys())  # dict_keys(['name', 'code', 'site'])
print(tinydict.values())  # dict_values(['hjn', 1, 'www.hjn.com'])

'''
int(x[, base]) 将x转换为一个整数
float(x) 将x转换到一个浮点数
complex(real[, imag]) 创建一个复数
str(x) 将对象 x 转换为字符串
repr(x) 将对象 x 转换为表达式字符串
eval(str) 用来计算在字符串中的有效Python表达式, 并返回一个对象
tuple(s) 将序列 s 转换为一个元组
list(s) 将序列 s 转换为一个列表
set(s) 转换为可变集合
dict(d) 创建一个字典。d 必须是一个(key, value)元组序列。
frozenset(s) 转换为不可变集合
chr(x) 将一个整数转换为一个字符
ord(x) 将一个字符转换为它的整数值
hex(x) 将一个整数转换为一个十六进制字符串
oct(x) 将一个整数转换为一个八进制字符串
'''
