# 连接查询

select * from mTable;


select * from scoreTable;


select m.m_name, m.m_age, s.sx_score, s.sx_score, s.t_year
from mTable as m inner join scoreTable as s on m.m_name = s.m_name;