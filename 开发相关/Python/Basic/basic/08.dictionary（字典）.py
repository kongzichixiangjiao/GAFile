
dic = {'a': 1, 'b': 2, 'c': 3}

print(dic['a'])  # 1

# 更改
dic['a'] = 99

print(dic)  # {'a': 99, 'b': 2, 'c': 3}

# 删除键
del dic['b']
print(dic)  # {'a': 99, 'c': 3}

# 清空
dic.clear()
print(dic)  # {}

# 删除
# del dic
# print(dic)  # NameError: name 'dic' is not defined


dic = {'a': 1, 'b': 2, 'c': 3}
# 计算字典元素个数，即键的总数
print(len(dic))


# 输出字典，以可打印的字符串表示。
print(str(dic))  # {'a': 1, 'b': 2, 'c': 3}

print(type(dic))  # <class 'dict'>

# 复制
dic_new = dic.copy()
print(dic_new)  # {'a': 1, 'b': 2, 'c': 3}


# fromkeys() 函数用于创建一个新字典，以序列 seq 中元素做字典的键，value 为字典所有键对应的初始值。

tuple_s = ('x', 'y', 'z')
dic = dic.fromkeys(tuple_s)
print(dic)  # {'x': None, 'y': None, 'z': None}
dic = dic.fromkeys(tuple_s, 99)
print(dic)  # {'x': 99, 'y': 99, 'z': 99}
