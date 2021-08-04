import os
from copy import deepcopy
from openpyxl.chart import (
    AreaChart,
    Reference,
    BarChart
)
from openpyxl import Workbook

# 定义一个面积图
# 定义一个柱形图

wb = Workbook()
ws = wb.active  # ws是个工作表
# 数组数据集
rows = [
    ['Number', 'Batch 1', 'Batch 2'],
    [2, 40, 30],
    [3, 40, 25],
    [4, 50, 30],
    [5, 30, 10],
    [6, 25, 5],
    [7, 50, 10],
]

for row in rows:
    ws.append(row)
# 创建一个面积图表，图表属性
chart = AreaChart()
chart.title = "Area Chart"
chart.style = 11
chart.x_axis.title = 'Test'
chart.y_axis.title = 'Percentage'
# 不知道是干嘛的，看别的写的好像都一样
cats = Reference(ws, min_col=1, min_row=1, max_row=7)
data = Reference(ws, min_col=2, min_row=1, max_col=3, max_row=5)
chart.add_data(data, titles_from_data=True)
chart.set_categories(cats)
# 插入面积图1
ws.add_chart(chart, "A10")
# ------------------------
chart2 = deepcopy(chart)
chart2.style = 11
chart2.type = "bar"
chart2.title = "Horizontal Bar Chart"
ws.add_chart(chart2, "K10")
# 插入面积图2，横向的
# -----------------------------------------
# 定义一个柱形图表
chartbar = BarChart()
chartbar.title = "Bar Chart"
chartbar.style = 12
chartbar.x_axis.title = 'Test'
chartbar.y_axis.title = 'Percentage'
# 定义
cats = Reference(ws, min_col=1, min_row=1, max_row=7)
data = Reference(ws, min_col=2, min_row=1, max_col=3, max_row=7)
chartbar.add_data(data, titles_from_data=True)
chartbar.set_categories(cats)
# 复制柱形图表并修改类型为堆叠形式
chart3 = deepcopy(chartbar)
chart3.style = 12
chart3.type = "col"
chart3.title = "Stacked Chart"
chart3.grouping = "stacked"
chart3.overlap = 100
ws.add_chart(chart3, "A27")

# 百分比堆叠柱形图---------------------------------
chart4 = deepcopy(chartbar)
chart4.style = 12
chart4.type = "bar"
chart4.grouping = "percentStacked"
chart4.overlap = 100
chart4.title = "Percent Stacked Chart"
ws.add_chart(chart4, "K27")
# 当前文件的路径
pwd = os.getcwd()

# 修改完毕保存到文件
wb.save(pwd + '/Excel/source/area.xlsx')
