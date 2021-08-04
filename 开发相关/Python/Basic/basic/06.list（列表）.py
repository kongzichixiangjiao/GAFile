varList = ['red', 'green', 'blue', 'yellow', 'white', 'black']
print(varList[1])  # green
print(varList[-1])  # black


nums = [10, 20, 30, 40, 50, 60, 70, 80, 90]
print(nums[0:])  # [10, 20, 30, 40, 50, 60, 70, 80, 90]
print(nums[:-4])  # [10, 20, 30, 40, 50]
print(nums[0:4])  # [10, 20, 30, 40]
print(nums[1: -3])  # [20, 30, 40, 50, 60]

nums[0] = 11
print(nums[0])  # 11

print(len(nums))  # 9
del nums[2]
print(nums)  # [11, 20, 40, 50, 60, 70, 80, 90]
print(len(nums))  # 8

print([1, 2, 3] + [4, 5])  # [1, 2, 3, 4, 5]

print(['ha'] * 4)  # ['ha', 'ha', 'ha', 'ha']

print(3 in [1, 2, 4])  # True

for x in nums:
    print(x)
'''
11
20
40
50
60
70
80
90
'''

listWebsite = ['google', 'baidu', 'xx', 'zz']

print(listWebsite[2])  # xx
print(listWebsite[-2])  # xx
print(listWebsite[1:])  # ['baidu', 'xx', 'zz']


print([[1, 2, 3], [3, 4, 5]])  # [[1, 2, 3], [3, 4, 5]]
print([[1, 2, 3], [3, 4, 5]][0][1])  # 2


List_n = [1, 2, 3, 4]
List_s = ['a', 'b']

# 列表元素个数
print(len(List_n))  # 4
# 返回列表元素最大值
print(max(List_n))  # 4
print(max(List_s))  # b
# 返回列表元素最小值
print(min(List_n))  # 1

# 将元组转换为列表
tuple_n = (1, 2, 3)
print(list(tuple_n))  # [1, 2, 3]

# 在列表末尾添加新的对象
List_n.append(99)
List_n.append(99)
print(List_n)  # [1, 2, 3, 4, 99, 99]

# 统计某个元素在列表中出现的次数
print(List_n.count(99))  # 2

# extend() 函数用于在列表末尾一次性追加  另一个序列  中的多个值（用新列表扩展原来的列表）
List_n.extend([1, 2, 3])
print(List_n)  # [1, 2, 3, 4, 99, 99, 1, 2, 3]

List_n.extend((11, 22, 33))
print(List_n)  # [1, 2, 3, 4, 99, 99, 1, 2, 3, 11, 22, 33]

List_n.extend({111, 222, 333})
print(List_n)  # [1, 2, 3, 4, 99, 99, 1, 2, 3, 11, 22, 33, 333, 222, 111]


# 从列表中找出某个值第一个匹配项的索引位置
print(List_n.index(99))  # 4


# 将对象插入列表
List_n.insert(2, 22)
print(List_n)  # [1, 2, 22, 3, 4, 99, 99, 1, 2, 3, 11, 22, 33, 333, 222, 111]

# 移除列表中的一个元素（默认最后一个元素），并且返回该元素的值
List_n.pop()
print(List_n)  # [1, 2, 22, 3, 4, 99, 99, 1, 2, 3, 11, 22, 33, 333, 222]
List_n.pop(0)
print(List_n)  # [2, 22, 3, 4, 99, 99, 1, 2, 3, 11, 22, 33, 333, 222]
List_n.pop(1)
print(List_n)  # [2, 3, 4, 99, 99, 1, 2, 3, 11, 22, 33, 333, 222]


# 移除列表中某个值的第一个匹配项
List_n.remove(99)
print(List_n)  # [2, 3, 4, 99, 1, 2, 3, 11, 22, 33, 333, 222]

# 反向列表中元素
List_n.reverse()
print(List_n)  # [222, 333, 33, 22, 11, 3, 2, 1, 99, 4, 3, 2]
List_n.reverse()
print(List_n)  # [2, 3, 4, 99, 1, 2, 3, 11, 22, 33, 333, 222]

# 对原列表进行排序
List_n.sort()
print(List_n)  # [1, 2, 2, 3, 3, 4, 11, 22, 33, 99, 222, 333]

# 复制列表
List_n_new = List_n.copy()
print(List_n_new)  # [1, 2, 2, 3, 3, 4, 11, 22, 33, 99, 222, 333]
# 清空列表
List_n_new.clear()
print(List_n_new)
