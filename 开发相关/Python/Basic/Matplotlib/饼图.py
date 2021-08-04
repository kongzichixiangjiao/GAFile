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

tj = pdef.language_tj()
tj = tj.sort_values('tj', ascending=False)
print(tj['tj'])
# print(tj.head(10))

# 解决画布显示中文乱码
plt.rcParams['font.sans-serif'] = ['Arial Unicode MS']

# tj = tj.head(10)
tj = tj.iloc[0:8]
labels = tj.index
sizes = tj['tj'].tolist()
plt.pie(sizes, labels=labels, autopct='%1.1f%%', shadow=True, startangle=90)
plt.title("电影语种统计")
plt.legend(title="Ingredients",
           loc="center left",
           bbox_to_anchor=(1, 0, 0.5, 1))
plt.show()
