create database zuoye;

use zuoye;

show tables;

create table Student    -- 学生表
(
Sno char(3) NOT NULL Primary key ,    -- 学号 ，设为主键，不允许空值
Sname char(8) NOT NULL,        -- 学生姓名
Ssex char(2)NOT NULL,        -- 学生性别
Sbirthday datetime,     -- 学生出生年月
Class char(5)         -- 学生所在班级
);


create table Teacher        -- 教师表
(
Tno char(3)NOT NULL primary key,        -- 教工编号设为主键
Tname char(4)NOT NULL,        -- 教工姓名
Tsex char(2)NOT NULL,        -- 教工性别
Tbirthday datetime,        -- 教工出生年月
Prof char(6),        -- 职称
Depart varchar(10)NOT NULL        -- 教工所在部门
);

create table Course        -- 课程表
(
    Cno char(5) NOT NULL Primary key ,        -- 课程号设为主键
    Cname varchar(10) NOT NULL,        -- 课程名称
    Tno char(3) NOT NULL references Teacher(Tno)        -- 教工编号设为外键
);

create table Score    -- 成绩表
(
Sno char(3) NOT NULL references Student(Sno),    -- 学号设为外码
Cno char(5) NOT NULL references Course(Cno),    -- 课程号设为外码
Degree Decimal(4,1),    -- 成绩
primary key(Sno,Cno)    -- 学号和课程号设为联合主键
);

create table Grade(
    Low int,
    Upp int,
    Rank1 char(1)
);
drop table Grade;
select *from Grade;

