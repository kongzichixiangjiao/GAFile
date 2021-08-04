# 引入packa1中的a1
import sys
import os

import_dir = \
    os.path.join(os.path.join(os.path.dirname(
        __file__), os.pardir), 'package1')

sys.path.insert(0, import_dir)

file_name = 'a1'

P1_a1 = __import__(file_name)

print(P1_a1.a1)
print(P1_a1.a11)
print(P1_a1.a111)


d1 = 1


def test_d1():
    print("调用了package2的d1文件中的test_d1方法")
