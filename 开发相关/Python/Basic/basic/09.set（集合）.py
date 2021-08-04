# 集合（set）是一个无序的不重复元素序列。

set_s = {'a', 'b', 'c', 'b', 'a'}

print(set_s)  # {'b', 'c', 'a'}

print('a' in set_s)  # True

a = set('aadjflajdflxp')
b = set('dla;fjnmm')
print(a)  # {'a', 'j', 'f', 'l', 'd', 'x', 'p'}
print(b)  # {'a', 'j', 'f', ';', 'l', 'd', 'n', 'm'}


#  集合a中包含而集合b中不包含的元素
print(a - b)  # {'p', 'x'}
# 集合a或b中包含的所有元素
print(a | b)  # {'x', 'l', 'a', 'f', 'n', 'd', 'm', 'p', 'j', ';'}
# 集合a和b中都包含了的元素
print(a & b)  # {'j', 'f', 'd', 'a', 'l'}
# 不同时包含于a和b的元素
print(a ^ b)  # {'p', 'n', 'm', 'x', ';'}

a = {x for x in 'abracadabra' if x not in 'abc'}
print(a)  # {'r', 'd'}


set_nn = {1, 2, 3, 21, 2, 40, 44, 19}
print(set_nn)

# 添加
set_nn.add(99)  # {1, 2, 3, 40, 44, 19, 21}
print(set_nn)  # {1, 2, 3, 99, 40, 44, 19, 21}

# 添加多个
set_nn.update({100, 101})
print(set_nn)  # {1, 2, 3, 99, 100, 101, 40, 44, 19, 21}


# 移除
set_nn.remove(1)  # 如果1不存在会报错
print(set_nn)  # {2, 3, 99, 100, 101, 40, 44, 19, 21}

# 删除指定元素
set_nn.discard(2)  # 如果2不存在不会报错
print(set_nn)  # {3, 99, 100, 101, 40, 44, 19, 21}

# 随机移除元素
set_nn.pop()  # 移除 3
set_nn.pop()  # 移除 99
set_nn.pop()  # 移除 100
print(set_nn)  # {101, 40, 44, 19, 21}

print(len(set_nn))  # 5

print(101 in set_nn)

# 移除集合中的所有元素
set_nn.clear()  # True
print(set_nn)  # set()

# 添加
set_nn.add(1)
set_nn.add(3)
set_nn.add(5)
set_nn.add(13)
set_nn.add(5)
set_nn.add(99)

print(set_nn)  # {1, 99, 3, 5, 13}

# 拷贝
print(id(set_nn))  # 内存地址 4352743904
print(id(set_nn.copy()))  # {1, 99, 3, 5, 13} 内存地址 4352744352


# 差集
x = {"apple", "banana", "cherry"}
y = {"google", "microsoft", "apple"}

z = x.difference(y)

print(x - y)  # {'cherry', 'banana'}
print(z)  # {'cherry', 'banana'}

# difference_update() 方法用于移除两个集合中都存在的元素。
# difference_update() 方法与 difference() 方法的区别在于 difference() 方法返回一个移除相同元素的新集合，而 difference_update() 方法是直接在原来的集合中移除元素，没有返回值。
x = {"apple", "banana", "cherry"}
y = {"gogle", "microsoft", "apple"}

x.difference_update(y)
print(x)

# 交集
x = {"apple", "banana", "cherry"}
y = {"google", "runoob", "apple"}

z = x.intersection(y)

print(x & y)  # {'apple'}
print(z)  # {'apple'}

# intersection_update() 方法用于获取两个或更多集合中都重叠的元素，即计算交集。
# intersection_update() 方法不同于 intersection() 方法，因为 intersection() 方法是返回一个新的集合，而 intersection_update() 方法是在原始的集合上移除不重叠的元素。
x = {"apple", "banana", "cherry"}  # y 集合不包含 banana 和 cherry，被移除
y = {"google", "runoob", "apple"}

x.intersection_update(y)

print(x)  # {'apple'}

# isdisjoint() 方法用于判断两个集合是否包含 相同的 元素，如果没有返回 True，否则返回 False。
x = {"apple", "banana", "cherry"}
y = {"google", "runoob", "facebook"}

z = x.isdisjoint(y)  # True

print(z)


# 判断指定集合是否为该方法参数集合的子集
x = {"a", "b", "c"}
y = {"f", "e", "d", "c", "b", "a"}

z = x.issubset(y)

print(z)  # True

# 判断该方法的参数集合是否为指定集合的子集
x = {"f", "e", "d", "c", "b", "a"}
y = {"a", "b", "c"}

z = x.issuperset(y)

print(z)  # True

# 返回两个集合中不重复的元素集合。
x = {"apple", "banana", "cherry"}
y = {"google", "runoob", "apple"}

z = x.symmetric_difference(y)

print(z)  # {'runoob', 'google', 'cherry', 'banana'}

# 移除当前集合中在另外一个指定集合相同的元素，并将另外一个指定集合中不同的元素插入到当前集合中。
x = {"apple", "banana", "cherry"}
y = {"google", "runoob", "apple"}

x.symmetric_difference_update(y)

print(x)  # {'runoob', 'google', 'cherry', 'banana'}


# 返回两个集合的 并集
x = {"apple", "banana", "cherry"}
y = {"google", "runoob", "apple"}

z = x.union(y)
print(x | y)    # {'runoob', 'google', 'cherry', 'banana', 'apple'}
print(z)  # {'banana', 'runoob', 'cherry', 'apple', 'google'}
