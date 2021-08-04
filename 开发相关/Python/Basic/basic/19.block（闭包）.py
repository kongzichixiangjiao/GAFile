def curve_pre():
    a = 25

    def curve(x):
        return a*x*x
    return curve


a = 10
f = curve_pre()
print(f.__closure__)  # (<cell at 0x10acee100: int object at 0x10ab3fe20>,)
print(f.__closure__[0].cell_contents)  # 25
print(f(2))  # 100


def f1():
    a = 10

    def f2():
        # a被python认为是一个局部白能量
        # a = 20
        nonlocal a
        a = 20
        return a
    return f2


f = f1()

print(f)  # <function f1.<locals>.f2 at 0x107456ee0>
print(f.__closure__)  # None
