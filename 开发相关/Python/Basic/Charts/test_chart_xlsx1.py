import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
import matplotlib as mpl
mpl.rcParams['font.sans-serif'] = ['SimHei']

# read_excel API
# pd.read_excel(io, sheet_name=0, header="指定列名字的行", names=None, index_col=None, usecols=“指定读取的列, eg:[0, 1]”)
df = pd.read_excel(
    "/Users/houjianan/Documents/GitHub/Python/Basic/Charts/test2.xlsx", sheet_name="Sheet1")

# read the specific line
data_line1 = df.loc[0].values  # the first line data(line 1)

# read the specific column data
x = df["name"]
y = df['age']

# setup the figure
fig = plt.figure()
plt.ylim(3, 50)

# plot the histogram
plt.bar(x, y, alpha=0.5, width=0.3, color='yellow',
        edgecolor='red', label='plot the age figure', lw=1)

# plot the curve figure
plt.plot(x, y)

# set the legend
plt.legend(loc='upper left')
fig.suptitle('example for plot', fontsize=15)

plt.show()
