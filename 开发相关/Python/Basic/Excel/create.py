import openpyxl

wb = openpyxl.Workbook()

wb.create_sheet('test_sheet')

wb.save('/Users/houjianan/Desktop/create.xlsx')

wb.close()
