
# 元组是不可变
# 元组是不可变
# 元组是不可变

print(type((50)))  # <class 'int'>
# 注意逗号，加逗号是元组类型
print(type((50,)))  # <class 'tuple'>


tuple_n = (1, 2, 3, 4)
tuple_s = ('a', 'b', 'c', 'd')

# 访问
print(tuple_n[0])  # 1
print(tuple_s[1])  # b


# 合并
print(tuple_n + tuple_s)  # (1, 2, 3, 4, 'a', 'b', 'c', 'd')


# 删除
# del tuple_n
# print(tuple_n)  # NameError: name 'tuple_n' is not defined

# 计算元组元素个数
print(len((1, 2, 3)))  # 3
print((1, 2, 3) + (4, 5, 6))  # (1, 2, 3, 4, 5, 6)
print(('haha') * 2)  # hahahaha
print(3 in (1, 2, 3, 4))  # True
for x in (1, 2, 3):
    print(x,)

'''
1
2
3
'''

tuple_n = (1, 2, 3, 4, 5, 6)

# 元组索引、截取
print(tuple_n[0])  # 1
print(tuple_n[-2])  # 5

print(tuple_n[1:])  # (2, 3, 4, 5, 6)
print(tuple_n[1:4])  # (2, 3, 4)

# 返回元组中元素最大值、最小值。
print(max(tuple_n))  # 6
print(min(tuple_n))  # 1


# 将可迭代系列转换为元组。
L = [1, 2, 3, 4]
t = tuple(L)
print(t)  # (1, 2, 3, 4)

print(id(t))  # 内存地址 4420463008

t = ('a', 'b', 'c')
print(id(t))  # 内存地址 4437007616
