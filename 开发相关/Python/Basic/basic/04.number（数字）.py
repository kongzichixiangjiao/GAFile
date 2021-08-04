import math

number = 0xA0F  # 十六进制
print(number)  # 2575

number = 0o37  # 八进制
print(number)  # 31


number = 10
print(float(number))  # 10.0
print(int(number))  # 10
print(complex(number))  # (10+0j)
# 将 x 和 y 转换到一个复数，实数部分为 x，虚数部分为 y
print(complex(number, 3))  # (10+3j)


# 数学函数

'''
abs(x) 绝对值
ceil(x) 向上取整
floor(x) 向下取整
(x>y)-(x<y) 如果 x < y 返回 -1, 如果 x == y 返回 0, 如果 x > y 返回 1
exp(x) e的x次幂 
fabs(x) 绝对值 math.fabs(-10) >>> 10.0
log(x) 对数  math.log(100, 10) >>> 2.0
log10(x)  math.log10(100)  >>> 2.0
max(x1, x2...)
min(x1, x2...)
modf(x)  print(math.modf(10.2))  # (0.1999999999999993, 10.0)
pow(x, y)  x的y次幂
round(x, [,n]) 返回浮点数 x 的四舍五入值，如给出 n 值，则代表舍入到小数点后的位数。
sqrt(x)  返回数字x的平方根
'''

# 随机函数

'''
choice(seq)   从序列的元素中随机挑选一个元素，比如random.choice(range(10))，从0到9中随机挑选一个整数。
randrange([start,] stop [,step])   从指定范围内，按指定基数递增的集合中获取一个随机数，基数默认值为 1
random()  随机生成下一个实数，它在[0,1)范围内。
seed([x])  改变随机数生成器的种子seed。如果你不了解其原理，你不必特别去设定seed，Python会帮你选择seed。
shuffle(lst)  将序列的所有元素随机排序
uniform(x, y)  随机生成下一个实数，它在[x,y]范围内。
'''

# 三角函数

'''
acos(x)	返回x的反余弦弧度值。
asin(x)	返回x的反正弦弧度值。
atan(x)	返回x的反正切弧度值。
atan2(y, x)	返回给定的 X 及 Y 坐标值的反正切值。
cos(x)	返回x的弧度的余弦值。
hypot(x, y)	返回欧几里德范数 sqrt(x*x + y*y)。
sin(x)	返回的x弧度的正弦值。
tan(x)	返回x弧度的正切值。
degrees(x)	将弧度转换为角度,如degrees(math.pi/2) ， 返回90.0
radians(x)	将角度转换为弧度
'''

# 数学常量

'''
pi
e
'''
