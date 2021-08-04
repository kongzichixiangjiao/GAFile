import openpyxl
from GAExcel import GAExcel

wb = GAExcel('create.xlsx')
print(wb)

print(wb.sheetnames())
sh = wb.getSH('Sheet')

print(sh)
print(sh.rows)
ce = sh.cell(row=1, column=1)
print(ce)

l = list(sh.rows)

for cases in l[1:]:
    case_number = cases[0].value
    case_student_no = cases[1].value
    case_name = cases[2].value
    case_sx_grade = cases[3].value
    case_yw_grade = cases[4].value
    case_total_grade = cases[5].value
    print("编号：" + str(case_number) + "，学号：" +
          str(case_student_no) + "，姓名：" + case_name +
          "，数学：" + str(case_sx_grade) + "，语文：" +
          str(case_yw_grade) + "，总分：" + str(case_total_grade))

wb.close()
