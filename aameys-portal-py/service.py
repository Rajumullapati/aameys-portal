from flask import Flask, request, send_file, make_response
from connDb import connDB
import pandas
import datetime
from flask_cors import CORS, cross_origin
import math
import json

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello():
    con = connDB()
    data = pandas.read_sql('select * from sys.tables', con)
    con.close()
    return "Hello World!"

@app.route('/students')
def getStudents():
    con = connDB()
    data = pandas.read_sql('select * from student',con).to_json(orient='records')
    con.close()
    return data


@app.route('/getalldetailbysid')
def getAllDetailsByStudentId():
    con = connDB()
    id = request.args['id']
    sql = """select s.student_id, s.first_name as student_first_name, s.last_name as student_last_name, s.email as student_email, s.gender as student_gender, s.birthday as student_birthday, s.mobile as student_mobile, s.grade, c.class_id,s.img_add as student_img_addr, p.*, c.class_name from student s left join parent p on s.parent_id = p.parent_id left join classdetails cd on cd.student_id = s.student_id left join class c on c.class_id = cd.class_id where s.student_id = """+str(id)
    data = pandas.read_sql(sql,con)

    con.close()
    return data.to_json(orient='records')

@app.route('/studentsandclass')
def getstudentsandclass():
    con = connDB()
    sql = """select s.student_id, s.first_name, s.last_name,  c.class_name from student s left join class c on s.student_id = c.class_id"""
    data = pandas.read_sql(sql,con)
    con.close()
    return data.to_json(orient='records')

@app.route('/adminById')
def getAdminById():
    id = request.args['id']
    con = connDB()
    data1 = pandas.read_sql('select * from admin where admin_id = '+id,con)
    data2 = pandas.read_sql('select count(*) as c from teacher',con)
    data3 = pandas.read_sql('select count(*) as c from student',con)
    data4 = pandas.read_sql('select count(*) as c from class',con)

    datatosend =[{'admin_id':str(data1['admin_id'][0]),'first_name':data1['first_name'][0],'last_name':data1['last_name'][0],'email':data1['email'][0],'img_add':data1['img_add'][0],'teacher_count':str(data2['c'][0]),'student_count':str(data2['c'][0]), 'class_count':str(data4['c'][0])}]
    

    con.close()
    return json.dumps(datatosend)


@app.route('/studentclassid')
def getstudentclassid():
    id = request.args['id']
    con = connDB()
    sql = """select s.*, c.class_name from student s left join classdetails cd on s.student_id = cd.student_id left join class c on c.class_id = cd.class_id where s.student_id="""+id
    data = pandas.read_sql(sql,con)
    return data.to_json(orient='records')

@app.route('/studentid')
def getStudentById():
    id = request.args['id']
    con = connDB()
    data = pandas.read_sql('select * from student where student_id = '+id,con).to_json(orient='records')
    con.close()
    return data

@app.route('/attendancebysid')
def getStudentAttendanceById():
    id = request.args['id']
    con = connDB()

    data = pandas.read_sql('select top(5) * from attendance where student_id = '+id+' order by dateattendance',con)

    data.index = data['dateattendance']
    data = data.drop(['dateattendance','student_id'], axis=1)
    data = data.T
    con.close()
    return data.to_json(orient='records')

@app.route('/attendanceByDateandClass')
def attendanceByDateandClass():
    date = request.args['date']
    class_id = request.args['class']
    con = connDB()
    sql = """select a.student_id, a.dateattendance, a.absence, s.gender, CONVERT(int,ROUND(DATEDIFF(hour,s.birthday,GETDATE())/8766.0,0)) AS Age, c.class_id from classdetails cd left join student s on cd.student_id = s.student_id left join attendance a on a.student_id = s.student_id left join class c on c.class_id = cd.class_id where dateattendance = \'"""+date+"\' and c.class_id = "+class_id
    print(sql)
    data = pandas.read_sql(sql,con).to_json(orient='records')
    con.close()
    return data

@app.route('/downloadattendanceByClassDate')
def downloadattendanceByClassDate():
    date = request.args['date']
    class_id = request.args['class']
    con = connDB()
    sql = """select a.student_id, a.dateattendance, a.absence, s.gender, CONVERT(int,ROUND(DATEDIFF(hour,s.birthday,GETDATE())/8766.0,0)) AS Age, c.class_id from classdetails cd left join student s on cd.student_id = s.student_id left join attendance a on a.student_id = s.student_id left join class c on c.class_id = cd.class_id where dateattendance = \'"""+date+"\' and c.class_id = "+class_id
    data = pandas.read_sql(sql,con)
    con.close()
    resp = make_response(data.to_csv())
    resp.headers["Content-Disposition"] = "attachment; filename=export.csv"
    resp.headers["Content-Type"] = "text/csv"
    return resp


@app.route('/attendanceByClassDate')
def getAttendanceClassByDate():
    date = request.args['date']
    class_id = request.args['class']
    con = connDB()
    sql = """select a.student_id, a.dateattendance, a.absence, s.gender, CONVERT(int,ROUND(DATEDIFF(hour,s.birthday,GETDATE())/8766.0,0)) AS Age, c.class_id from classdetails cd left join student s on cd.student_id = s.student_id left join attendance a on a.student_id = s.student_id left join class c on c.class_id = cd.class_id where dateattendance = \'"""+date+"\' and c.class_id = "+class_id
    data = pandas.read_sql(sql,con).to_json(orient='records')
    con.close()
    return data


@app.route('/studentdetailsallincage')
def getStudemtDetailsAllIncAge():
    con = connDB()
    sql = """select s.student_id, s.first_name, s.last_name, s.gender, CONVERT(int,ROUND(DATEDIFF(hour,s.birthday,GETDATE())/8766.0,0)) AS Age from  student s """
    data = pandas.read_sql(sql, con)
    con.close()
    return data.to_json(orient='records')

@app.route('/downloadgrades')
def downloadgrades():
    con = connDB()
    sql = """select s.first_name, s.last_name, g.*, (g.one+g.two+g.three+g.four+g.five+g.six+g.seven+g.eight+g.nine+g.ten)/10 as per from student s left join grades g on g.student_id = s.student_id"""
    data = pandas.read_sql(sql,con)
    con.close()
    resp = make_response(data.to_csv())
    resp.headers["Content-Disposition"] = "attachment; filename=export.csv"
    resp.headers["Content-Type"] = "text/csv"
    return resp
    



@app.route('/grades')
def getgrades():
    con = connDB()
    sql = """select s.first_name, s.last_name, g.*, (g.one+g.two+g.three+g.four+g.five+g.six+g.seven+g.eight+g.nine+g.ten)/10 as per from student s left join grades g on g.student_id = s.student_id"""
    data = pandas.read_sql(sql,con)
    con.close()
    return data.to_json(orient='records')

@app.route('/gradesbyid')
def getStudentGradesById():
    id = request.args['id']
    con = connDB()
    sqlstr = """select c.term, c.class_name, g.one, g.two, g.three, g.four, g.five, g.six, g.seven, g.eight, g.nine, g.ten, g.msg, (g.one+g.two+g.three+g.four+g.five+g.six+g.seven+g.eight+g.nine+g.ten)/10 as per from student s 
left join classdetails cd on s.student_id = cd.student_id left join grades g on g.student_id = s.student_id left join class c on c.class_id = cd.class_id where s.student_id = """+id
    data = pandas.read_sql(sqlstr,con).to_json(orient='records')
    con.close()
    return data


@app.route('/schedulebyid')
def scheduleById():
    id = request.args['id']
    con = connDB()
    data = pandas.read_sql('select * from schedule where student_id = '+id,con).to_json(orient='records')
    con.close()
    return data





@app.route('/teachersbyid')
def getTeacherDataById():
    id = request.args['id']
    con = connDB()

    data1 = pandas.read_sql('select * from teacher where teacher_id = '+id,con)
    data3 = pandas.read_sql('select c.class_name, s.student_id, c.updated , c.term, c.class_id from class c left join classdetails cd on c.class_id = cd.class_id left join student  s on cd.student_id = s.student_id where c.teacher_id ='+id,con)
   
    classtosend = []
    prevrow = []
    prev= -1
    cs = 0
    cc = 0
    tcs = 0
    for index, row in data3.iterrows():
        if row[1] is not None and not math.isnan(row[1]):
            cs =cs +1
        if index >0  and prev != -1 and row[0] != prev:
            classtosend = classtosend + [{'class_name':prevrow[0], 'student_count':cs,'updated':str(prevrow[2]),'class_id':str(prevrow[4])}]
            tcs = tcs + cs
            cc = cc+1
            cs =0
        prev = row[0]
        prevrow = row
        if len(data3.index)-1 == index:
            classtosend = classtosend + [{'class_name':prevrow[0], 'student_count':cs,'updated':str(data3['updated'][0])}]
            tcs = tcs + cs
            cc =cc+1
            cs =0
    datatosend =[{'teacher_id':str(data1['teacher_id'][0]),'first_name':data1['first_name'][0],'last_name':data1['last_name'][0],'email':data1['email'][0],'img_add':data1['img_add'][0],'student_count':tcs,'class_count':cc,'classdetail':classtosend}]
    con.close()
    return json.dumps(datatosend)



@app.route('/getclassbyid')
def getClassById():
    con =connDB()
    id = request.args['id']
    sql = """select c.class_name,  t.first_name, t.last_name, s.student_id, c.school, c.term from class c left join teacher t on c.teacher_id = t.teacher_id left join classdetails cd on cd.class_id = c.class_id left join student s on cd.student_id = cd.student_id where c.class_id =  """+id
    data = pandas.read_sql(sql,con)
    cs = 0
    prevrow = []
    datatosend = []
    for index, row in data.iterrows():
        if row[3] is not None and not math.isnan(row[3]):
            cs = cs+1
    # print(data)
    con.close()
    datatosend = [{'class_name':data['class_name'][0],'first_name':data['first_name'][0],'last_name':data['last_name'][0],'student_count':cs, 'term':str(data['term'][0]), 'school':data['school'][0]}]
    return json.dumps(datatosend)#data.to_json(orient='records')


@app.route('/removeclassestoteacher', methods=['POST'])
def removeclassestoteacher():
    con = connDB()
    sel = request.json['sel']
    cursor = con.cursor()
    for item in sel:
        sql = """update class set teacher_id = '' where class_id = """+str(item['class_id'])
        cursor.execute(sql)
    cursor.commit()
    return "done"

@app.route('/addclassestoteacher', methods=['POST'])
def addclassestoteacher():
    con = connDB()
    sel = request.json['sel']
    cursor = con.cursor()
    for item in sel:
        sql = """update class set teacher_id = """+str(request.json['teacher_id'])+""" where class_id = """+str(item['class_id'])
        cursor.execute(sql)
    cursor.commit()
    return "done"

@app.route('/getfreeclasses')
def getfreeclasses():
    con = connDB()
    sql = """select c.class_name,  t.first_name, t.last_name, s.student_id, c.class_id from class c left join teacher t on c.teacher_id = t.teacher_id left join classdetails cd on cd.class_id = c.class_id left join student s on cd.student_id = s.student_id where t.teacher_id is null or t.teacher_id = \'\'"""
    data = pandas.read_sql(sql,con)
    cs = 0
    prevrow = []
    datatosend = []
    prev = -1
    for index, row in data.iterrows():
        if row[3] is not None and not math.isnan(row[3]):
            cs = cs+1
        if index > 0 and prev != -1 and row[0] != prev:
            datatosend = datatosend + [{'class_name': prevrow[0], 'first_name':prevrow[1], 'last_name':prevrow[2], 'class_id':prevrow[4],'student_count':cs}]
            cs = 0
        prev = row[0]
        prevrow = row
        if len(data.index)-1 == index:
            datatosend = datatosend + [{'class_name': prevrow[0], 'first_name':prevrow[1], 'last_name':prevrow[2], 'class_id':prevrow[4],'student_count':cs}]
            cs = 0
    con.close()
    return json.dumps(datatosend)



@app.route('/getclassbyteacherid')
def getclassbyteacherid():
    con = connDB()
    id = request.args['id']
    sql = """select c.class_name,  t.first_name, t.last_name, s.student_id, c.class_id from class c left join teacher t on c.teacher_id = t.teacher_id left join classdetails cd on cd.class_id = c.class_id left join student s on s.student_id = cd.student_id where t.teacher_id = """+str(id)
    data = pandas.read_sql(sql,con)
    cs = 0
    prevrow = []
    datatosend = []
    prev = -1
    for index, row in data.iterrows():
        if row[3] is not None and not math.isnan(row[3]):
            cs = cs+1
        if index > 0 and prev != -1 and row[0] != prev:
            datatosend = datatosend + [{'class_name': prevrow[0], 'first_name':prevrow[1], 'last_name':prevrow[2], 'class_id':prevrow[4],'student_count':cs}]
            cs = 0
        prev = row[0]
        prevrow = row
        if len(data.index)-1 == index:
            datatosend = datatosend + [{'class_name': prevrow[0], 'first_name':prevrow[1], 'last_name':prevrow[2], 'class_id':prevrow[4],'student_count':cs}]
            cs = 0
    con.close()
    return json.dumps(datatosend)

@app.route('/class')
def getClass():
    con = connDB()
    sql = """select c.class_name,  t.first_name, t.last_name, s.student_id, c.class_id from class c left join teacher t on c.teacher_id = t.teacher_id left join classdetails cd on cd.class_id = c.class_id left join student s on s.student_id = cd.student_id"""
    data = pandas.read_sql(sql,con)
    cs = 0
    prevrow = []
    datatosend = []
    prev = -1
    for index, row in data.iterrows():
        if row[3] is not None and not math.isnan(row[3]):
            cs = cs+1
        if index > 0 and prev != -1 and row[0] != prev:
            datatosend = datatosend + [{'class_name': prevrow[0], 'first_name':prevrow[1], 'last_name':prevrow[2], 'class_id':prevrow[4],'student_count':cs}]
            cs = 0
        prev = row[0]
        prevrow = row
        if len(data.index)-1 == index:
            datatosend = datatosend + [{'class_name': prevrow[0], 'first_name':prevrow[1], 'last_name':prevrow[2], 'class_id':prevrow[4],'student_count':cs}]
            cs = 0
    con.close()
    return json.dumps(datatosend)



@app.route('/teachersbystudentid')
def getTeachersforStudentsById():
    id = request.args['id']
    con = connDB()
    sqlstring  = """select s.student_id, c.class_id, c.class_name, t.teacher_id, t.first_name, t.last_name, t.email, t.img_add
from ((student s inner join classdetails cd on s.student_id = cd.student_id left join class c on c.class_id = cd.class_id) inner join 
teacher t on t.teacher_id = c.teacher_id) where s.student_id = """+id
    data = pandas.read_sql(sqlstring,con).to_json(orient='records')
    con.close()
    return data


@app.route('/teacherforadmin')
def getallteachers():
    con = connDB()
    sql = """select t.*, c.class_name from teacher t left join class c on t.teacher_id = c.teacher_id"""
    data = pandas.read_sql(sql,con)
    datatosend = []
    prevrow = []
    prev= -1
    lang = []
    for index, row in data.iterrows():
        lang = lang+[{row[5]}]
        if index >0  and prev != -1 and row[0] != prev:
            datatosend = datatosend+[{'teacher_id':prevrow[0],'first_name':prevrow[1],'last_name':prevrow[2],'email':prevrow[3],'img_add':prevrow[4]}]
            lang = []
        prev = row[0]
        prevrow = row
    return data.to_json(orient='records')


@app.route('/studentsbyteacherId')
def studentsbyteacherId():
    con = connDB()
    id = request.args['id']
    sql = """select s.* from student s left join classdetails cd on s.student_id = cd.student_id left join class c on c.class_id = cd.class_id left join teacher t on c.teacher_id = t.teacher_id where t.teacher_id = """+id
    data = pandas.read_sql(sql,con)
    con.close()
    return data.to_json(orient='records')


@app.route('/studentsbyclassId')
def studentsbyclassId():
    con = connDB()
    id = request.args['id']
    sql = """select s.*, CONVERT(int,ROUND(DATEDIFF(hour,s.birthday,GETDATE())/8766.0,0)) AS Age from student s left join classdetails cd on cd.student_id = s.student_id left join class c on c.class_id = cd.class_id where c.class_id = """+id
    data = pandas.read_sql(sql,con)
    con.close()
    return data.to_json(orient='records')

@app.route('/parentsbyteacherid')
def parentsbyteacherid():
    con = connDB()
    id = request.args['id']
    sql = """select p.* from parent p left join student s on p.parent_id = s.parent_id left join classdetails cd on cd.student_id = s.student_id left join class c on c.class_id = cd.class_id left join teacher t on c.teacher_id = t.teacher_id where t.teacher_id = """+id
    data = pandas.read_sql(sql,con)
    con.close()
    return data.to_json(orient='records')


@app.route('/adminparent')
def adminparent():
    con = connDB()
    sql = """select * from parent"""
    data = pandas.read_sql(sql,con)
    return data.to_json(orient='records')




@app.route('/teachers')
def getTeachers():
    con = connDB()
    sql = """select t.teacher_id, t.first_name, t.last_name, t.email, t.img_add, c.class_id, s.student_id from teacher t left join class c on t.teacher_id = c.teacher_id left join classdetails cd on cd.class_id = c.class_id left join student s on cd.student_id = s.student_id order by t.teacher_id"""
    
    data = pandas.read_sql(sql,con)
    count  = data['teacher_id'].nunique()
    datatosend = [];
    prevrow = []
    prev= -1
    cc = 0
    cs = 0
    for index, row in data.iterrows():
        if row[5] is not None and not math.isnan(row[5]) :
            cc = cc+1
        if row[6] is not None and not math.isnan(row[6]):
            # print(row[6])
            cs = cs+1
        # print (cc, cs)
        if index >0  and prev != -1 and row[0] != prev:
            datatosend = datatosend + [{'teacher_id':prevrow[0], 'first_name':prevrow[1], 'last_name':prevrow[2],'email':prevrow[3], 'img_add':prevrow[4],'class_num':cc, 'student_num':cs
            }]
            cc =0
            cs =0
        prev = row[0]
        prevrow = row
        if len(data.index)-1 == index:
            datatosend = datatosend + [{'teacher_id':prevrow[0], 'first_name':prevrow[1], 'last_name':prevrow[2],'email':prevrow[3], 'img_add':prevrow[4],'class_num':cc, 'student_num':cs
            }]


    # pandas.createDataFrame()
    con.close()
    return json.dumps(datatosend)


@app.route('/addClassByAdmin', methods=['POST'])
def addClassByAdmin():
    con = connDB()
    cursor = con.cursor()
    sqlstring = 'insert into class values (\''+request.json['cname']+'\',GETDATE(),'+request.json['cterm']+',\''+request.json['cschool']+'\',\'\');'
    cursor.execute(sqlstring)
    cursor.commit()
    con.close()
    return 'done'

@app.route('/regStudent', methods=['POST'])
def regStudent():
    con = connDB()
    cursor = con.cursor()
    classes = request.json['class']
    sqlstring = 'insert into student values (\''+request.json['fname']+'\',\''+request.json['sname']+'\',\''+request.json['email']+'\','+request.json['gender']+',\''+request.json['simpleDate']+'\',\''+request.json['phone']+'\','+request.json['grade']+',\'\','+request.json['parent_id']+');'
    print(sqlstring)
    cursor.execute(sqlstring)
    data = pandas.read_sql('select student_id from student where first_name = \''+request.json['fname']+'\' and last_name = \''+request.json['sname']+'\' and email = \''+request.json['email']+'\'',con)
    student_id = data['student_id'][0]
    
    for class_item in classes: 
        sqls = 'insert into classdetails values ('+str(class_item)+','+str(student_id)+');'
        cursor.execute(sqls)

    # cursor.commit()
    data = pandas.read_sql('select student_id from student where first_name = \''+request.json['fname']+'\' and last_name = \''+request.json['sname']+'\' and email = \''+request.json['email']+'\'',con)
    student_id = data['student_id'][0]
    sqlstr = """insert into users values ('"""+request.json['email']+"""','student', 0, 1,"""+str(student_id)+""");"""
    print(sqlstr)
    cursor.execute(sqlstr)
    cursor.commit()
    con.close()
    return 'done'



@app.route('/addTeacherByAdmin', methods=['POST'])
def addTeacherByAdmin():
    con = connDB()
    cursor = con.cursor()
    sqlstring = 'insert into teacher values (\''+request.json['tfname']+'\',\''+request.json['tlname']+'\',\''+request.json['tmail']+'\',\'\');'
    cursor.execute(sqlstring)
    data = pandas.read_sql('select teacher_id,email from teacher where first_name = \''+request.json['tfname']+'\' and last_name = \''+request.json['tlname']+'\' and email = \''+request.json['tmail']+'\'',con)
    sqlstr = 'insert into users values (\''+str(data['email'][0])+'\',\'teacher\',0,3,'+str(data['teacher_id'][0])+');'
    cursor.execute(sqlstr)
    cursor.commit()
    con.close()
    return 'done'





@app.route('/parentSignUp', methods=['POST'])
def parentsignup():
    con = connDB()
    cursor = con.cursor()
    sqlstring = 'insert into parent values (\''+request.json['fname']+'\',\''+request.json['lname']+'\',\''+request.json['email']+'\',\'\',\''+request.json['bday']+'\','+request.json['gender']+');'
    cursor.execute(sqlstring)
    data = pandas.read_sql('select parent_id,email from parent where first_name = \''+request.json['fname']+'\' and last_name = \''+request.json['lname']+'\' and email = \''+request.json['email']+'\'',con)
    sqlstr = 'insert into users values (\''+str(data['email'][0])+'\',\''+str(request.json['pass'])+'\',0,2,\''+str(data['parent_id'][0])+'\');'
    cursor.execute(sqlstr)
    cursor.commit()
    con.close()
    return 'done'





@app.route('/getstudentbyparentid')
def getstudentsbyparent():
    con = connDB()
    id = request.args['id']
    data = pandas.read_sql('select s.student_id from student s inner join parent p on s.parent_id = p.parent_id where p.parent_id = '+id,con).to_json(orient='records')
    con.close()
    return data


@app.route('/updatestudentstatus')
def updatestudentstatus():
    id = request.args['id']
    status = request.args['status']
    con = connDB()
    sqlstring = "update users set user_login_status = "+status+" where user_id_all = "+id+" and user_role=2"
    cursor = con.cursor()
    cursor.execute(sqlstring)
    cursor.commit()
    con.close()
    return 'success'


@app.route('/updateparentstatus')
def updateparentstatus():
    id = request.args['id']
    status = request.args['status']
    con = connDB()
    sqlstring = "update users set user_login_status = "+status+" where user_id_all = "+id+" and user_role=2"
    cursor = con.cursor()
    cursor.execute(sqlstring)
    cursor.commit()
    con.close()
    return 'success'


@app.route('/updateadminstatus')
def updateadminstatus():
    id = request.args['id']
    status = request.args['status']
    con = connDB()
    sqlstring = "update users set user_login_status = "+status+" where user_id_all = "+id+" and user_role=2"
    cursor = con.cursor()
    cursor.execute(sqlstring)
    cursor.commit()
    con.close()
    return 'success'



@app.route('/postattendance', methods=['POST'])
def postattendance():
    con = connDB()
    student_id = request.json['student_id']
    class_id = request.json['class_id']
    date = request.json['date']
    status = request.json['absence']
    sql = """insert into attendance values ("""+str(student_id)+""","""+str(class_id)+""",\'"""+str(date)+"""\',"""+str(status)+""");"""
    cursor = con.cursor()
    cursor.execute(sql)
    cursor.commit()
    con.close()
    return 'success'


@app.route('/updateteacherstatus')
def updateteacherstatus():
    id = request.args['id']
    status = request.args['status']
    con = connDB()
    sqlstring = "update users set user_login_status = "+status+" where user_id_all = "+id+" and user_role=2"
    cursor = con.cursor()
    cursor.execute(sqlstring)
    cursor.commit()
    con.close()
    return 'success'



@app.route('/login')
def login():
    con = connDB()
    username = request.args['uname']
    password = request.args['pass']
    sql = 'select * from users where username = \''+username+'\' and password = \''+password+'\''
    data = pandas.read_sql('select * from users where username = \''+username+'\' and password = \''+password+'\'',con).to_json(orient='records')
    return data

if __name__ == '__main__':
    app.run(debug=True)