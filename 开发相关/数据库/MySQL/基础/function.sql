
### 数字函数

# 绝对值
select abs(-100);

# 四舍五入
select round(4.6288*100)/100;

# 向下取整
select floor(9.9);

# 向上取整
select ceil(3.2);

# 幂
select power(2,3);

# 对数
select log(7,3);
select ln(10);

select sqrt(9);
select pi();
select sin(radians(30));
select cos(radians(45));
select tan(radians(30));
select cot(radians(45));
select degrees(1);


### 时间函数

select now(); # yyyy-MM-dd hh:mm:ss
select curdate(); # yyyy-MM-dd
select curtime(); # hh:mm:ss

# 从日期里面提取相关内容
select DATE_FORMAT('2019-6-20', '%Y');
select DATE_FORMAT('2019-6-20', '%y');
select DATE_FORMAT('2019-6-20', '%W');

# 日期计算
select date_add(now(), interval 100 day);
select date_format(
    date_add(
        date_add(now(), interval -6 month), interval -3 day
        ), '%Y/%m/%d'
           );


### 字符函数
select lower('HAHA');
select upper('hehe');
select length('123acb');
select concat('ab','----2');
select instr('hahabcd', 'c');
select insert('您好',1,0,'先生');
select replace('你好先生', '先生', '女士');
select substr('你好世界', 3, 4);
select substring('你好世界', 3, 2);
select lpad('hello', 10, '*');
select rpad('hello', 10, '*');
select trim('    你好');






