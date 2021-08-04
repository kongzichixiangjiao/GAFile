import sys

infos = dir(sys)  # 查看变量和函数

print(infos)

print(__name__)
if __name__ == '__main__':
    print('this is app')

print('this is a module')
