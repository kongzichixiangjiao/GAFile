# 引用package1中的a1
from package1 import a1

print(a1.a1)
print(a1.a11)
print(a1.a111)
a1.test_a1()

f1 = 1


def test_f1():
    print("调用了Demo的f1文件中的test_f1方法")
