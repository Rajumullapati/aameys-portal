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
                
                <h1>Welcome to AAMEYS</h1>
                <p>
                
                    Hi afnsdkjbch
                     hjvcd ,zc 
                     dbhakjcjm
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