# 组查询

select * from scoreTable;

select sx_score, Count(*) from scoreTable group by sx_score;

select m_name, Count(*) from scoreTable group by m_name;

select m_name, sum(sx_score) from scoreTable where sx_score>80 group by m_name;

select m_name, sum(sx_score) from scoreTable group by m_name;

