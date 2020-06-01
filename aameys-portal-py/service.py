from flask import Flask, request

app = Flask(__name__)


@app.route('/')
def hello():
    return "Hello World!"

@app.route('/studentid')
def getStudentById():
    id = request.args['id']

@app.route('/attendancebyid')
def getStudentAttendanceById():
    pass

@app.route('/gradesbyid')
def getStudentGradesById():
    pass

def getTeacherDataByName():
    pass



if __name__ == '__main__':
    app.run(debug=True)