import numpy as np
import pandas as pd

s = pd.Series([1, 3, 4, np.nan, 6, 9])
print(s)

dates = pd.date_range("20211212", periods=5)
print(dates)

df = pd.DataFrame(np.random.randn(5, 3), index=dates, columns=list('ABC'))
print(df)
