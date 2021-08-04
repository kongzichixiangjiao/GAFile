import pandas as pd

from datetime import datetime
data_dict = {
    'c_time': datetime.now().strftime('%y-%m-%d %H:%M:%s'),
    'id': 56,
    'name': '牛逼',
    'sex': 0,
    'qq': 154745845,
    'tel': 15748586589,
    'period': '第四期',
    'course': '机器学习',
    'is_delete': 0
}
data = pd.DataFrame(data=data_dict, index=[0])


data.to_excel("xxx.xlsx")
print("13")
