# 事务

start transaction ;
# 操作1
# 操作2
commit;


select * from mTable;

# 添加杨过
begin;

savepoint yg;

insert into mTable (m_name, m_age, submission_date)
values ('杨过', 26, NOW());

savepoint deleteYG;

delete from mTable where m_name='杨过';

savepoint xln;

# 添加小龙女

insert into mTable (m_name, m_age, submission_date)
values ('小龙女', 32, NOW());

savepoint deleteXLN;

delete from mTable where m_name='小龙女';

rollback;

rollback to yg;
rollback to deleteYG;

commit;