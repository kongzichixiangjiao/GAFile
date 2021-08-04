from enum import Enum
from enum import IntEnum, unique


# 引入unique 值重复会报错
@unique
class VIP(IntEnum):
    h1 = 1
    h2 = 2
    h3 = 3
    h4 = 4
    # h5 = 4 # ValueError: duplicate values found in <enum 'VIP'>: h5 -> h4


class Color(Enum):
    red = 1
    red_alias = 1
    orange = "orange"
    yellow = 3
    green = 4
    blue = 5


color = Color(2)

if color == Color.red:
    pass
elif color == Color.orange:
    pass
elif color == Color.blue:
    pass
else:
    pass

print(color)  # Color.orange
print(type(color))  # <enum 'Color'>
print(isinstance(color, Enum))  # True

print(Color['orange'])  # Color.orange
print(Color(2))  # Color.orange

green = Color.green
print(green)  # Color.green
print(green.value)  # 4
print(green.name)  # green


print("遍历Color")
for color in Color:
    print(color)

print("遍历Color.__members__")
for color in Color.__members__:
    print(color)
'''
Color.red
Color.orange
Color.yellow
Color.green
Color.blue
'''

print(Color.red is Color.red)  # True
print(Color.red == Color.red)  # True
# print(Color.red < Color.blue)  # '<' not supported between instances of 'Color' and 'Color'

print(Color.red)  # Color.red
print(type(Color.red))  # <enum 'Color'>
print(Color.red.name)  # red
print(type(Color.red.name))  # <class 'str'>
print(Color['red'])  # Color.red
