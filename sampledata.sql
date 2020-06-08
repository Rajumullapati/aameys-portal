
select s.student_id, c.class_id, c.class_name, t.teacher_id, t.first_name, t.last_name, t.email, t.img_add from ((student s inner join classdetails cd on s.student_id = cd.student_id left join class c on c.class_id = cd.class_id) inner join teacher t on t.teacher_id = c.teacher_id) where s.student_id = 10001

select a.student_id, a.dateattendance, a.absence, s.gender, CONVERT(int,ROUND(DATEDIFF(hour,s.birthday,GETDATE())/8766.0,0)) AS Age, c.class_id from classdetails cd left join student s on cd.student_id = s.student_id left join attendance a on a.student_id = s.student_id left join class c on c.class_id = cd.class_id where dateattendance = '2020-06-04' and c.class_id = 10001
----------

select p.* from parent p left join student s on p.parent_id = s.parent_id left join classdetails cd on cd.student_id = s.student_id left join class c on c.class_id = cd.class_id left join teacher t on c.teacher_id = t.teacher_id where t.teacher_id = 10001
select s.*, CONVERT(int,ROUND(DATEDIFF(hour,s.birthday,GETDATE())/8766.0,0)) AS Age from student s left join classdetails cd on cd.student_id = s.student_id left join class c on c.class_id = cd.class_id where c.class_id = 10001

select s.* from student s left join classdetails cd on s.student_id = cd.student_id left join class c on c.class_id = cd.class_id left join teacher t on c.teacher_id = t.teacher_id where t.teacher_id = 10001
select t.teacher_id, t.first_name, t.last_name, t.email, t.img_add, c.class_id, s.student_id from teacher t left join class c on t.teacher_id = c.teacher_id left join classdetails cd on cd.class_id = c.class_id left join student s on cd.student_id = s.student_id order by t.teacher_id
----------------------------------------------------
select c.class_name,  t.first_name, t.last_name, s.student_id, c.class_id from class c left join teacher t on c.teacher_id = t.teacher_id left join classdetails cd on cd.class_id = c.class_id left join student s on s.student_id = cd.student_id
select a.student_id, a.dateattendance, a.absence, s.gender, CONVERT(int,ROUND(DATEDIFF(hour,s.birthday,GETDATE())/8766.0,0)) AS Age, c.class_id from classdetails cd left join student s on cd.student_id = s.student_id left join attendance a on a.student_id = s.student_id left join class c on c.class_id = cd.class_id where dateattendance = '2020-06-04' and c.class_id = 10001
select c.class_name,  t.first_name, t.last_name, s.student_id, c.class_id from class c left join teacher t on c.teacher_id = t.teacher_id left join classdetails cd on cd.class_id = c.class_id left join student s on s.student_id = cd.student_id where t.teacher_id = 10001
select c.class_name,  t.first_name, t.last_name, s.student_id, c.class_id from class c left join teacher t on c.teacher_id = t.teacher_id left join classdetails cd on cd.class_id = c.class_id left join student s on cd.student_id = s.student_id where t.teacher_id is null or t.teacher_id = ''
select c.class_name,  t.first_name, t.last_name, s.student_id, c.school, c.term from class c left join teacher t on c.teacher_id = t.teacher_id left join classdetails cd on cd.class_id = c.class_id left join student s on cd.student_id = cd.student_id where c.class_id = 10001
select c.class_name, s.student_id, c.updated , c.term, c.class_id from class c left join classdetails cd on c.class_id = cd.class_id left join student  s on cd.student_id = s.student_id where c.teacher_id = 10001
select c.term, c.class_name, g.one, g.two, g.three, g.four, g.five, g.six, g.seven, g.eight, g.nine, g.ten, g.msg, (g.one+g.two+g.three+g.four+g.five+g.six+g.seven+g.eight+g.nine+g.ten)/10 as per from student s left join classdetails cd on s.student_id = cd.student_id left join grades g on g.student_id = s.student_id left join class c on c.class_id = cd.class_id where s.student_id = 10001
select s.student_id, s.first_name as student_first_name, s.last_name as student_last_name, s.email as student_email, s.gender as student_gender, s.birthday as student_birthday, s.mobile as student_mobile, s.grade, c.class_id,s.img_add as student_img_addr, p.*, c.class_name from student s left join parent p on s.parent_id = p.parent_id left join classdetails cd on cd.student_id = s.student_id left join class c on cd.class_id = c.class_id  where s.student_id = 10001 ----left join student s on s.student_id = cd.student_id

select s.*, cd.* , p.*, c.* from student  s left join classdetails cd on s.student_id = cd.student_id left join parent p on s.parent_id = p.parent_id left join class c on c.class_id = cd.class_id


select s.*, cd.* from student left join classdetails cd on s.student_id = cd.student_id

select * from attendance where dateattendance = '2020-06-03'

select * from student
select * from users
update users set user_login_status = 0 where user_role=1 and user_id_all=10002


select * from attendance where class_id = 10001
select c.class_name,  t.first_name, t.last_name, s.student_id, c.class_id from class c left join teacher t on c.teacher_id = t.teacher_id left join student s on c.class_id = s.class_id where t.teacher_id is null or t.teacher_id = '';

select a.student_id, a.dateattendance, a.absence, s.gender, CONVERT(int,ROUND(DATEDIFF(hour,s.birthday,GETDATE())/8766.0,0)) AS Age, s.first_name, s.last_name from attendance a left join student s on a.student_id = s.student_id where dateattendance = '2020-05-01' and s.class_id = 10001

select * from attendance where dateattendance = '2020-06-04'

select * from teacher

select a.student_id, a.dateattendance, a.absence, s.gender, CONVERT(int,ROUND(DATEDIFF(hour,s.birthday,GETDATE())/8766.0,0)) AS Age, s.first_name, s.last_name from attendance a left join student s on a.student_id = s.student_id where dateattendance = '2020-06-04' and s.class_id = 10001

select a.student_id, a.dateattendance, a.absence, s.gender, CONVERT(int,ROUND(DATEDIFF(hour,s.birthday,GETDATE())/8766.0,0)) AS Age, s.first_name, s.last_name from attendance a left join student s on a.student_id = s.student_id where dateattendance = '2020-05-04' and s.class_id = 10001 

select * from class

update class set teacher_id = '' where class_id = 10005



--drop table users

select * from parent
select * from users

select * from users where username = 'abc@hmail.com' and password = '1234567'

select c.class_name, t.first_name, t.last_name, s.student_id from class c left join teacher t on c.teacher_id = t.teacher_id left join student s on c.class_id = s.class_id where c.class_id = 10001

select * from teacher


select p.* from parent p left join student s on p.parent_id = s.parent_id left join class c on s.class_id = c.class_id left join teacher t on c.teacher_id = t.teacher_id where t.teacher_id = 10001

select s.* from student s left join class c on s.class_id = c.class_id left join teacher t on c.teacher_id = t.teacher_id where t.teacher_id = 10001

select * from c.class_name, t.teacher_id, t.first_name, t.last_name,

select * from attendance

select * from class

select a.student_id, a.dateattendance, a.absence, s.gender, CONVERT(int,ROUND(DATEDIFF(hour,s.birthday,GETDATE())/8766.0,0)) AS Age from attendance a left join student s on a.student_id = s.student_id where dateattendance = '2020-06-04'---01-06-2020'


select s.student_id, s.first_name as student_first_name, s.last_name as student_last_name, s.email as student_email, s.gender as student_gender, s.birthday as student_birthday, s.mobile as student_mobile, s.grade, s.class_id,s.img_add as student_img_addr, p.*, c.class_name from student s left join parent p on s.parent_id = p.parent_id left join class c on s.class_id = c.class_id where s.student_id = 10001

select t.*, c.class_name from teacher t left join class c on t.teacher_id = c.teacher_id
select top(5) FORMAT(dateattendance,'dd-mm-yyyy') from attendance where student_id = 10001 order by dateattendance

select top(5) * from attendance where student_id = 10001 order by dateattendance

select c.term, c.class_name, g.one, g.two, g.three, g.four, g.five, g.six, g.seven, g.eight, g.nine, g.ten, g.msg, (g.one+g.two+g.three+g.four+g.five+g.six+g.seven+g.eight+g.nine+g.ten)/10 as per from ((student s 
inner join class c on s.class_id = c.class_id) inner join grades g on g.student_id = s.student_id) where s.student_id = 10001

select s.*, c.class_name from student s left join class c on s.class_id = c.class_id where s.student_id=10001

select s.term from student s
select s.student_id, s.first_name as student_first_name, s.last_name as student_last_name,  c.class_name from student s left join class c on s.student_id = c.class_id

select a.student_id, a.dateattendance, a.absence, s.gender, CONVERT(int,ROUND(DATEDIFF(hour,s.birthday,GETDATE())/8766.0,0)) AS Age from attendance a left join student s on a.student_id = s.student_id where dateattendance = '2020-06-04'

select * from teacher

select s.first_name, s.last_name, g.*, (g.one+g.two+g.three+g.four+g.five+g.six+g.seven+g.eight+g.nine+g.ten)/10 as per from student s left join grades g on g.student_id = s.student_id

select * from class

select c.class_name, t.first_name, t.last_name, s.student_id from class c left join teacher t on c.teacher_id = t.teacher_id left join student s on c.class_id = s.class_id

select class_name from class where teacher_id=10001

select * from student
select * from users

select c.class_name, s.student_id, c.updated from class c left join student s on c.class_id = s.class_id where c.teacher_id = 10001


truncate table users

select * from parent



select * from attendance

select * from grades where student_id = 10001;

select s.student_id, c.class_id, c.class_name, t.teacher_id, t.first_name, t.last_name, t.email, t.img_add
from ((student s inner join class c on s.class_id = c.class_id) inner join 
teacher t on t.teacher_id = c.teacher_id) where s.student_id = 10002;

select s.student_id from student s inner join parent p on s.parent_id = p.parent_id


select top(5) * from attendance where student_id=10001 order by dateattendance

update users set user_login_status = 1 where user_id_all = 10001 and user_role=1

select t.teacher_id,  count(c.teacher_id), count(s.class_id) from 
(( teacher t inner join class c on t.teacher_id = c.class_id ) inner join student s on s.class_id = c.class_id) group by t.teacher_id

select * from admin;
select * from teacher
select * from class where teacher_id=10001

select t.teacher_id, t.first_name, t.last_name, t.email, t.img_add, c.class_id, s.student_id from teacher t left join class c on t.teacher_id = c.teacher_id left join student s on c.class_id = s.class_id

select * from class

select s.term, c.class_name, g.one, g.two, g.three, g.four, g.five, g.six, g.seven, g.eight, g.nine, g.ten, g.msg, (g.one+g.two+g.three+g.four+g.five+g.six+g.seven+g.eight+g.nine+g.ten)/10 as per from ((student s 
inner join class c on s.class_id = c.class_id) inner join grades g on g.student_id = s.student_id) where s.student_id = 10001;
 

select * from admin