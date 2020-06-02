USE [AAMEYS]


create table parent (
	parent_id int IDENTITY(10001,1) PRIMARY KEY,
	first_name varchar(40) not null,
	last_name varchar(40) not null,
	email varchar(50) not null,
	img_add varchar(100) not null,
	birthday varchar(30) not null,
	gender int not null,
	mobile varchar(20) not null
)



create table teacher (
	teacher_id int IDENTITY(10001,1) PRIMARY KEY,
	first_name varchar(40) not null,
	last_name varchar(40) not null,
	email varchar(50) not null, 
	img_add varchar(100) not null
);

create table class(
	class_id int IDENTITY(10001,1) PRIMARY KEY,
	class_name varchar(40) not null,
	teacher_id int
);

create table student (
	student_id int IDENTITY(10001,1) PRIMARY KEY,
	first_name varchar(40) not null,
	last_name varchar(40) not null,
	email varchar(50) not null,
	gender int not null,
	birthday varchar(30) not null,
	grade int not null ,
	class_id int not null,
	img_add varchar(100) not null,
	parent_id int not null
);


create table attendance (
	student_id int,
	dateattendance date,
	absence int
)

create table schedule(
	student_id int PRIMARY KEY,
	timedate varchar(10),
	monday varchar(30),
	tuesday varchar(30),
	wednesday varchar(30),
	thursday varchar(30),
	friday varchar(30)
);


create table grades(
	student_id int PRIMARY KEY,
	class varchar(20),
	one varchar(10),
	two varchar(10),
	three varchar(10),
	four varchar(10),
	five varchar(10),
	six varchar(10),
	seven varchar(10),
	eight varchar(10),
	nine varchar(10),
	ten varchar(10),
	msg varchar(40),
);

create table users(
	username varchar(20) not null primary key,
	password varchar(20) not null,
	user_login_status int not null,   ----Login: 1 Logout:0
	user_role int not null,            ----student: 1, parent: 2, teacher: 3, admin: 4
	user_id_all int not null
);

insert into teacher values('sherlock','moriarty','abc@baker.com','');
insert into class values ('English',10001);

insert into parent values('lord','north','wolf@mail.com','','2000-01-15',1,'766456546');
insert into student values('john','snow','abc@gmail.com',1,'2020-01-14',1,10001,'',10001);
insert into admin values('god','last','god@abc.com','');

insert into users values ('abc@gmail.com','student',0,1,10002)
insert into users values ('wolf@mail.com','parent',0,2,10001)
insert into users values ('abc@baker.com','teacher',0,3,10001)
insert into users values ('god@abc.com','admin',0,4,10001)

select s.student_id, c.class_id, c.class_name, t.teacher_id, t.first_name, t.last_name, t.email, t.img_add
from ((student s inner join class c on s.class_id = c.class_id) inner join 
teacher t on t.teacher_id = c.teacher_id);

select * from admin


create table admin(
	admin_id int IDENTITY(10001,1) PRIMARY KEY,
	first_name varchar(40) not null,
	last_name varchar(40) not null,
	email varchar(50) not null, 
	img_add varchar(100) not null
);

select * from student


insert into student values('a','b','s',1,'2',1,1,'1',2)

insert into attendance values (10001,'2020-06-01',0)

select * from attendance

select * from grades where student_id = 10001;

