import openpyxl

wb = openpyxl.load_workbook(
    '/Users/houjianan/Documents/GitHub/Python/Basic/Excel/source/load.xlsx')

print(wb.rels)
print(wb.calculation)
print(wb.views)


wb.close()
