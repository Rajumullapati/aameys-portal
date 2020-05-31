import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button } from 'reactstrap';
import { Link } from 'react-router-dom';


export default class AdminClassInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            class:""
        }
    }

    componentDidMount(){

    }

    render(){
        return(
            <div>
                 <div style={{backgroundColor:"orange", marginTop:"150px",height:"450px", opacity:"0.65"}}> 
                <Row>
                <Col lg={3} md={3} sm={3} className="mb-30"></Col>
                    <Col lg={6} md={6} sm={6} className="mb-30">
                        <div style={{width:"80%"}}>
                            <CardBody>
                                <div className="user-bg parallax" style={{backgroundColor:"white"}}>
                                    <div style={{height:"150px"}} className="user-info">
                                        <Row>
                                            <Col lg={4} md={4} className="align-self-center">
                                                <div className="user-dp"><img style={{ margin: "10px", textAlign:"center", height:"100px"}} className="img-fluid rounded-circle" src="assets/images/profile-avatar.jpg" /></div>
                                            </Col>
                                            
                                            <Col>
                                                <div className="user-detail">
                                                
                                                    <h2 style={{fontSize:"18px", fontWeight:"bolder"}} className="name">Class Info</h2>
                                                    <p>Class Name  : </p>
                                                    <p>Term        : </p>
                                                    <p>Teacher     : </p>
                                                    <p>Students    : </p>
                                                </div>
                                            </Col>
                                           
                                        </Row>
                                        
                                    </div>
                                </div>
                            </CardBody>
                        </div>
                    </Col>
                    <Col lg={3} md={3} sm={3}>
                    <div style={{margin:"10px"}}>
                        <Link to={{pathname:"editinfo"}}><Button style={{marginBottom:"4px", width:"70%", textAlign: "left", backgroundColor:"grey"}} type="button" className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-id-card-o"></i>Edit class info</Button></Link>
                        <Link to={{pathname:"assignteacher"}}><Button style={{marginBottom:"4px", width:"70%", textAlign: "left", backgroundColor:"grey"}} type="button" className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-envelope-o"></i>Assign Teachers</Button></Link>
                        <Link to={{pathname:"assignstudent"}}><Button style={{marginBottom:"4px", width:"70%", textAlign: "left", backgroundColor:"grey"}} type="button" className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-envelope-o"></i>Assign Students</Button></Link>
                    </div>
                    {/* to={{pathname: `aassignclass`}}  to={{pathname: `aassignclass`}} */}
                    </Col>
                </Row>
                <Row>
                <Col lg={3} md={3} sm={3} />
                <Col lg={5} md={5} sm={5}>
                        <Card style={{margin:"10px"}} className="card card-statistics">
                            <CardBody>
                                <div className="clearfix">
                                    <div className="float-left text-left">
                                        <p className="card-text text-dark">Attendance</p>
                                    </div>
                                    <div className="float-right"> 
                                    <Link to={{pathname:"attendance"}}><i class="fa fa-arrow-circle-o-right fa-2x highlight-icon" aria-hidden="true"></i></Link>
                                    
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                        <Card style={{margin:"10px"}} className="card-statistics">
                            <CardBody>
                            <div className="clearfix">
                                    <div className="float-left text-left">
                                        <p className="card-text text-dark">Grading</p>
                                    </div>
                                    <div className="float-right">
                                   <Link to={{pathname:"grading"}}><i className="fa fa-arrow-circle-o-right fa-2x highlight-icon" aria-hidden="true" /></Link> 
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                        </Col>
                </Row>

             </div>
            </div>
        );
    }
}