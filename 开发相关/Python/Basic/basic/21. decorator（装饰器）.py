import time

# 001

'''
def decorator(func):
    def wrapper():
        print(time.time())
        func()

    return wrapper


def f1():
    print('this is a function')


f = decorator(f1)

f()
'''

# 002

'''
def decorator11(func):
    def wrapper():
        print(time.time())
        func()

    return wrapper


@decorator11
def f1():
    print('this is a function')


# 正常业务调用f1 上面实例改变了调用f1 调用的是f
f1()
'''

# 003

'''
def decorator11(func):
    def wrapper(*args):
        print(time.time())
        func(*args)

    return wrapper


@decorator11
def f1(func_name):
    print('this is a function: ' + func_name)


def f2(func_name1, func_name2):
    print('this is a function: ' + func_name1 + '-' + func_name2)


# 正常业务调用f1 上面实例改变了调用f1 调用的是f
f1('func')
f2('func1', 'func2')
'''


# 004
def decorator11(func):
    def wrapper(*args, **kw):
        print(time.time())
        func(*args, **kw)

    return wrapper


@decorator11
def f1(func_name):
    print('this is a function: ' + func_name)


@decorator11
def f2(func_name1, func_name2):
    print('f2----this is a function: ' + func_name1 + '-' + func_name2)


@decorator11
def f3(func_name1, func_name2, **kw):
    print('f3----this is a function: ' + func_name1 + '-' + func_name2)
    print(kw)


# 正常业务调用f1 上面实例改变了调用f1 调用的是f
f1('func')
f2('func1', 'func2')

f3('f3-f1', 'f3-f2', a=1, b=2, c='3')
