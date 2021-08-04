from functools import reduce

# 三元运算
x = 2
y = 3

# z = x > y ? x: y

z = x if x > y else y
print(z)  # 3


# map
# 配合lambda

list_x = [1, 2, 3, 4]


def square(x):
    return x * x


for x in list_x:
    square(x)

r = map(square, list_x)
print(list(r))  # [1, 4, 9, 16]

r = map(lambda x: x*x, list_x)
print(list(r))  # [1, 4, 9, 16]

list_y = [3, 4, 5, 6, 7, 8]

r = map(lambda x, y: x+y, list_x, list_y)
print(list(r))  # [4, 6, 8, 10]


# reduce (大数据：规约，并行计算)
# from functools import reduce

list_x = [1, 2, 3, 4, 5, 6]
r = reduce(lambda x, y: x+y, list_x)

print(r)  # 21


# filter

list_x = [1, 2, 1, 3, 1, 1, 10]

r = filter(lambda x: True if x == 1 else False, list_x)
print(list(r))  # [1, 1, 1, 1]


