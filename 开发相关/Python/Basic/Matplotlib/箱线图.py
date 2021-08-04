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

year_list = ['2019', '2020', '2021']
tj = pdef.rate_tj_by_year(year_list)


plt.boxplot(x=tj, labels=year_list)
plt.xlabel('年份')
plt.ylabel('评分数据')
plt.show()
