# 索引

# 数据量很大，而且经常被查询的数据表可以设置索引
# 索引只添加再经常用作检索条件的字段上面
# 不要再大字段（字段内容长）上创建索引

# 普通索引

# 创建索引
alter table mTable add index index_name(m_name);

# 删除索引
drop index index_name on mTable;

desc mTable;

# create 创建索引
create index index_age on mTable(m_age);
