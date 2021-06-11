# 插入

##mTable##
# 查看表中所有字段
desc mTable;

insert into mTable (m_name, m_age, submission_date)
values ('侯佳男', 30, NOW());

show tables;

select * from mTable;

insert into mTable (m_name, m_age, submission_date)
values ('雷少梅', 29, '2021-01-25');


##scoreTable##
desc scoreTable;

insert into scoreTable (m_name, sx_score, yw_score, total_score, t_year)
values ('侯佳男',69,69,198, '2020');

insert into scoreTable (m_name, sx_score, yw_score, total_score, t_year)
values ('雷少梅',69,89,158, '2020');

insert into scoreTable (m_name, sx_score, yw_score, total_score, t_year)
values ('侯佳男',99,99,198, '2020');

insert into scoreTable (m_name, sx_score, yw_score, total_score, t_year)
values ('雷少梅',69,89,158, '2020');

insert into scoreTable (m_name, sx_score, yw_score, total_score, t_year)
values ('侯佳男',99,99,198, '2021');

insert into scoreTable (m_name, sx_score, yw_score, total_score, t_year)
values ('雷少梅',89,89,189, '2021');

select * from scoreTable;

