import React,{Component} from 'react';
import { Row, CardBody, Card, Col,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import './header.css';
import LoginCard from './LoginCard';
import HeaderCommon from './HeaderCommon';


export default class AboutUs extends Component {
    
    render(){
        return(
            <div>
            <HeaderCommon id='4' />
            <div style={{backgroundColor:"orange",height:"550px",opacity:"0.65"}} className="mt-10">
                
                <h1>Who We Are</h1>
                <p style={{marging:"30px"}}>
                
                
               
                      <h2> African-Australian Multicultural Employment and Youth Services (AAMEYS), is a Not for Profit- Community Based Organisation (NGO/CBO), which is responding to challenges facing African Australians, in the areas of </h2>
                       <br/> Employment 
                        <br/>Mental Health
                       <br/> Social Isolation
                        <br/>Education
                        <br/>Risk Behaviours leading to contact with the Criminal Justice System, as well as emerging issues.
                        <br/>Racism
                        <br/>Disproportionate levels of exclusion
                        <br/>Low income and or institutionalised racism exacerbate the situation for most of the young people receiving services. 
                
                        
                </p>
            </div>

            
            <div>
                <Row>
                    <Col className="col-md-3" style={{marginTop:"30px",textAlign:"center",justifyContent:"center", alignContent:"center"}}>
                        <p>Call Us</p>
                    </Col>
                    <Col className="col-md-3" style={{marginTop:"30px",textAlign:"center",justifyContent:"center", alignContent:"center"}}>
                        <p>Email Us</p>
                    </Col>
                    <Col className="col-md-3" style={{marginTop:"30px",textAlign:"center",justifyContent:"center", alignContent:"center"}}>
                        <p>Visit Us</p>
                    </Col>
                    <Col className="col-md-3" style={{marginTop:"30px",textAlign:"center",justifyContent:"center", alignContent:"center"}}>
                        <p>Post Us</p>
                    </Col>
                </Row> 
            </div>
            </div>
        );
    }

}