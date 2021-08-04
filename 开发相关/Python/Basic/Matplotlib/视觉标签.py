import matplotlib.pyplot as plt

# 解决画布显示中文乱码
plt.rcParams['font.sans-serif'] = ['Arial Unicode MS']

# 画布
plt.figure()

# x轴 y轴
x = [1, 2, 3, 4, 5, 6]
y = [2, 4, 6, 8, 10, 12]

x2 = [2, 4, 5, 6, 7, 10]
y2 = [1, 3, 4, 6.5, 7, 9]

# 轴标签
plt.xlabel('x轴标签')
plt.ylabel('y轴标签')

# 标题
plt.title('大厉害的标题')

# 数据项标识：形状、颜色、说明标签
plt.scatter(x, y, color='r', marker='*', label='注释说明')
plt.scatter(x2, y2, color='b', marker='+', label='注释说明2')

# 网格
plt.grid(True)

# 注释说明
plt.legend()

# 主副刻度标签
plt.xticks(ticks=[0, 1, 4, 8, 12])
plt.yticks(ticks=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])

# 展示
plt.show()
