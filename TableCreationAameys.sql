USE [AAMEYS]


create table parent (
	parent_id int IDENTITY(10001,1) PRIMARY KEY,
	first_name varchar(40) not null,
	last_name varchar(40) not null,
	email varchar(50) not null,
	img_add varchar(100) not null,
	birthday date,
	gender int not null ---1 : male 0: female
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
	updated date ,
	term int ,
	school varchar(40) ,
	teacher_id int
);

create table student (
	student_id int IDENTITY(10001,1) PRIMARY KEY,
	first_name varchar(40) not null,
	last_name varchar(40) not null,
	email varchar(50) not null,
	gender int not null,   ---1 : male 0: female
	birthday date not null,
	mobile varchar(20) not null,
	grade int not null ,
	img_add varchar(100) not null,
	parent_id int not null
);


create table attendance (
	student_id int,
	class_id int,
	dateattendance date,
	absence int  ---1 present 0 absent
);

create table schedule(
	class_id int,
	class_name varchar(30),
	datesched date,
	starttime varchar(20),
	endtime varchar(20)
);


create table grades(
	student_id int,
	class_id int,
	one int,
	two int,
	three int,
	four int,
	five int,
	six int,
	seven int,
	eight int,
	nine int,
	ten int,
	msg varchar(40)
);


create table users(
	username varchar(20) not null primary key,
	password varchar(20) not null,
	user_login_status int not null,   ----Login: 1 Logout:0
	user_role int not null,            ----student: 1, parent: 2, teacher: 3, admin: 4
	user_id_all int not null
);


create table classdetails(
	class_id int not null,
	student_id int not null
);

create table admin(
	admin_id int IDENTITY(10001,1) PRIMARY KEY,
	first_name varchar(40) not null,
	last_name varchar(40) not null,
	email varchar(50) not null, 
	img_add varchar(100) not null
);


