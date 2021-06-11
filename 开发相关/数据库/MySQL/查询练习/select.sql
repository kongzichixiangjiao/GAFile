select * from Student;
select * from zuoye.Teacher;
select * from zuoye.Course;
select * from zuoye.Score;

-- 1、 查询Student表中的所有记录的Sname、Ssex和Class列。
select Sname, Ssex, Class from zuoye.Student;

-- 2、 查询教师所有的单位即不重复的Depart列。
select Depart from zuoye.Teacher group by Depart;
select distinct Depart from zuoye.Teacher;

-- 3、 查询Student表的所有记录。
select * from zuoye.Student;

-- 4、 查询Score表中成绩在60到80之间的所有记录。
select * from Score where Degree between 60 and 80;
select * from Score;

-- 5、 查询Score表中成绩为85，86或88的记录。
select * from Score where Degree=85 or Degree=86 or Degree=88;

-- 6、 查询Student表中"95031"班或性别为"女"的同学记录。
select * from zuoye.Student where Class=95033 or Ssex='女';
select * from zuoye.Student;

-- 7、 以Class降序查询Student表的所有记录。
select * from zuoye.Student order by Class desc;

-- 8、 以Cno升序、Degree降序查询Score表的所有记录。
select * from Score order by Cno asc, degree desc;

-- 9、 查询"95031"班的学生人数。
select COUNT(*) from zuoye.Student where Class='95031';

-- 10、 查询Score表中的最高分的学生学号和课程号。（子查询或者排序）
select Sno, Cno, Degree from Score order by Degree;
select Sno, Cno from Score where Degree=(select max(Degree) from Score);
-- 10.1 查询Score表中除了每门课程最高分的学生学号和课程号。（子查询或者排序）
select Sno, Cno from Score where Degree not in (select max(Degree) from Score);
select sno,cno from Score where  degree != (select max(degree) from Score);

-- 11、查询每门课的平均成绩。
select Cno, AVG(Degree)平均成绩 from Score group by Cno;

-- 12、查询Score表中至少有5名学生选修的并以3开头的课程的平均分数。
select Cno, AVG(Degree) from Score where Cno in (select Cno from Score where Cno like '3%' group by Cno having count(Cno)>=5) group by Cno;

-- 13、查询分数大于70，小于90的Sno列。
select * from Score where Degree between 70 and 90;

-- 14、查询所有学生的Sname、Cno和Degree列。
select st.Sname, S.Cno, S.Degree from zuoye.Student st left join Score S on st.Sno = S.Sno;

-- 15、查询所有学生的Sno、Cname和Degree列。
select sc.sno,co.cname,sc.degree from zuoye.Course co right join Score sc on co.Cno = sc.Cno;

-- 16、查询所有学生的Sname、Cname和Degree列。
select st.Sname, Cname, Degree from zuoye.Student st left join zuoye.Score s on st.Sno=s.Sno left join Course C on s.Cno = C.Cno;

-- 17、查询"95033"班学生的平均分。
select * from Score s right join (select Sno from zuoye.Student where Class='95033') a on s.Sno=a.Sno;
select AVG(Degree) from Score s right join (select Sno from zuoye.Student where Class='95033') a on s.Sno=a.Sno;
select * from Score where Sno in (select Sno from zuoye.Student where Class='95033');
select AVG(Degree) from Score where Sno in (select Sno from zuoye.Student where Class='95033');

-- 18、 现查询所有同学的Sno、Cno和rank1列。
select s.sname,s.sno, s.degree,
      (case
       when s.degree between 90 and 100 then 'A'
       when s.degree between 80 and 89 then 'B'
       when s.degree between 70 and 79 then 'C'
       when s.degree between 60 and 69 then 'D'
       when s.degree between 0 and 59 then 'E'
       end) as rank1
       from (select st.sname, sc.sno,sc.degree from Student st left join Score sc on st.sno = sc.sno) s;

-- 19、查询选修"3-105"课程的,并且成绩高于"109"号同学成绩的所有同学的记录。
select * from zuoye.Score where Cno='3-105';
select * from zuoye.Student where Sno='109';
select * from Score where Sno=109 and Cno='3-105';
select * from zuoye.Student s
    right join (select * from zuoye.Score where Cno='3-105' and Degree > (select Degree from Score where Cno='3-105' and Sno=109)) a
        on s.Sno=a.Sno;

-- 20、查询成绩高于学号为"109"、课程号为"3-105"的成绩的所有记录。
select * from Score where Cno='3-105' and Degree > (select Degree from Score where Cno='3-105' and Sno=109);

-- 21、查询和学号为109的同学同年出生的所有学生的Sno、Sname和Sbirthday列。
select * from zuoye.Student where substr(Sbirthday,1,4) = substr((select Sbirthday from zuoye.Student where Sno='109'),1,4);

-- 22、查询"张旭"教师任课的学生成绩。
select * from zuoye.Teacher where Tname='张旭';
select * from zuoye.Course where Tno='856';
select * from Score where Cno=(select Course.Cno from zuoye.Course where Tno=(select Tno from zuoye.Teacher where Tname='张旭'));

-- 23、查询选修某课程的同学人数多于5人的教师姓名。
select * from zuoye.Course;
(select Cno from Score group by Cno having COUNT(Cno)>5);
select * from zuoye.Teacher where Tno in (select Tno from zuoye.Course where Cno=(select Cno from Score group by Cno having COUNT(Cno)>5));

-- 24、查询95033班和95031班全体学生的记录。
select * from zuoye.Student where Class='95033' or Class='95031';

-- 25、查询存在有85分以上成绩的课程Cno。
select * from Score where Degree>85;
select Cno from Score where Degree>85 group by Cno;
select * from zuoye.Course where Cno in (select Cno from Score where Degree>85 group by Cno);

-- 26、查询出"计算机系"教师所教课程的成绩表。
select * from zuoye.Teacher where Depart='计算机系';
select * from zuoye.Course where Tno in (select Teacher.Tno from zuoye.Teacher where Depart='计算机系');
select * from Score where Cno in (select Course.Cno from zuoye.Course where Tno in (select Teacher.Tno from zuoye.Teacher where Depart='计算机系'));

-- 27、查询选修编号为"3-105"课程且成绩至少高于一个选修编号为"3-245"的同学的Cno、Sno和Degree,并按Degree从高到低次序排序。
select * from Score where Cno='3-105';
select * from Score where Cno='3-245';
select * from zuoye.Score where Cno='3-105' and Degree > any (select Degree from Score where Cno='3-245') order by Degree desc;

-- 28、查询选修编号为"3-105"且成绩高于选修编号为"3-245"课程的同学的Cno、Sno和Degree。
select * from Score where Cno='3-105' and Degree > all (select Degree from Score where Cno='3-245');

 -- 31、查询所有教师和同学的name、sex和birthday。
# UNION和UNION ALL关键字都是将两个结果集合并为一个，但这两者从使用和效率上来说都有所不同。
# 1、对重复结果的处理：UNION在进行表链接后会筛选掉重复的记录，Union All不会去除重复记录。
# 2、对排序的处理：Union将会按照字段的顺序进行排序；UNION ALL只是简单的将两个结果合并后就返回。
# 从效率上说，UNION ALL 要比UNION快很多，所以，如果可以确认合并的两个结果集中不包含重复数据且不需要排序时的话，那么就使用UNION ALL。
select sname,ssex,sbirthday from zuoye.Student union all select tname,tsex,tbirthday from zuoye.Teacher;

 -- 32、查询所有"女"教师和"女"同学的name、sex和birthday。
select sname,ssex,sbirthday from zuoye.Student where Ssex='女' union all select tname,tsex,tbirthday from zuoye.Teacher where Tsex='女';

 -- 33、查询成绩比 该 课程平均成绩低的同学的成绩表。
select AVG(Degree) from Score;
select * from Score s1 where Degree < (select AVG(Degree) from Score s2 group by Cno having s1.Cno=s2.Cno);

 -- 34、查询所有任课教师的Tname和Depart。
select * from zuoye.Teacher;

 -- 35、查询所有任课教师的Tsex和Tbirthday。
select Tsex, Tbirthday from zuoye.Teacher;

 -- 36、查询至少有2名男生的班号。
select * from zuoye.Student;
select COUNT(Class) from zuoye.Student group by Ssex having Ssex='男';
select * from zuoye.Student group by Sno having COUNT(Ssex)>=2;
select Class from zuoye.Student where Ssex='男' group by Class having COUNT(*)>=2;

 -- 37、查询Student表中不姓"王"的同学记录。
 select * from zuoye.Student;
 select * from zuoye.Student where Sname not like '王%';

 -- 38、查询Student表中每个学生的姓名和年龄。
select Sname, year(NOW()) - year(Sbirthday) as 年龄 from zuoye.Student;

 -- 39、查询Student表中最大和最小的Sbirthday日期值。
select * from zuoye.Student;
select max(YEAR(Sbirthday)), min(YEAR(Sbirthday)) from zuoye.Student;

 -- 40、以班号和年龄从大到小的顺序查询Student表中的全部记录。
 select * from zuoye.Student order by Class desc;
select * from zuoye.Student order by YEAR(Sbirthday) asc;
select * from zuoye.Student order by Class desc, YEAR(Sbirthday) asc;


-- 41、查询"男"教师及其所上的课程。
select Tno from zuoye.Teacher where Tsex='男';
select * from zuoye.Course where Tno in (select Teacher.Tno from zuoye.Teacher where Tsex='男');

-- 42、查询最高分同学的Sno、Cno和Degree列。
select * from Score;
select Sno, max(Degree) from Score; # ❌
select * from Score where Degree in (select max(Degree) from Score);

-- 43、查询和"李军"同性别的所有同学的Sname。
select * from zuoye.Student;
select * from zuoye.Student where Ssex in (select Ssex from zuoye.Student where Sname='李军');

-- 44、查询和"李军"同性别并同班的同学Sname。
select * from zuoye.Student where Ssex in (select Ssex from zuoye.Student where Sname='李军')
                              and Class in (select Class from zuoye.Student where Sname='李军');

-- 45、查询所有选修"计算机导论"课程的"男"同学的成绩表。
select * from zuoye.Course where Cname='计算机导论';
select * from Score where Cno in (select Cno from zuoye.Course where Cname='计算机导论')
                      and Sno in (select Sno from zuoye.Student where Ssex='男');


















