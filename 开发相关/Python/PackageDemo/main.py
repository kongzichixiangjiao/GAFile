# 入口文件

import sys
from package2.package4 import m2
# from .package2.package4.m2 import m  # 入口文件不能使用相对导入

print(__package__)  # None
