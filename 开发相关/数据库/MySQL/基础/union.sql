# 连接

select * from mTable;

select * from scoreTable;

select m_name from mTable where m_age>29 union select m_name from scoreTable where total_score>178;
