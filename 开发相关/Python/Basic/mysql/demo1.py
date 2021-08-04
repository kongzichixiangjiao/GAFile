import pymysql

DBHOST = 'localhost'
DBUSER = 'root'
DBPASS = '111111'
DBNAME = 'zuoye'

try:
    db = pymysql.connect(host=DBHOST, user=DBUSER, password=DBPASS, db=DBNAME)
    print('OK')
except pymysql.Error as e:
    print("NO "+str(e))


try:
    db = pymysql.connect(host=DBHOST, user=DBUSER, password=DBPASS, db=DBNAME)
    print('数据库连接OK')
    cur = db.cursor()
    sqlQuery = "select * from Score"
    count = cur.execute(sqlQuery)
    print(count)
    result = cur.fetchall()
    for i in result:
        print(i)
except pymysql.Error as e:
    print("NO "+str(e))
