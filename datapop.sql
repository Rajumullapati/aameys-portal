USE [AAMEYS]

insert into attendance values (10002,10001,'2020-06-03',1)
insert into attendance values (10002,10001,'2020-06-04',1)
insert into attendance values (10002,10001,'2020-06-05',1)
insert into attendance values (10002,10001,'2020-06-06',1)
insert into attendance values (10002,10001,'2020-06-07',1)
insert into attendance values (10002,10001,'2020-06-08',1)
insert into attendance values (10002,10001,'2020-06-09',1)
insert into attendance values (10002,10001,'2020-06-10',1)
insert into attendance values (10002,10001,'2020-06-11',1)

insert into attendance values (10001,10001,'2020-06-14',0)
insert into attendance values (10001,10001,'2020-06-03',1)
insert into attendance values (10001,10001,'2020-06-04',0)
insert into attendance values (10001,10001,'2020-06-05',1)
insert into attendance values (10001,10001,'2020-06-06',0)
insert into attendance values (10001,10001,'2020-06-07',1)
insert into attendance values (10001,10001,'2020-06-08',1)
insert into attendance values (10001,10001,'2020-06-09',1)
insert into attendance values (10001,10001,'2020-06-10',0)
insert into attendance values (10001,10001,'2020-06-11',1)

insert into attendance values (10002,10001,'2020-05-03',1)
insert into attendance values (10002,10001,'2020-05-04',1)
insert into attendance values (10002,10001,'2020-05-05',1)
insert into attendance values (10002,10001,'2020-05-06',1)
insert into attendance values (10002,10001,'2020-05-07',1)
insert into attendance values (10002,10001,'2020-05-08',1)
insert into attendance values (10002,10001,'2020-05-09',1)
insert into attendance values (10002,10001,'2020-05-10',1)
insert into attendance values (10002,10001,'2020-05-11',1)
insert into attendance values (10001,10001,'2020-05-03',1)
insert into attendance values (10001,10001,'2020-05-04',0)
insert into attendance values (10001,10001,'2020-05-05',1)
insert into attendance values (10001,10001,'2020-05-06',0)
insert into attendance values (10001,10001,'2020-05-07',1)
insert into attendance values (10001,10001,'2020-05-08',1)
insert into attendance values (10001,10001,'2020-05-09',1)
insert into attendance values (10001,10001,'2020-05-10',0)
insert into attendance values (10001,10001,'2020-05-11',1)

insert into grades values (10001,10001,10,10,10,10,10,10,10,10,10,10,'')
insert into grades values (10002,10001,10,10,10,10,10,10,10,10,10,10,'')


insert into teacher values('klein','moriarty','klein@baker.com','');
insert into teacher values('sherlock','moriarty','abc@baker.com','');
insert into class values ('English',GETDATE(),1,'AAMEYS',10001);
insert into class values ('Maths',GETDATE(),1,'AAMEYS',10001);
insert into class values ('CS',GETDATE(),1,'AAMEYS',10002);
insert into class values ('MS',GETDATE(),1,'AAMEYS',10002);
insert into parent values ('jim','holms','abc@bakerstreet.com','','2020-06-02T18:41:31.531Z',1);
insert into parent values('lord','north','wolf@mail.com','','2000-01-15',1);
insert into student values('john','snow','abc@gmail.com',1,'2001-01-14','766456546',1,'',10001);
insert into student values('arya','stark','arya@gmail.com',0,'2002-01-10','766456546',1,'',10001);
insert into admin values('god','last','god@abc.com','');
insert into classdetails values (10001,10001);
insert into classdetails values (10001,10001);



insert into users values ('klein@baker.com','teacher',0,3,10001)
insert into users values ('abc@gmail.com','student',0,1,10001)
insert into users values ('arya@gmail.com','student',0,1,10002)
insert into users values ('wolf@mail.com','parent',0,2,10002)
insert into users values ('abc@bakerstreet.com','parent',0,2,10001)
insert into users values ('abc@baker.com','teacher',0,3,10002)
insert into users values ('god@abc.com','admin123',0,4,10001)
