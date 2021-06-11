# 临时表

create temporary table temporary_table (
    p_id int not null,
    p_name varchar(50) not null,
    p_price double not null
);

desc temporary_table;

# 链接断开时 临时表也会被删除
drop table temporary_table;