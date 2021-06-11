# 创建表

show databases;

# create database demo1;

use demo1;

show tables;

CREATE TABLE IF NOT EXISTS `mTable` (
    `m_id` INT UNSIGNED AUTO_INCREMENT COMMENT '自增id',
    `m_name` VARCHAR(100) NOT NULL DEFAULT '' COMMENT '姓名',
    `m_age` INT NOT NULL COMMENT '年龄',
    `submission_date` DATE COMMENT '提交日期',
    PRIMARY KEY (`m_id`) COMMENT '主键'
)default charset=utf8;


show tables;


create table if not exists `scoreTable` (
    `s_id` int unsigned auto_increment,
    `m_name` varchar(100) not null default '' comment '姓名',
    `sx_score` int not null comment '数学分数',
    `yw_score` int not null comment '语文分数',
    `total_score` int not null comment '总分数',
    `t_year` varchar(100) not null comment '考试年份',
    primary key (`s_id`)
) default charset=utf8;

drop table scoreTable;


# create 创建索引
create index index_age on mTable(m_age);

# 创建临时表
create temporary table temporary_table (
    p_id int not null,
    p_name varchar(50) not null,
    p_price double not null
);