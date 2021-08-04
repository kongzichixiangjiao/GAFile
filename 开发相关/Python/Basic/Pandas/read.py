import numpy as np
import pandas as pd
from pandas.core.frame import DataFrame

# 显示所有列
pd.set_option('display.max_columns', None)
# 显示所有行
pd.set_option('display.max_rows', None)
# 设置数据的显示长度，默认为50
pd.set_option('max_colwidth', 10)

# data = pd.read_excel("../spider/t3/多部电影数据.xlsx")
# print(data)

data = pd.read_excel("../spider/t3/多部电影数据.xlsx",
                     usecols=['title', 'country', 'language', 'releaseDate', 'average', 'votes', 'genre'])
# print(data.head(3))
# 重复处理
# 判断是否有重复数据 True为重复
b = data.duplicated()
# print(b)
# 去重
dupl_data = data.drop_duplicates()

# 缺失值处理
# 判断缺失值  True为缺失
nan_df = pd.isna(dupl_data)
# print(nan_df)
# 填充平均值 dupl_data['average'].mean()
dupl_data['average'] = dupl_data['average'].fillna(
    value=dupl_data['average'].mean()).round(1)
dupl_data['votes'] = dupl_data['votes'].fillna(
    value=dupl_data['votes'].mean()).astype("int")

# 分列 expand=True拆分为两列 expand=False 拆分成数组在当前列
# print(dupl_data['releaseDate'].str.split('(', expand=False))
# print(dupl_data['releaseDate'].str.split('(', expand=True)[0])
# 分列出日期
dupl_data['releaseDate'] = dupl_data['releaseDate'].str.split(
    '(', expand=True)[0]

# print(dupl_data)
dupl_data.to_excel("多部电影数据-洗.xlsx")

# 分类统计 resample必须是索引数据 Y:按年统计
# object转成datetime格式
dupl_data['releaseDate'] = pd.to_datetime(dupl_data['releaseDate'])
# 替换索引
dupl_data = dupl_data.set_index(dupl_data['releaseDate'])
data_year_tj = dupl_data['releaseDate'].resample('Y').count()
# print(data_year_tj)
data_year_tj.to_excel("多部电影数据-年份统计.xlsx")

# 类型统计
# 去掉[]
dupl_data['genre'] = dupl_data['genre'].str.strip(']')
dupl_data['genre'] = dupl_data['genre'].str.strip('[')
genreList = []
for g in dupl_data['genre']:
    gList = g.split(',')
    for label in gList:
        genreList.append(label.replace('\'', '').strip())

genreList = list(set(genreList))  # 去重使用set
genreList.remove('')  # 去空值
# print(genreList)
data_genre_tj = pd.DataFrame(
    np.zeros([len(genreList), 1]), index=genreList, columns=['tj'])

for i in dupl_data['genre']:
    for label in genreList:
        if str(i).__contains__(label):
            # print("累加1" + i)
            data_genre_tj.loc[label, 'tj'] += 1

# print(data_genre_tj)
data_genre_tj.to_excel("多部电影数据-类型统计.xlsx")

# 评分统计
# 查看列数据细节
# print(dupl_data['average'].describe())
# 打印结果
# count 总数量    403.000000
# mean 平均值       6.667742
# std 标准差        0.846856
# min 最小值       4.500000
# 25%        6.100000
# 50%        6.700000
# 75%        7.200000
# max 最大值       9.300000
# Name: average, dtype: float64
x = 4.5
rateList = []
while x <= 9.3:
    rateList.append(x.__round__(1))
    x += 0.1

# print(rateList)
date_rate_tj = pd.DataFrame(
    np.zeros([len(rateList), 1]), index=rateList, columns=['tj'])
# print(date_rate_tj)
for r in data['average']:
    for label in rateList:
        if r == label:
            # print("+1")
            # print(r, label)
            date_rate_tj.loc[label, 'tj'] += 1

# print(date_rate_tj)
date_rate_tj.to_excel("多部电影数据-评分统计.xlsx")


# 排序
# print(dupl_data.sort_values('title', ascending=True).head(10))
# print(dupl_data[['votes', 'average']].sort_values(
#     ['votes', 'average'], ascending=False).head(10))

# 筛选
# 0-50行数据
# print(dupl_data.iloc[0:50])
# 评分大于9.0
# print(dupl_data.loc[data['average'] >= 9.0])
# genre和title两列数据
# print(dupl_data[['genre', 'title']])
# 满足双重条件
# print(dupl_data.loc[dupl_data['average'] >= 9.0, ['genre', 'title']])

# 各国每年电影产量
countryList = []
for g in dupl_data['country']:
    gList = g.split('/')
    for label in gList:
        countryList.append(label.replace('\'', '').strip())

countryList = list(set(countryList))  # 去重使用set
# print(countryList)

country_year_tj = pd.DataFrame(dupl_data['releaseDate'].resample('Y').count())
print(country_year_tj)

for label in countryList:
    temp = dupl_data[dupl_data['country'].str.contains(label)]
    # print("===========")
    # print(label)  # 标签
    # print(len(temp))  # 频数
    # print(temp[['country', 'title']])
    country_year_tj[label] = temp['releaseDate'].resample('Y').count()
    # print(dataFrame)

country_year_tj = country_year_tj.fillna(value=0)
print(country_year_tj)
