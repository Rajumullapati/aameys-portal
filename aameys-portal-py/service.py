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
    return "Hello World!"

@app.route('/students')
def getStudents():
    con = connDB()
    data = pandas.read_sql('select * from student',con).to_json(orient='records')
    return data


@app.route('/studentid')
def getStudentById():
    id = request.args['id']
    con = connDB()
    data = pandas.read_sql('select * from student where student_id = '+id,con).to_json(orient='records')
    return data

@app.route('/attendancebyid')
def getStudentAttendanceById():
    id = request.args['id']
    con = connDB()
    data = pandas.read_sql('select * from attendance where student_id = '+id,con).to_json(orient='records')
    return data

@app.route('/attendanceByDate')
def getAttendanceByDate():
    date = request.args['date']
    con = connDB()
    data = pandas.read_sql('select * from attendance where dateattendance = \''+date+'\'',con).to_json(orient='records')
    return data

@app.route('/gradesbyid')
def getStudentGradesById():
    id = request.args['id']
    con = connDB()
    data = pandas.read_sql('select * from grades where student_id = '+id,con).to_json(orient='records')
    return data


@app.route('/schedulebyid')
def scheduleById():
    id = request.args['id']
    con = connDB()
    data = pandas.read_sql('select * from schedule where student_id = '+id,con).to_json(orient='records')
    return data

@app.route('/teachersbyid')
def getTeacherDataById():
    id = request.args['id']
    con = connDB()
    data = pandas.read_sql('select * from teacher where teacher_id = '+id,con).to_json(orient='records')
    return data

@app.route('/teachersbystudentid')
def getTeachersforStudentsById():
    id = request.args['id']
    con = connDB()
    sqlstring  = """select s.student_id, c.class_id, c.class_name, t.teacher_id, t.first_name, t.last_name, t.email, t.img_add
from ((student s inner join class c on s.class_id = c.class_id) inner join 
teacher t on t.teacher_id = c.teacher_id);"""
    data = pandas.read_sql(sqlstring,con).to_json(orient='records')
    return data

@app.route('/teachers')
def getTeachers():
    con = connDB()
    data = pandas.read_sql('select * from teacher',con).to_json(orient='records')
    return data


@app.route('/updatestudentstatus')
def updatestudentstatus():
    id = request.args['id']
    status = request.args['status']
    con = connDB()
    sqlstring = "update users set user_login_status = "+status+" and user_id_all = "+id+" where user_role=1"

@app.route('/login')
def login():
    con = connDB()
    username = request.args['uname']
    password = request.args['pass']
    data = pandas.read_sql('select * from users where username = \''+username+'\' and password = \''+password+'\'',con).to_json(orient='records')
    return data

if __name__ == '__main__':
    app.run(debug=True)