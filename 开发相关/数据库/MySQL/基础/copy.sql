
select * from mTable;
desc mTable;

# 复制表
create table new_mTable select * from mTable;

select * from new_mTable;

alter table new_mTable drop i;

alter table new_mTable add i int;

desc new_mTable;

# 只复制表结构到新表
create table new_mTable1 select * from mTable where m_name='小龙女';

select * from new_mTable1;
desc new_mTable;

select * into new_mTable1 from mTable;

# CREATE TABLE `mTable` (
#   `m_id` int unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
#   `m_name` varchar(200) DEFAULT NULL,
#   `m_gender` int DEFAULT NULL,
#   `m_age` int NOT NULL COMMENT '年龄',
#   `submission_date` date DEFAULT NULL COMMENT '提交日期',
#   `j` bigint DEFAULT '0',
#   PRIMARY KEY (`m_id`) COMMENT '主键',
#   KEY `index_name` (`m_name`),
#   KEY `index_age` (`m_age`)
# ) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8
show create table mTable;

# 表不在同一数据库中（如，db1 table1,  db2 table2)
# insert into db1.table1 select * from db2.table2 (完全复制)
# insert into db1.table1 select distinct * from db2.table2(不复制重复纪录）
# insert into tdb1.able1 select top 5 * from   db2.table2 (前五条纪录)