# 继承 封装 多态

from mClass import People


class Student(People):
    sum = 0

    def __init__(self, name, age) -> None:
        # super().__init__(name)
        super(Student, self).__init__(name)
        self.age = age
        self.__score = 0
        self.__class__.sum = 1

    def do_homework(self):
        super().eat("Student", self.name, "大米")
        print("do_homework")


student = Student('hjn', 30)
student.do_homework()
student.eat("Student", "lsm", "屎球球")
print(student.name)
