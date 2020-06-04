import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Base from './Components/Common/Base';
import Home from './Components/Common/Home';
import Student  from "./Components/Student/Student";
import Grade from "./Components/Student/Grade";
import Attendance from './Components/Student/Attendance';
import Schedule from './Components/Student/Schedule';
import Admin from './Components/Admin/Admin';
import AdminTeacher from './Components/Admin/AdminTeacher/AdminTeachers';
import AdminTeacherInfo from './Components/Admin/AdminTeacher/AdminTeacherInfo';
import AdminTeacherEditInfo from './Components/Admin/AdminTeacher/AdminTeacherEditInfo';
import AdminTeacherAddTeacher from './Components/Admin/AdminTeacher/AdminTeacherAddTeacher';
import AdminTeacherAssignClasses from './Components/Admin/AdminTeacher/AdminTeacherAssignClasses';
import AdminClass from './Components/Admin/AdminClasses/AdminClass';
import AdminClassInfo from './Components/Admin/AdminClasses/AdminClassInfo';
import AdminClassesEditClassInfo from './Components/Admin/AdminClasses/AdminClassesEditClassInfo';
import AdminClassAssignTeacher from './Components/Admin/AdminClasses/AdminClassAssignTeacher';
import AdminClassAssignStudent from './Components/Admin/AdminClasses/AdminClassAssignStudents';
import AdminClassAttendance from './Components/Admin/AdminClasses/AdminClassAttendance';
import AdminClassGrade from './Components/Admin/AdminClasses/AdminClassGrade';
import AdminStudent from './Components/Admin/AdminStudent/AdminStudent';
import AdminStudentAddStudent from './Components/Admin/AdminStudent/AdminStudentAddStudent';
import AdminStudentEditInfo from './Components/Admin/AdminStudent/AdminStudentEditInfo';
import AdminStudentAssignClass from './Components/Admin/AdminStudent/AdminStudentAssignClass';
import AdminSchedule from './Components/Admin/AdminSchedule';
import AdminEmailTeachers from './Components/Admin/AdminEmailTeachers';
import AdminEmailStudent from './Components/Admin/AdminEmailStudent';
import AdminEmailParent from './Components/Admin/AdminEmailParent';
import AdminEditInfo from './Components/Admin/AdminEditInfo';
import StudentEmail from './Components/Student/StudentEmail';
import StudentInfo from './Components/Student/StudentInfo';
import ParentSignUp from './Components/Parent/ParentSignUp';
import ParentDash from './Components/Parent/ParentDash';
import ParentGrade from './Components/Parent/ParentGrade';
import ParentAttendance from './Components/Parent/ParentAttendance';
import ParentSchedule from './Components/Parent/ParentSchedule';
import ParentRegChild from './Components/Parent/ParentRegChild';
import ParentMailTeaher from './Components/Parent/ParentMailTeacher';
import ParentEditInfo from './Components/Parent/ParentEditInfo';
import AdminClassAddClass from './Components/Admin/AdminClasses/AdminClassAddClass';



const Routers = () => {

    
		return(
				<Base >
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route exact path="/student/:id/" component={Student} />
						<Route exact path="/student/grades/:id" component={Grade} />
						<Route exact path="/student/attendance/:id" component={Attendance} />
						<Route exact path="/student/schedule/:id" component={Schedule} />
						<Route exact path="/student/:id/mailteacher" component={StudentEmail} />
						<Route exact path="/student/:id/accinfo" component={StudentInfo} />

						<Route exact path="/parent/signup" component={ParentSignUp} />
						<Route exact path="/parent/dash/:pid" component={ParentDash} />
						<Route exact path="/parent/dash/:pid/:sid/grade" component={ParentGrade} />
						<Route exact path="/parent/dash/:pid/:sid/attendance" component={ParentAttendance} />
						<Route exact path="/parent/dash/:pid/:sid/schedule" component={ParentSchedule} />
						<Route exact path="/parent/dash/:pid/regchild" component={ParentRegChild} />
						<Route exact path="/parent/:pid/mailteacher" component={ParentMailTeaher} />
						<Route exact path="/parent/:pid/accinfo" component={ParentEditInfo} />


						<Route exact path="/admin/:aid/teacher/addteach" component={AdminTeacherAddTeacher} />
						<Route exact path="/admin/:aid" component={Admin} />
						<Route exact path="/admin/:aid/teacher" component={AdminTeacher} />
						<Route exact path="/admin/:aid/teacher/:id" component={AdminTeacherInfo} />
						<Route exact path="/admin/:aid/teacher/:id/editinfo" component={AdminTeacherEditInfo} />
						<Route exact path="/admin/:aid/teacher/:id/assignclass" component={AdminTeacherAssignClasses} />
						<Route exact path="/admin/:aid/class" component={AdminClass} />
						<Route exact path="/admin/:aid/class/addclass" component={AdminClassAddClass} />
						<Route exact path="/admin/:aid/class/:cid" component={AdminClassInfo} />
						<Route exact path="/admin/:aid/class/:cid/editinfo" component={AdminClassesEditClassInfo} />
						<Route exact path="/admin/:aid/class/:cid/assignteacher" component={AdminClassAssignTeacher} />
						<Route exact path="/admin/:aid/class/:cid/assignstudent" component={AdminClassAssignStudent} />
						<Route exact path="/admin/:aid/class/:cid/attendance" component={AdminClassAttendance} />
						<Route exact path="/admin/:aid/class/:cid/grading" component={AdminClassGrade} />
						<Route exact path="/admin/:aid/student/" component={AdminStudent} />
						<Route exact path="/admin/:aid/student/addstudent" component={AdminStudentAddStudent} />
						<Route exact path="/admin/:aid/student/:id" component={AdminStudentEditInfo} />
						<Route exact path="/admin/:aid/student/:id/assignclass" component={AdminStudentAssignClass} />
						<Route exact path="/admin/:aid/schedule" component={AdminSchedule} />
						<Route exact path="/admin/:aid/emailteacher" component={AdminEmailTeachers} />
						<Route exact path="/admin/:aid/emailstudent" component={AdminEmailStudent} />
						<Route exact path="/admin/:aid/emailparent" component={AdminEmailParent} />
						<Route exact path="/admin/:aid/editinfo" component={AdminEditInfo} />
						
					</Switch>
				</Base>
		);
    }

export default Routers;
