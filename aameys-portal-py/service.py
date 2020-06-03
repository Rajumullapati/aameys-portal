from flask import Flask, request
from connDb import connDB
import pandas
import datetime
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello():
    con = connDB()
    data = pandas.read_sql('select * from sys.tables', con)
    print(data)
    con.close()
    return "Hello World!"

@app.route('/students')
def getStudents():
    con = connDB()
    data = pandas.read_sql('select * from student',con).to_json(orient='records')
    con.close()
    return data


@app.route('/studentid')
def getStudentById():
    id = request.args['id']
    con = connDB()
    data = pandas.read_sql('select * from student where student_id = '+id,con).to_json(orient='records')
    con.close()
    return data

@app.route('/attendancebyid')
def getStudentAttendanceById():
    id = request.args['id']
    con = connDB()
    data = pandas.read_sql('select top(5) * from attendance where student_id = '+id+' order by dateattendance',con)
    data.index = data['dateattendance']
    data = data.drop(['dateattendance','student_id'], axis=1)
    data = data.T
    print(data)
    con.close()
    return data.to_json(orient='records')

@app.route('/attendanceByDate')
def getAttendanceByDate():
    date = request.args['date']
    con = connDB()
    data = pandas.read_sql('select * from attendance where dateattendance = \''+date+'\'',con).to_json(orient='records')
    con.close()
    return data

@app.route('/gradesbyid')
def getStudentGradesById():
    id = request.args['id']
    con = connDB()
    sqlstr = """select s.term, c.class_name, g.one, g.two, g.three, g.four, g.five, g.six, g.seven, g.eight, g.nine, g.ten, g.msg, (g.one+g.two+g.three+g.four+g.five+g.six+g.seven+g.eight+g.nine+g.ten)/10 as per from ((student s 
inner join class c on s.class_id = c.class_id) inner join grades g on g.student_id = s.student_id) where s.student_id = """+id
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
    data = pandas.read_sql('select * from teacher where teacher_id = '+id,con).to_json(orient='records')
    con.close()
    return data

@app.route('/teachersbystudentid')
def getTeachersforStudentsById():
    id = request.args['id']
    con = connDB()
    sqlstring  = """select s.student_id, c.class_id, c.class_name, t.teacher_id, t.first_name, t.last_name, t.email, t.img_add
from ((student s inner join class c on s.class_id = c.class_id) inner join 
teacher t on t.teacher_id = c.teacher_id) where s.student_id = """+id
    data = pandas.read_sql(sqlstring,con).to_json(orient='records')
    con.close()
    return data

@app.route('/teachers')
def getTeachers():
    con = connDB()
    data = pandas.read_sql('select * from teacher',con).to_json(orient='records')
    con.close()
    return data



@app.route('/parentSignUp', methods=['POST'])
def parentsignup():
    con = connDB()
    cursor = con.cursor()
    sqlstring = 'insert into parent values (\''+request.json['fname']+'\',\''+request.json['lname']+'\',\''+request.json['email']+'\',\'\',\''+request.json['bday']+'\','+request.json['gender']+');'
    
    cursor.execute(sqlstring)
    cursor.commit()
    data = pandas.read_sql('select parent_id,email from parent where first_name = \''+request.json['fname']+'\' and last_name = \''+request.json['lname']+'\' and email = \''+request.json['email']+'\'',con)
    sqlstr = 'insert into users values (\''+str(data['email'][0])+'\',\''+str(request.json['pass'])+'\',0,2,\''+str(data['parent_id'][0])+'\');'
    print(sqlstr)
    cursor.execute(sqlstr)
    cursor.commit()
    con.close()
    return 'done'





@app.route('/getstudentbyparentid')
def getstudentsbyparent():
    con = connDB()
    data = pandas.read_sql('select s.student_id from student s inner join parent p on s.parent_id = p.parent_id',con).to_json(orient='records')
    con.close()
    return data


@app.route('/updatestudentstatus')
def updatestudentstatus():
    id = request.args['id']
    status = request.args['status']
    con = connDB()
    sqlstring = "update users set user_login_status = "+status+" and user_id_all = "+id+" where user_role=1"
    cursor = con.cursor()
    cursor.execute(sqlstring)
    cursor.commit()
    con.close()

@app.route('/updateparentstatus')
def updateparentstatus():
    id = request.args['id']
    status = request.args['status']
    con = connDB()
    sqlstring = "update users set user_login_status = "+status+" and user_id_all = "+id+" where user_role=2"
    cursor = con.cursor()
    cursor.execute(sqlstring)
    cursor.commit()
    con.close()



@app.route('/login')
def login():
    con = connDB()
    username = request.args['uname']
    password = request.args['pass']
    data = pandas.read_sql('select * from users where username = \''+username+'\' and password = \''+password+'\'',con).to_json(orient='records')
    return data

if __name__ == '__main__':
    app.run(debug=True)