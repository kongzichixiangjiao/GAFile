# 正则

select * from mTable;

select * from scoreTable;

select * from mTable a join  scoreTable b on a.m_name=b.m_name;

select * from mTable where m_name regexp '^小';
select * from mTable where m_name regexp '[丫]';

