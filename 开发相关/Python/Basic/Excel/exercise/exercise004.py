from copy import deepcopy
import openpyxl
from openpyxl.chart import (
    BubbleChart,
    BarChart,
    Reference,
    Series
)

import os

# 当前文件的路径
pwd = os.getcwd()
print(pwd)

workbook = openpyxl.load_workbook(pwd + '/Excel/source/成都铁塔车辆状态更新.xlsx')
print(workbook.sheetnames)
print(workbook.active)

ws = workbook['6.2']
print(ws)


# 创建一个面积图表，图表属性
bubbleChart = BubbleChart()
bubbleChart.title = "Area Chart"

xvalues = "'6.2'!$B$3:B$17"
yvalues = "'6.2'!$E$3:E$17"
size = "'6.2'!$E$3:E$17"
series = Series(values=yvalues, xvalues=xvalues, zvalues=size, title="投放数量")
bubbleChart.series.append(series)

xvalues = "'6.2'!$B$3:B$17"
yvalues = Reference(ws, min_col=6, min_row=3, max_row=17)
# yvalues = "'6.2'!$F$3:F$17"
size = "'6.2'!$F$3:F$17"
series = Series(values=yvalues, xvalues=xvalues, zvalues=size, title="已出租数量")
bubbleChart.series.append(series)

xvalues = "'6.2'!$B$3:B$17"
yvalues = "'6.2'!$G$3:G$17"
size = "'6.2'!$G$3:G$17"
series = Series(values=yvalues, xvalues=xvalues, zvalues=size, title="滞留数量")
bubbleChart.series.append(series)

ws.add_chart(bubbleChart, "A20")

barChart = BarChart()         # 创建  2D柱状图 对象
barChart.type = "col"         # 柱状图type=col，垂直图。
barChart.style = 10           # style显示不同的风格
barChart.title = "Bar Chart"                      # 图形名称
barChart.y_axis.title = 'Test number'             # y轴名称
barChart.x_axis.title = 'Sample length (mm)'      # x名称

barChart.type = "col"                 # 水平柱状图
barChart.style = 12
barChart.grouping = "stacked"         # 类型为堆栈
barChart.overlap = 100                # 必须设置内容
barChart.title = 'Stacked Chart'

data = Reference(ws, min_col=5, max_col=7, min_row=2, max_row=17)
cats = Reference(ws, min_col=1, min_row=2, max_row=17)
barChart.add_data(data, titles_from_data=True)

ws.add_chart(barChart, "E20")
# 当前文件的路径
pwd = os.getcwd()
# 修改完毕保存到文件
workbook.save(pwd + '/Excel/source/成都铁塔车辆状态更新.xlsx')
