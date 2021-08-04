
a = 3
while a > 0:
    print(a)
    a -= 1

while a != 0:
    print("a不等于0：", a)
else:
    print("a等于0：", a)


arr = [1, 2, 3, 4]

for item in arr:
    if item == 2:
        print("有 2 ")
    print(item)


# 循环5次
for i in range(5):
    print(i)
'''
0
1
2
3
4
'''

for i in range(0, 10, 2):
    print(i)
'''
0
2
4
6
8
'''

a = ['Google', 'Baidu', 'Runoob', 'Taobao', 'QQ']

for i in range(len(a)):
    print(i, a[i])

'''
0 Google
1 Baidu
2 Runoob
3 Taobao
4 QQ
'''


# break
for i in range(len(a)):
    if i == 2:
        break
    print(i, a[i])

'''
0 Google
1 Baidu
'''


# continue
n = 5
while n > 0:
    n -= 1
    if n == 2:
        continue
    print(n)
print('循环结束。')
'''
4
3
1
0
循环结束。
'''
