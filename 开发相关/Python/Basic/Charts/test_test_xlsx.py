import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
import matplotlib as mpl
mpl.rcParams['font.sans-serif'] = ['SimHei']

# read_excel API
# pd.read_excel(io, sheet_name=0, header="指定列名字的行", names=None, index_col=None, usecols=“指定读取的列, eg:[0, 1]”)
df = pd.read_excel(
    "/Users/houjianan/Documents/GitHub/Python/Basic/Charts/source/test.xlsx", sheet_name="6.1")

# 查看所有行索引名称
print(df.columns)

# 索引名称
c0 = df.columns[0]
c3 = df.columns[3]

# 根据索引名称查询列数据 是series结构
print(df[c0])
print(type(df[c3]))  # <class 'pandas.core.series.Series'>

# 获取多行多列数据
print(df[[c0, c3]][:5])  # 二列五行

# 同时筛选行和列
# pf.loc[行名称,列名称]
print(df.loc[2, c3])  # 3行4列
# pf.iloc[行下标,列下标]
print(df.iloc[2, 2])  # 3行3列

c1 = df.columns[1]
c2 = df.columns[2]
c4 = df.columns[4]
print(df[c0]+df[c1]+"-"+df[c2] + "-")
print(df[c4])
