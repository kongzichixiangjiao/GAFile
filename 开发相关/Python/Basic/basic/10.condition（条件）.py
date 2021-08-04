# 条件

import random

var1 = 100
if var1:
    print(var1)  # 100

var2 = 0
if var2:
    print(var2)

age = int(input("请输入"))
print("")

if age <= 0:
    print("输入错误")
elif age == 1:
    print("太年轻")
elif age >= 2:
    print("快快长大")
else:
    print("拉倒吧")


print("")
print("")
number = random.randint(1, 100)
guess = -1
print("猜数字游戏[1-100]")

while guess != number:
    guess = int(input("请输入你猜的数字："))

    if guess == number:
        print("厉害啊，猜对了！")
    elif guess < number:
        print("猜的数字小了")
    elif guess > number:
        print("猜的数字大了")


num = int(input("输入一个数字："))

if num % 2 == 0:
    if num % 3 == 0:
        print("你输入的数字可以整除 2 和 3")
    else:
        print("你输入的数字可以整除 2，但不能整除 3")
else:
    if num % 3 == 0:
        print("你输入的数字可以整除 3，但不能整除 2")
    else:
        print("你输入的数字不能整除 2 和 3")
