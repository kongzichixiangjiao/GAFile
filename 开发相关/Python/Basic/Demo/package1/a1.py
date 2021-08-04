# 设置外部可以引用的参数、函数、类 针对import * 这种情况
__all__ = ['a1', 'a111']

a1 = 1
a11 = 11
a111 = 111


def test_a1():
    print("调用了package1的a1文件中的test_a1方法")
