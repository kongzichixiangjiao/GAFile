import numpy as np
import matplotlib.pyplot as plt

"""
格式字符串中的顺序没有要求
color: g 绿色, b 蓝色, r 红色, m 酒红色
marker: o 圆圈标记, -横线标记, 1 三叉戟标记, p五边形标记
line: -实线, ..点和虚线交替, : 点线, --选线
"""
a = np.arange(10)
plt.plot(a, a * 1.5, 'go-',
         a, a ** 2, 'b-..',
         a, a * 5, 'r1:',
         a, np.sin(a), 'mp--')
plt.show()
