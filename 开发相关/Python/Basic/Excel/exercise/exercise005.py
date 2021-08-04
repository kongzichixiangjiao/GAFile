from copy import deepcopy
import os
from openpyxl import Workbook
from openpyxl.chart import (
    AreaChart,
    Reference,
    Series,
)

wb = Workbook()
ws = wb.active

rows = [
    ['Number', 'Batch 1', 'Batch 2'],
    ["a", 40, 30],
    ["b", 40, 25],
    ["c", 50, 30],
    ["d", 30, 10],
    ["e", 25, 5],
    ["f", 50, 10],
]

for row in rows:            # 为worksheet写入多行数据
    ws.append(row)          # 将list作为一行数据写入worksheet中

chart = AreaChart()         # 创建 2D图表 对象
chart.title = "Area Chart"  # 设置图表标题
chart.style = 13            # 设置图标风格
# chart.grouping="standard"   # 设置图表 grouping 类型
chart.x_axis.title = 'Test'     # 设置x轴名称
chart.y_axis.title = 'Percentage'   # 设置y轴名称

cats = Reference(ws, min_col=1, min_row=1, max_row=7)       # 关联分类数据的值
data = Reference(ws, min_col=2, min_row=1, max_col=3, max_row=7)    # 关联构图数据的值
chart.add_data(data, titles_from_data=True)     # 为图表添加数据
chart.set_categories(cats)      # 为图表添加分类

ws.add_chart(chart, "A10")      # 设置图表位置


pwd = os.getcwd()
wb.save(pwd + '/Excel/source/area.xlsx')
