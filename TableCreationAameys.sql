--drop table student


create table parent (
	parent_id int IDENTITY(1,1) PRIMARY KEY,
	first_name varchar(40) not null,
	last_name varchar(40) not null,
	email varchar(50) not null,
	img_add varchar(100) not null,
	birthday varchar(30) not null,
	gender int not null,
	mobile varchar(20) not null
)



create table teacher (
	teacher_id int IDENTITY(1,1) PRIMARY KEY,
	first_name varchar(40) not null,
	last_name varchar(40) not null,
	email varchar(50) not null, 
	img_add varchar(100) not null
);

create table class(
	class_id int IDENTITY(1,1) PRIMARY KEY,
	class_name varchar(40) not null,
	teacher_id int
);

create table student (
	student_id int IDENTITY(1,1) PRIMARY KEY,
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
	student_id int PRIMARY KEY,
	present date,
	absence date
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