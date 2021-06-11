select * from mTable;
select *, ifnull(submission_date, 0) as submission_date_new from mTable;