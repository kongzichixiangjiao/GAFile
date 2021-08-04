var1 = 'Hello World!'
var2 = 'Hjnnnnn'

# 字符串截取
print(var2[1:5])  # jnnn

print("line1 \
... line2 \
... line3")  # line1 ... line2 ... line3

print("\\")  # \

print('\'')  # '

print('\"')  # "

print("\a")  # 执行后电脑有响声。(在终端执行)
# 退格(Backspace)
print("Hello \b World!")   # Hello  World!

# print("\000")  # 空

print("123 \n 123")
'''
123 
 123
'''

# 纵向制表符
print("Hello \v World!")  # Hello  World!
# 横向制表符
print("Hello \t World!")   # Hello 	 World!

# 回车
print('google runoob taobao\r123456')
'''
google runoob taobao
123456
'''

# 换页
print("Hello \f World!")  #

# 八进制数，y 代表 0~7 的字符，例如：\012 代表换行。
print("\110\145\154\154\157\40\127\157\162\154\144\41")  # Hello World!

# 十六进制数，以 \x 开头，y 代表的字符，例如：\x0a 代表换行
print("\x48\x65\x6c\x6c\x6f\x20\x57\x6f\x72\x6c\x64\x21")  # Hello World!


'''
+  *  []  [:]  in   not in   r/R（原始字符）   %（格式化字符）
'''


# 字符串格式化

'''
%c	 格式化字符及其ASCII码
%s	 格式化字符串
%d	 格式化整数
%u	 格式化无符号整型
%o	 格式化无符号八进制数
%x	 格式化无符号十六进制数
%X	 格式化无符号十六进制数（大写）
%f	 格式化浮点数字，可指定小数点后的精度
%e	 用科学计数法格式化浮点数
%E	 作用同%e，用科学计数法格式化浮点数
%g	 %f和%e的简写
%G	 %f 和 %E 的简写
%p	 用十六进制数格式化变量的地址
'''

'''
*	定义宽度或者小数点精度
-	用做左对齐
+	在正数前面显示加号( + )
<sp>	在正数前面显示空格
#	在八进制数前面显示零('0')，在十六进制前面显示'0x'或者'0X'(取决于用的是'x'还是'X')
0	显示的数字前面填充'0'而不是默认的空格
%	'%%'输出一个单一的'%'
(var)	映射变量(字典参数)
m.n.	m 是显示的最小总宽度,n 是小数点后的位数(如果可用的话)
'''

print("我叫%s，今年%d岁！" % ('hjn', 30))

para_str = """这是一个多行字符串的实例
多行字符串可以使用制表符
TAB ( \t )。
也可以使用换行符 [ \n ]。
"""
print(para_str)
'''
这是一个多行字符串的实例
多行字符串可以使用制表符
TAB ( 	 )。
也可以使用换行符 [ 
 ]。
'''


# f-string (python3.6)

name = 'hjn'
print(f'hi! {name}')  # hi! hjn

print(f'{1 + 2}')  # 3

w = {'name': 'hjn', 'age': 30}
print(f'{w["name"]}: {w["age"]}')  # hjn: 30


# *********************
# *****字符串内建函数*****
# *********************

varS = 'hello, world!'

# capitalize 第一个字母转大写
print(varS.capitalize())  # Hello, world!


# 返回一个指定的宽度 width 居中的字符串，fillchar 为填充的字符，默认为空格。
print(varS.center(19, '*'))  # ***hello, world!***


# 返回 str 在 string 里面出现的次数，如果 beg 或者 end 指定则返回指定范围内 str 出现的次数
print(varS.count('l', 0, 11))  # 3


# 编码
varC = '中文编解码操作。'
varC_utf8 = varC.encode('UTF-8')
varC_gbk = varC.encode('GBK')
print(varC_utf8, varC_gbk)  # b'\xe4\xb8\xad\xe6\x96\x87\xe7\xbc\x96\xe8\xa7\xa3\xe7\xa0\x81\xe6\x93\x8d\xe4\xbd\x9c\xe3\x80\x82' b'\xd6\xd0\xce\xc4\xb1\xe0\xbd\xe2\xc2\xeb\xb2\xd9\xd7\xf7\xa1\xa3'
print(varC)
# 解码
print(varC_utf8.decode('UTF-8', 'strict'))  # hello, world!
print(varC_gbk.decode('GBK', 'strict'))  # hello, world!


print("-----endswith和startswith-----")
# endswith() 方法用于判断字符串是否以指定后缀结尾，如果以指定后缀结尾返回 True，否则返回 False。
# 可选参数 "start" 与 "end" 为检索字符串的开始与结束位置。
varEndswith = 'www.hjn.com'
suffix = 'com'
suffix1 = 'com1'
suffix2 = 'www'

print(varEndswith.endswith(suffix))  # True
print(varEndswith.endswith(suffix1))  # False
print(varEndswith.endswith(suffix2, 0, 3))  # True

# 检查字符串是否是以指定子字符串 substr 开头，是则返回 True，否则返回 False。如果beg 和 end 指定值，则在指定范围内检查。
print('this is haha'.startswith('this'))  # True
print('this is haha'.startswith('this', 4))  # False


# 把字符串 string 中的 tab 符号转为空格，tab 符号默认的空格数是 8 。
varExpandtabs = 'www\thjn\tcom'

print(varExpandtabs)  # www	hjn	com
print(varExpandtabs.expandtabs())  # www     hjn     com
print(varExpandtabs.expandtabs(3))  # www   hjn   com


# 检测 str 是否包含在字符串中，如果指定范围 beg 和 end ，则检查是否包含在指定范围内，如果包含返回开始的索引值，否则返回-1
varFind = 'www.hjn.com'
print(varFind.find('hjn'))  # 4
print(varFind.find('lsm'))  # -1
print(varFind.find('www', 0, 3))  # 0
print(varFind.find('www', 1, 3))  # -1
# 类似于 find()函数，不过是从右边开始查找.
print("类似于 find()函数，不过是从右边开始查找.")
print(varFind.rfind('hjn'))  # 4
print(varFind.rfind('lsm'))  # -1
print(varFind.rfind('www', 0, 3))  # 0
print(varFind.rfind('www', 1, 3))  # -1


# index(str, beg=0, end=len(string))  跟find()方法一样，只不过如果str不在字符串中会报一个异常。
varIndex = 'www.hjn.com'
print(varIndex.index('hjn'))  # 4
# print(varIndex.index('lsm'))  # ValueError: substring not found
print(varIndex.index('www', 0, 3))  # 0
# print(varIndex.index('www', 1, 3))  # ValueError: substring not found
# 类似于 index()，不过是从右边开始.
print("类似于 index()，不过是从右边开始.")
print(varIndex.rindex('hjn'))  # 4
# print(varIndex.rindex('lsm'))  # ValueError: substring not found
print(varIndex.rindex('www', 0, 3))  # 0
# print(varIndex.rindex('www', 1, 3))  # ValueError: substring not found


# 如果字符串至少有一个字符并且所有字符都是 字母或数字 则返 回 True，否则返回 False
print("abc123我".isalnum())  # True
print("abc123我#".isalnum())  # False


# 如果字符串至少有一个字符并且所有字符都是 字母或中文字 则返回 True, 否则返回 False
print("abc我".isalpha())  # True
print("abc123我".isalpha())  # False


print("-----------大小写转换islower、swapcase、upper、lower--------------")
# 如果字符串中包含至少一个区分大小写的字符，并且所有这些(区分大小写的)字符都是小写，则返回 True，否则返回 False
print('abc我123'.islower())  # True
print('Abc我123'.islower())  # False

# 将字符串中大写转换为小写，小写转换为大写
print('aBc'.swapcase())  # AbC

print('aaabbbccc'.upper())  # AAABBBCCC
print('ABCcccc'.lower())  # abccccc


# 如果字符串中只包含 数字 字符，则返回 True，否则返回 False
print('123'.isnumeric())  # True
print('123acb'.isnumeric())  # False


# 如果字符串中只包含 空白 ，则返回 True，否则返回 False.
print(' '.isspace())  # True
print('1   2'.isspace())  # False


print("--------标题化 title isTitle-----------")
# 如果字符串是标题化的(见 title())则返回 True，否则返回 False
str = "This Is String Example...Wow!!!"
print(str.istitle())  # True
str = "This is string example....wow!!!"
print(str.istitle())  # False

# 返回"标题化"的字符串,就是说所有单词都是以大写开始，其余字母均为小写(见 istitle())
print('this is string example.'.title())  # This Is String Example.
print('hellow 2b2b2b'.title())  # Hellow 2B2B2B


print("----lstrip 、rstrip 、strip-----")
# 截掉字符串左边的空格或指定字符。
print('  houjianan_110@163.com'.lstrip())  # houjianan_110@163.com
print('****houjianan_110@163.com'.lstrip('*'))  # houjianan_110@163.com


# 删除字符串字符串末尾的空格.
print('houjianan_110@163.com   '.rstrip())  # houjianan_110@163.com
print('houjianan_110@163.com***'.rstrip('*'))  # houjianan_110@163.com


# strip() 方法用于移除字符串头尾指定的字符（默认为空格）或字符序列。 不能删除中间字符串
print('***houjianan***'.strip('*'))  # houjianan
print('123houjianan321'.strip('123'))  # houjianan


print("---------创建映射表--------------")
# 创建字符映射的转换表，对于接受两个参数的最简单的调用方式，第一个参数是字符串，表示需要转换的字符，第二个参数也是字符串表示转换的目标。
strMaketrans = "this is c's hahaha. that is a's heheh"
intab = "abcdei"
outtab = "123450"
trantab = strMaketrans.maketrans(intab, outtab)

print(strMaketrans.translate(trantab))  # th0s 0s 3's h1h1h1. th1t 0s 1's h5h5h

# 转换为大写，并删除字母o
bytes_tabtrans = bytes.maketrans(
    b'abcdefghijklmnopqrstuvwxyz', b'ABCDEFGHIJKLMNOPQRSTUVWXYZ')
print(b'runoob'.translate(bytes_tabtrans, b'o'))  # b'RUNB'


# 返回字符串 str 中最大、最小的字母。
print(max('abc'))  # c
print(min('abc'))  # a


# 把 将字符串中的 old 替换成 new,如果 max 指定，则替换不超过 max 次。

print('abcdabcdacbaabbccdd'.replace('a', '-'))  # -bcd-bcd-cb--bbccdd
print('abcdabcdacbaabbccdd'.replace('a', '-', 3))  # -bcd-bcd-cbaabbccdd


# 返回一个原字符串右对齐,并使用fillchar(默认空格）填充至长度 width 的新字符串
print('houjianan_110@163.com'.rjust(30, '*'))  # *********houjianan_110@163.com


# 以 str 为分隔符截取字符串，如果 num 有指定值，则仅截取 num+1 个子字符串
print('abc,efg,ddd,hhaha'.split(','))  # ['abc', 'efg', 'ddd', 'hhaha']


# splitlines() 按照行('\r', '\r\n', \n')分隔，返回一个包含各行作为元素的列表，如果参数 keepends 为 False，不包含换行符，如果为 True，则保留换行符。

print('ab c\n\nde fg\rkl\r\n'.splitlines())  # ['ab c', '', 'de fg', 'kl']
# ['ab c\n', '\n', 'de fg\r', 'kl\r\n']
print('ab c\n\nde fg\rkl\r\n'.splitlines(True))


# zfill() 方法返回指定长度的字符串，原字符串右对齐，前面填充0。
print('this is string'.zfill(10))  # this is string
print('this is string'.zfill(20))  # 000000this is string


# isdecimal() 方法检查字符串是否只包含十进制字符。这种方法只存在于unicode对象。
print('hjn1990'.isdecimal())  # False
print('1990'.isdecimal())  # True
