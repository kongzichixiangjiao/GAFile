def case1():                            # 第一种情况执行的函数
    print('This is the case1')


def case2():                            # 第二种情况执行的函数
    print('This is the case2')


def case3():                            # 第三种情况执行的函数
    print('This is the case3')


def default():                          # 默认情况下执行的函数
    print('No such case')


switch1 = {'case1': case1,                # 注意此处不要加括号
           'case2': case2,
           'case3': case3,
           }

choice = 'case1'                         # 获取选择
switch1.get(choice, default)()            # 执行对应的函数，如果没有就执行默认的函数
