import numpy as np
import matplotlib.pyplot as plt
import sys
import os

import_dir = \
    os.path.join(os.path.join(os.path.dirname(
        __file__), os.pardir), 'Pandas')
sys.path.insert(0, import_dir)
file_name = 'pandas_def'
pdef = __import__(file_name)


tj = pdef.movie_year_amount_tj()
tj['year'] = tj.index
print(tj)
years = tj['year'].dt.year
amounts = tj['releaseDate'].tolist()
print(years)
print(amounts)


width = 0.35
fig, ax = plt.subplots()

ax.bar(years, amounts, width=width)

ax.set_ylabel('Amounts of Movie')
ax.set_title('Scores by group and gender')

ax.legend()

plt.xticks(ticks=years.tolist())
plt.show()
