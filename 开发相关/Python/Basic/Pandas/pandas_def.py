
from os import dup
import numpy as np
import pandas as pd
from pandas.core.frame import DataFrame


def get_dupl_data():
    # 显示所有列
    pd.set_option('display.max_columns', None)
    # 显示所有行
    pd.set_option('display.max_rows', None)
    # 设置数据的显示长度，默认为50
    pd.set_option('max_colwidth', 10)

    data = pd.read_excel("../spider/t3/多部电影数据.xlsx",
                         usecols=['title', 'country', 'language', 'releaseDate', 'average', 'votes', 'genre'])
    dupl_data = data.drop_duplicates()
    dupl_data['average'] = dupl_data['average'].fillna(
        value=dupl_data['average'].mean()).round(1)
    dupl_data['votes'] = dupl_data['votes'].fillna(
        value=dupl_data['votes'].mean()).astype("int")
    dupl_data['releaseDate'] = dupl_data['releaseDate'].str.split(
        '(', expand=True)[0]

    dupl_data['releaseDate'] = pd.to_datetime(dupl_data['releaseDate'])
    dupl_data = dupl_data.set_index(dupl_data['releaseDate'])
    return dupl_data


def movie_year_amount_tj():
    dupl_data = get_dupl_data()

    data_year_tj = dupl_data['releaseDate'].resample('Y').count()
    return pd.DataFrame(data_year_tj)


def country_year_tj():
    dupl_data = get_dupl_data()
    countryList = []

    for g in dupl_data['country']:
        gList = g.split('/')
        for label in gList:
            countryList.append(label.replace('\'', '').strip())

    countryList = list(set(countryList))  # 去重使用set
    country_year_tj = pd.DataFrame(
        dupl_data['releaseDate'].resample('Y').count())
    country_year_tj = country_year_tj.drop(columns='releaseDate')
    for label in countryList:
        temp = dupl_data[dupl_data['country'].str.contains(label)]
        country_year_tj[label] = temp['releaseDate'].resample('Y').count()

    country_year_tj = country_year_tj.fillna(value=0)
    return country_year_tj


def language_tj():
    dupl_data = get_dupl_data()
    dupl_data['language'] = dupl_data['language'].str.strip(
        ' ').fillna(value='')
    language_list = []
    for l in dupl_data['language']:
        l_list = l.split('/')
        for label in l_list:
            language_list.append(label.strip())

    language_list = list(set(language_list))
    language_list.remove('')
    # language_list.remove('汉语普通话')

    data_language_tj = pd.DataFrame(
        np.zeros([len(language_list), 1]), index=language_list, columns=['tj'])

    for i in dupl_data['language']:
        for label in language_list:
            if str(i).__contains__(label):
                data_language_tj.loc[label, 'tj'] += 1

    return data_language_tj


def genre_tj():
    # 类型统计
    dupl_data = get_dupl_data()
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

    return data_genre_tj


# 排名前x位类型标签
def genre_rates_tj(x):
    genre_list = genre_tj().sort_values('tj', ascending=False).head(x).index.tolist()
    rate_list = [2, 3, 4, 5, 6, 7, 8, 9, 10]
    dupl_data = get_dupl_data()
    data_genre_tj = pd.DataFrame(np.zeros(
        [len(rate_list), len(genre_list)]), index=rate_list, columns=genre_list)

    for g in genre_list:
        for rate in rate_list:
            for i, r in zip(dupl_data['genre'], dupl_data['average']):
                if str(i).__contains__(g) and rate < r < rate + 1:
                    # print("累加1" + i)
                    data_genre_tj.loc[rate, g] += 1

    return data_genre_tj


def rate_tj_by_year(year_list):
    dupl_data = get_dupl_data()
    dupl_data = dupl_data.set_index(pd.to_datetime(dupl_data['releaseDate']))
    tj = []

    for year in year_list:
        tj.append(dupl_data.loc[year]['average'].tolist())

    return tj


if __name__ == '__main__':
    # print(movie_year_amount_tj())ls
    # print(country_year_tj())
    # print(language_tj())
    # print(genre_tj())
    # print(genre_rates_tj(15))
    print(rate_tj_by_year(['2020', '2021']))
