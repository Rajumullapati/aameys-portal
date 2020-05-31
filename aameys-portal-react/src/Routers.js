import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Base from './Components/Common/Base';
import Home from './Components/Common/Home';
import Student  from "./Components/Student/Student";
import Grade from "./Components/Student/Grade";
import Attendance from './Components/Student/Attendance';
import Schedule from './Components/Student/Schedule';
import Admin from './Components/Admin/Admin';
import AdminTeacher from './Components/Admin/AdminTeachers';
import AdminTeacherInfo from './Components/Admin/AdminTeacherInfo';
import AdminTeacherEditInfo from './Components/Admin/AdminTeacherEditInfo';
import AdminTeacherAddTeacher from './Components/Admin/AdminTeacherAddTeacher';
import AdminTeacherAssignClasses from './Components/Admin/AdminTeacherAssignClasses';
import AdminClass from './Components/Admin/AdminClasses/AdminClass';
import AdminClassInfo from './Components/Admin/AdminClasses/AdminClassInfo';
import AdminClassesEditClassInfo from './Components/Admin/AdminClasses/AdminClassesEditClassInfo';
import AdminClassAssignTeacher from './Components/Admin/AdminClasses/AdminClassAssignTeacher';
import AdminClassAssignStudent from './Components/Admin/AdminClasses/AdminClassAssignStudents';
import AdminClassAttendance from './Components/Admin/AdminClasses/AdminClassAttendance';
import AdminClassGrade from './Components/Admin/AdminClasses/AdminClassGrade';



const Routers = () => {

    
		return(
				<Base>
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route exact path="/student/:id/" component={Student} />
						<Route exact path="/student/grades/:id" component={Grade} />
						<Route exact path="/student/attendance/:id" component={Attendance} />
						<Route exact path="/student/schedule/:id" component={Schedule} />
						<Route exact path="/admin" component={Admin} />
						<Route exact path="/admin/teacher" component={AdminTeacher} />
						<Route exact path="/admin/teacher/info" component={AdminTeacherInfo} />
						<Route exact path="/admin/teacher/editinfo" component={AdminTeacherEditInfo} />
						<Route exact path="/admin/teacher/addteacher" component={AdminTeacherAddTeacher} />
						<Route exact path="/admin/teacher/aassignclass" component={AdminTeacherAssignClasses} />
						<Route exact path="/admin/class" component={AdminClass} />
						<Route exact path="/admin/class/:classname" component={AdminClassInfo} />
						<Route exact path="/admin/class/:classname/editinfo" component={AdminClassesEditClassInfo} />
						<Route exact path="/admin/class/:classname/assignteacher" component={AdminClassAssignTeacher} />
						<Route exact path="/admin/class/:classname/assignstudent" component={AdminClassAssignStudent} />
						<Route exact path="/admin/class/:classname/attendance" component={AdminClassAttendance} />
						<Route exact path="/admin/class/:classname/grading" component={AdminClassGrade} />
						
					</Switch>
				</Base>
		);
    }

export default Routers;
