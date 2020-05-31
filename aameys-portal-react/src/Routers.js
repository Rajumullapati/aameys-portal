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
					</Switch>
				</Base>
		);
    }

export default Routers;
