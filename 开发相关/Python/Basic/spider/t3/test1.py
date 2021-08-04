b = '''
{'record': {'weight':20,'server':'100.1.7.9','maxconn':50},'backend': 'www.oldboy.org'}
'''
c = eval(b)  # eval字符串转换成字典
print(c)
