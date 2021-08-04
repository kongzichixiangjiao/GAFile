import json

json_str = '{"name":"hjn", "age": 30}'
p = json.loads(json_str)
print(type(p))  # <class 'dict'>
print(p)  # {'name': 'hjn', 'age': 30}
print(p['name'])  # hjn
print(p['age'])  # 30


s = [{'name': 'hjn', 'age': 30, 'flag': False},
     {'name': 'lsm', 'age': 29}]

json_str = json.dumps(s)
print(type(json_str))  # <class 'str'>
# [{"name": "hjn", "age": 30, "flag": false}, {"name": "lsm", "age": 29}]
print(json_str)
