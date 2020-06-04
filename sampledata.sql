

--------------------------------------------------------------
select * from attendance where dateattendance = '2020-06-03'

select * from student
select * from users
update users set user_login_status = 0 where user_role=1 and user_id_all=10002

select * from class

select c.class_name, t.first_name, t.last_name, s.student_id from class c left join teacher t on c.teacher_id = t.teacher_id left join student s on c.class_id = s.class_id where c.class_id = 10001

select * from c.class_name, t.teacher_id, t.first_name, t.last_name,

select * from attendance




select s.student_id, s.first_name as student_first_name, s.last_name as student_last_name, s.email as student_email, s.gender as student_gender, s.birthday as student_birthday, s.mobile as student_mobile, s.grade, s.class_id,s.img_add as student_img_addr, p.*, c.class_name from student s left join parent p on s.parent_id = p.parent_id left join class c on s.class_id = c.class_id where s.student_id = 10001


select s.student_id, s.first_name as student_first_name, s.last_name as student_last_name,  c.class_name from student s left join class c on s.student_id = c.class_id

select a.student_id, a.dateattendance, a.absence, s.gender, CONVERT(int,ROUND(DATEDIFF(hour,s.birthday,GETDATE())/8766.0,0)) AS Age from attendance a left join student s on a.student_id = s.student_id where dateattendance = '2020-06-04'

select * from teacher

select s.first_name, s.last_name, g.*, (g.one+g.two+g.three+g.four+g.five+g.six+g.seven+g.eight+g.nine+g.ten)/10 as per from student s left join grades g on g.student_id = s.student_id

select * from class

select c.class_name, t.first_name, t.last_name, s.student_id from class c left join teacher t on c.teacher_id = t.teacher_id left join student s on c.class_id = s.class_id

select class_name from class where teacher_id=10001



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