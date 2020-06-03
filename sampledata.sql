USE [AAMEYS]

insert into attendance values (10002,'2020-06-03',1)
insert into attendance values (10002,'2020-06-04',1)
insert into attendance values (10002,'2020-06-05',1)
insert into attendance values (10002,'2020-06-06',1)
insert into attendance values (10002,'2020-06-07',1)
insert into attendance values (10002,'2020-06-08',1)
insert into attendance values (10002,'2020-06-09',1)
insert into attendance values (10002,'2020-06-10',1)
insert into attendance values (10002,'2020-06-11',1)

insert into attendance values (10001,'2020-06-03',1)
insert into attendance values (10001,'2020-06-04',0)
insert into attendance values (10001,'2020-06-05',1)
insert into attendance values (10001,'2020-06-06',0)
insert into attendance values (10001,'2020-06-07',1)
insert into attendance values (10001,'2020-06-08',1)
insert into attendance values (10001,'2020-06-09',1)
insert into attendance values (10001,'2020-06-10',0)
insert into attendance values (10001,'2020-06-11',1)

insert into grades values (10001,10001,10,10,10,10,10,10,10,10,10,10,'')
insert into grades values (10002,10001,10,10,10,10,10,10,10,10,10,10,'')

insert into teacher values('sherlock','moriarty','abc@baker.com','');
insert into class values ('English',10001);
insert into parent values ('jim','holms','abc@bakerstreet.com','','2020-06-02T18:41:31.531Z',1);
insert into parent values('lord','north','wolf@mail.com','','2000-01-15',1);
insert into student values('john','snow','abc@gmail.com',1,1,'2020-01-14','766456546',1,10001,'',10001);
insert into student values('arya','stark','arya@gmail.com',1,0,'2020-01-10','766456546',1,10001,'',10001);
insert into admin values('god','last','god@abc.com','');

insert into users values ('abc@gmail.com','student',0,1,10001)
insert into users values ('arya@gmail.com','student',0,1,10002)
insert into users values ('wolf@mail.com','parent',0,2,10001)
insert into users values ('abc@baker.com','teacher',0,3,10001)
insert into users values ('god@abc.com','admin',0,4,10001)


--------------------------------------------------------------
select * from attendance where dateattendance = '2020-06-03'

select * from student
select * from users
update users set user_login_status = 0 where user_role=1 and user_id_all=10002


select * from attendance

select * from grades where student_id = 10001;

select s.student_id, c.class_id, c.class_name, t.teacher_id, t.first_name, t.last_name, t.email, t.img_add
from ((student s inner join class c on s.class_id = c.class_id) inner join 
teacher t on t.teacher_id = c.teacher_id) where s.student_id = 10002;

select s.student_id from student s inner join parent p on s.parent_id = p.parent_id


select top(5) * from attendance where student_id=10001 order by dateattendance


select s.term, c.class_name, g.one, g.two, g.three, g.four, g.five, g.six, g.seven, g.eight, g.nine, g.ten, g.msg, (g.one+g.two+g.three+g.four+g.five+g.six+g.seven+g.eight+g.nine+g.ten)/10 as per from ((student s 
inner join class c on s.class_id = c.class_id) inner join grades g on g.student_id = s.student_id) where s.student_id = 10001;
 

select * from admin