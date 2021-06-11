# 修改数据库表名、字段名

desc mTable;

# add
alter table mTable add m_gender int after m_name;
# drop
alter table mTable drop m_gender;
# add
alter table mTable add i varchar(10);
# drop
alter table mTable drop i;
# add
alter table mTable add i int first;

# modify
alter table mTable modify m_name varchar(200);
#add
alter table mTable add j int;
# drop
alter table mTable drop j;
# modify
alter table mTable modify j bigint null default 0; # null 设置为0

# 修改字段名
alter table  t_goods change is_free_deliver is_free_delivery int;

# alter set 修改默认值
alter table mTable alter j set default null;


# 修改表名
alter table mTable rename to haha;
alter table haha rename to mTable;

show table status like 'haha';
show table status like 'mTable';

# 创建索引
alter table mTable add index index_name(m_name);

# 修改字段为主键
alter table mTable add constraint PK_mTable primary key(字段名);

desc mTable;


# node.js express mysql 查询报错，解决办法如下
# UnhandledPromiseRejectionWarning: Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
alter user 'root'@'localhost' identified with mysql_native_password by 'houHe521';
flush privileges;