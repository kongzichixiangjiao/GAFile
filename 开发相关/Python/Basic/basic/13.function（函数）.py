import sys
from types import resolve_bases
sys.setrecursionlimit(10000)  # 限制递归次数


def hello():
    print('haha hello')


hello()


def max(a, b):
    if a > b:
        return a
    else:
        return b


print(max(2, 3))


def area(width, height):
    return width * height


def printinfo(name, age=30):
    print(name, age)


printinfo('hjn')


# 可写函数说明
def printinfo(arg1, *vartuple):
    "打印任何传入的参数"
    print("输出: ")
    print(arg1)
    print(vartuple)


# 调用printinfo 函数
printinfo(70, 60, 50)

# 返回两个值


def damage(skill1, skill2):
    damage1 = skill1 * 1
    damage2 = skill2 * 2
    return damage1, damage2


damages = damage(100, 200)
print(damages)  # (100, 400)
print(damages[0])  # 100
print(type(damages))  # <class 'tuple'>

skill_damage1, skill_damage2 = damage(100, 200)
print(skill_damage1, skill_damage2)


def sum(a, b=1):
    return a + b


print(sum(a=3, b=2))  # 5

print(sum(1))  # 2


def add1(x, y):
    result = x + y
    return result


# print(add1(x=1)) # add1() missing 1 required positional argument: 'y'


# 可变参数 *
# 元组参数
def demo(*param):
    print(param)  # (1, 2, 3)
    print(type(param))  # <class 'tuple'>


demo(1, 2, 3)


# 字典参数
def city_temp(**param):
    print(param)
    for key, value in param.items():
        print(key, ':', value)


city_temp(bj='32c', xm='23c')

dic = {'bj': '32c', 'xm': '23c'}
city_temp(**dic)


# 作用域
# python没有块级作用域
# 函数由于自己的作用域


c = 50


def add2(x, y):
    c = x + y
    print(c)  # 3
    print(id(c))  # 4555549536


add2(1, 2)
print(c)  # 50
print(id(c))  # 4555551040


def demo2():
    print(c)  # 50
    print(id(c))  # 4555551040

    for i in range(0, 5):
        a2 = 'a'

    print(a2)  # a  # 循环外调用a


demo2()


c = 1


def func1():
    c = 2

    def func2():
        # c = 3
        print(c)
    func2()


func1()


# global 整个应用程序都能使用 其他文件引用了也可以使用

def demo3():
    global c3
    c3 = 33


demo3()
print(c3)  # 定义global的c3  需要调用demo3() global c3 才有效


# 匿名函数 lambda

def add(x, y):
    return x + y


def f(x, y): return x + y


print(add(1, 2))
print(f(1, 2))
