import numpy as np
from numpy.random import randn

# 创建
# 001
data1 = [6, 7.5, 8, 0, 1]
arr1 = np.array(data1)
print(arr1)
data2 = [[1, 2, 3, 4], [5, 6, 7, 8]]
arr2 = np.array(data2)
print(arr2)
print(arr2.ndim)
print(arr2.shape)
print(arr1.dtype)
print(arr2.dtype)

# 002
print(np.zeros(10))
print(np.zeros((3, 6)))
