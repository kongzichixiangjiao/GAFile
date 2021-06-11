

show databases;

show tables;

show table status like 'haha';

show table status like 'mTable';

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
# 更改名字 创建一个一模一样的表
show create table mTable;

