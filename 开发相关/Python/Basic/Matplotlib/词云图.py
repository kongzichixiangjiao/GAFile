
import numpy as np

import os
import sys
import re
from PIL import Image
from os import path
from wordcloud import WordCloud
import matplotlib.pyplot as plt

import_dir = \
    os.path.join(os.path.join(os.path.dirname(
        __file__), os.pardir), 'Pandas')
sys.path.insert(0, import_dir)
file_name = 'pandas_def'
pdef = __import__(file_name)


def makeImage(text):
    alice_mask = np.array(Image.open("001.png"))

    # 解决画布显示中文乱码
    # font_path = "/System/Library/Fonts/PingFang.ttc"
    # plt.rcParams['font.sans-serif'] = ['Arial Unicode MS']
    wc = WordCloud(background_color="white", max_words=1000,
                   mask=alice_mask, font_path="/System/Library/Fonts/PingFang.ttc")
    # generate word cloud
    wc.generate_from_frequencies(text)

    # show
    plt.imshow(wc, interpolation="bilinear")
    plt.axis("off")
    plt.show()


if __name__ == '__main__':
    tj = pdef.genre_tj()
    tj = tj.sort_values('tj', ascending=False)
    # print(tj['tj'])
    # print(tj.head(10))

    keys = tj.index.tolist()
    values = tj['tj'].tolist()
    dic = dict(zip(keys, values))
    # print(dic)
    makeImage(dic)
