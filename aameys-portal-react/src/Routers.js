import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Base from './Components/Common/Base';
import Home from './Components/Common/Home';
import Student  from "./Components/Student/Student";


const Routers = () => {

    
		return(
				<Base>
					<Switch>
						<Route exact path="/a" component={Home}/>
						<Route exact path="/" component={Student} />
					</Switch>
				</Base>
		);
    }

export default Routers;
