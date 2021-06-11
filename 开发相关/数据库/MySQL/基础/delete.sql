# 删除一条数据

insert into mTable (m_name, m_age) values ('小笨蛋', 19);
insert into mTable (m_name, m_age, submission_date) values ('小鸭蛋', 22, NOW());
insert into mTable (m_name, m_age, submission_date) values ('小丫蛋', 24, NOW());

select * from mTable;

delete from mTable where m_name='小鸭蛋';
