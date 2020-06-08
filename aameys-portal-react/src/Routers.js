import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Base from './Components/Common/Base';
import Home from './Components/Common/Home';
import Student  from "./Components/Student/Student";
import Grade from "./Components/Student/Grade";
import Attendance from './Components/Student/Attendance';
import Schedule from './Components/Student/Schedule';
import Admin from './Components/Admin/Admin';
import AdminStudentRemoveClass from './Components/Admin/AdminStudent/AdminStudentRemoveClasses';
import AdminTeacher from './Components/Admin/AdminTeacher/AdminTeachers';
import AdminTeacherInfo from './Components/Admin/AdminTeacher/AdminTeacherInfo';
import AdminTeacherEditInfo from './Components/Admin/AdminTeacher/AdminTeacherEditInfo';
import AdminScheduleAssign from './Components/Admin/AdminAssignSchedule';
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
// import AdminStudentAddStudent from './Components/Admin/AdminStudent/AdminStudentAddStudent';
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
import Career from './Components/Common/Career';
import TeacherClassSchedule from './Components/Teacher/TeacherClassSchedule';
import CareerApply from './Components/Common/careerapply';
import AboutUs  from './Components/Common/AboutUs';
import TeacherHome from './Components/Teacher/TeacherHome';
import TeacherClass from './Components/Teacher/TeacherClass';
import TeacherClassStudent from './Components/Teacher/TeacherClassStudent';
import TeacherClassStudentInfo from './Components/Teacher/TeacherClassStudentInfo';
import TeacherClassAttendance from './Components/Teacher/TeacherClassAttendance';
import TeacherClassGrade from './Components/Teacher/TeacherClassGrade';
import TeacherEmailStudents from './Components/Teacher/TeacherEmailStudents';
import TeacherEmailParent from './Components/Teacher/TeacherEmailParents';
import TeacherInfo from './Components/Teacher/TeacherInfo';
import AdminTeacherRemoveClasses from './Components/Admin/AdminTeacher/AdminTeacherRemoveClasses';


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
						<Route exact path="/parent/dash/:pid/mailteacher" component={ParentMailTeaher} />
						<Route exact path="/parent/dash/:pid/accinfo" component={ParentEditInfo} />


						<Route exact path="/admin/:aid/teacher/addteach" component={AdminTeacherAddTeacher} />
						<Route exact path="/admin/:aid" component={Admin} />
						<Route exact path="/admin/:aid/teacher" component={AdminTeacher} />
						<Route exact path="/admin/:aid/teacher/:id" component={AdminTeacherInfo} />
						<Route exact path="/admin/:aid/teacher/:id/editinfo" component={AdminTeacherEditInfo} />
						<Route exact path="/admin/:aid/teacher/:id/assignclass" component={AdminTeacherAssignClasses} />
						<Route exact path="/admin/:aid/student/:id/removeclass" component={AdminStudentRemoveClass} />
						{/* <Route exact path="/admin/:aid/teacher/:id/removeclass" component={AdminStudentRemoveClass} /> */}
						<Route exact path="/admin/:aid/class" component={AdminClass} />
						<Route exact path="/admin/:aid/class/addclass" component={AdminClassAddClass} />
						<Route exact path="/admin/:aid/class/:cid" component={AdminClassInfo} />
						<Route exact path="/admin/:aid/class/:cid/editinfo" component={AdminClassesEditClassInfo} />
						<Route exact path="/admin/:aid/class/:cid/assignteacher" component={AdminClassAssignTeacher} />
						<Route exact path="/admin/:aid/class/:cid/assignstudent" component={AdminClassAssignStudent} />
						<Route exact path="/admin/:aid/class/:cid/attendance" component={AdminClassAttendance} />
						<Route exact path="/admin/:aid/class/:cid/grading" component={AdminClassGrade} />
						<Route exact path="/admin/:aid/student/" component={AdminStudent} />
						{/* <Route exact path="/admin/:aid/student/addstudent" component={AdminStudentAddStudent} /> */}
						<Route exact path="/admin/:aid/student/:id" component={AdminStudentEditInfo} />
						<Route exact path="/admin/:aid/student/:id/assignclass" component={AdminStudentAssignClass} />
						<Route exact path="/admin/:aid/schedule/assignschedule" component={AdminScheduleAssign} />
						<Route exact path="/admin/:aid/schedule" component={AdminSchedule} />
						<Route exact path="/admin/:aid/emailteacher" component={AdminEmailTeachers} />
						<Route exact path="/admin/:aid/emailstudent" component={AdminEmailStudent} />
						<Route exact path="/admin/:aid/emailparent" component={AdminEmailParent} />
						<Route exact path="/admin/:aid/editinfo" component={AdminEditInfo} />

						<Route exact path="/teacher/:id" component={TeacherHome} />
						<Route exact path="/teacher/:id/class/:cid" component={TeacherClass} />
						<Route exact path="/teacher/:id/class/:cid/students" component={TeacherClassStudent} />
						<Route exact path="/teacher/:id/class/:cid/students/:sid" component={TeacherClassStudentInfo} />
						<Route exact path="/teacher/:id/class/:cid/attendance" component={TeacherClassAttendance} />
						<Route exact path="/teacher/:id/class/:cid/grading" component={TeacherClassGrade} />
						<Route exact path="/teacher/:id/class/:cid/schedule" component={TeacherClassSchedule} />
						<Route exact path="/teacher/:id/emailstudents" component={TeacherEmailStudents} />
						<Route exact path="/teacher/:id/emailparents" component={TeacherEmailParent} />
						<Route exact path="/teacher/:id/accinfo" component={TeacherInfo} />
						



						<Route exact path="/careers" component={Career} />
						<Route exact path="/careers/careerapply" component={CareerApply} />
						
						
						<Route exact path="/aboutus" component={AboutUs} />

						
					</Switch>
				</Base>
		);
    }

export default Routers;
