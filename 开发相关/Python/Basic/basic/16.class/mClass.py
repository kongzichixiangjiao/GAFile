# 类


class Person():
    name = '-类变量-'
    age = 0

    def __init__(self) -> None:
        super().__init__()
        print("__init__")

    def print_file(self):
        print(self.name, self.age)  # hjn 30

    def func(self) -> int:
        print("func---")
        return 2


person = Person()
person.name = 'hjn'
person.age = 30

print(person)  # <__main__.Person object at 0x10b123100>
person.print_file()
print(person.func())

print(Person.name)


class StudentHomework():
    homework_name = ''

    def __init__(self, homework_name) -> None:
        super().__init__()
        print(homework_name)
        self.homework_name = homework_name
        self.age = 30

    def study(self):
        print("学习")


s = StudentHomework("哈哈")

print(s.homework_name)
print(s.age)


class Student():
    name = '默认'

    def __init__(self, name) -> None:
        super().__init__()
        # name
        name = name


student = Student("hjn")

print(student.name)  # 默认
print(Student.name)  # 默认
print(student.__dict__)  # {}


class Student1():
    name = '默认'
    age = 30  # 类变量

    def __init__(self, name) -> None:
        super().__init__()
        # self.name
        self.name = name
        self.__hobby = "吃"  # 定义私有变量 # 没有绝对的私有变量
        print(id(self.__hobby))
        self.__class__.name = name
        self.__class__.age += 1
        self.score = 0
        print(self.__class__.age)  # 31 32 33

    # 类方法：使用装饰器@classmethod
    @classmethod
    def plus_sum(cls):
        print("plus_sum-start")
        print(cls.age)
        print(cls.name)
        print(cls)  # <class '__main__.Student1'>
        print("plus_sum-end")

    @classmethod
    def demo(class1):
        print(class1)

    # 静态方法：使用装饰器@staticmethod
    @staticmethod
    def eat(food):
        print("eat-start")
        print(Student1.name)
        print(food)
        print("eat-end")

    def do_homework(self):
        self.do_english_homework()

    def do_english_homework(self):
        print("do_english_homework")

    def marking(self, score) -> str:
        if score < 0:
            self.score = 0
            return "不能打负分"

        self.score = score
        print("marking-start")
        print("考试分数：", self.score, '分')
        print("marking-end")
        return "考试分数：" + str(self.score) + '分'

    # 私有方法 __
    def __run():
        print("__run")


student = Student1('哈哈')
student1 = Student1('呵呵')
student2 = Student1('嘿嘿')

print(student.name)  # 哈哈
print(Student1.name)  # 默认
print(student.__dict__)  # {'name': '哈哈'}

Student1.plus_sum()
Student1.eat("大米")
student1.eat("小米")
student1.marking(60)
student1.__hobby = "玩"  # 动态又添加了一个__hobby变量 和 __hobby私有变量不是同一个
print(id(student1.__hobby))
# {'name': '呵呵', '_Student1__hobby': '吃', 'score': 60, '__hobby': '玩'}
print(student1.__dict__)
# {'name': '嘿嘿', '_Student1__hobby': '吃', 'score': 0}
print(student2.__dict__)
# 没有绝对的私有变量
print(student2._Student1__hobby)  # 吃


# 继承
class People():
    def __init__(self, name) -> None:
        super().__init__()

        self.name = name
        print("16.class.py People __init__")

    def eat(self, where, name, food):
        print("People eat satart")
        print(where, name, food)
        print("People eat end")

    def run(self):
        pass
