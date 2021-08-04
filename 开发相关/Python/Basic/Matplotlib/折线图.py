import numpy as np
import matplotlib.pyplot as plt
import sys
import os

import_dir = \
    os.path.join(os.path.join(os.path.dirname(
        __file__), os.pardir), 'Pandas')
sys.path.insert(0, import_dir)
file_name = 'pandas_def'
pdef = __import__(file_name)

tj = pdef.country_year_tj()

print(tj)

# 解决画布显示中文乱码
plt.rcParams['font.sans-serif'] = ['Arial Unicode MS']

tj.plot()
plt.legend(ncol=4)
plt.xlabel('年份')
plt.show()
