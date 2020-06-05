import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import axios from 'axios';
import HeaderTeacher from '../Common/HeaderTeacher';



export default class TeacherClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            admin_name : "",
            teachers : [],
            teacher_id: this.props.match.params.id,
            class_id:this.props.match.params.cid,
            class:{"class_name":"","term":""}
     
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/getclassbyid?id='+this.state.class_id)
        .then(res => {
            this.setState({class: res.data[0]})
        })
        .catch(err => console.log(err))
    }

    render(){
        return(

            <div>
            <HeaderTeacher updateParent={this.updateValue} />
             <div>   
             <div style={{backgroundColor:"orange", marginTop:"150px",height:"500px", opacity:"0.65"}}> 
             <Row className="page-title">
          
          <Col style={{margin:"10px"}} sm={6} lg={4} >
              <Breadcrumb className="float-left float-sm-left">
              <BreadcrumbItem >Teachers</BreadcrumbItem>
              <BreadcrumbItem >Classes</BreadcrumbItem>
              <BreadcrumbItem active>{this.state.class['class_name']}</BreadcrumbItem>
              </Breadcrumb>
          </Col>
      </Row>
                
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
                                                
                                                    <h2 style={{fontSize:"18px", fontWeight:"bolder", marginBottom:"30px"}} className="name">Class Info</h2>
                                                    <p>School Term: <span style={{fontSize:"100%", fontWeight:"bolder", marginRight:"50%"}} className="float-right">{ this.state.class['class_name']}  </span></p>
                                                    <p>Class Name: <span style={{fontSize:"100%", fontWeight:"bolder", marginRight:"50%"}} className="float-right">{ this.state.class['term']     } </span> </p>
                                                    
                                                </div>
                                            </Col>
                                           
                                        </Row>
                                        
                                    </div>
                                </div>
                            </CardBody>
                        </div>
                    </Col>
                </Row>
                <Row style={{height:"200px"}}>
            <Col sm={2} lg={1} md = {1} /> 
            <Col>
                <Card style={{height:"200px", width:"100%"}}>
                <Row>
                <Col sm={3} lg={3} md={3} style={{paddingRight:"0px"}}>
                    <CardBody style={{border:"groove", height:"200px" }} className="icon-box">
                    <div style={{textAlign:"center"}}><Link to={{pathname:  `/teacher/${this.state.teacher_id}/class/${this.state.class_id}/students`}}><i style={{ fontSize:"140px"}} className="fa fa-graduation-cap"></i>
                        <p style={{textAlign:"center"}}>Students</p></Link></div>
                    </CardBody>
                </Col>
                <Col sm={3} lg={3} md={3} style={{padding:"0px"}}>
                    <CardBody style={{border:"groove", height:"200px"}}>
                    <div style={{textAlign:"center"}}><Link to={{pathname:  `/teacher/${this.state.teacher_id}/class/${this.state.class_id}/attendance`}}><i style={{fontSize:"140px"}} className="fa fa-id-card-o"></i>
                         <p style={{textAlign:"center"}}>Attendance </p></Link></div>
                    </CardBody>
                </Col>
                <Col sm={3} lg={3} md={3} style={{padding:"0px"}}>
                    <CardBody style={{border:"groove", height:"200px"}}>
                    <div style={{textAlign:"center"}}><Link to={{pathname:  `/teacher/${this.state.teacher_id}/class/${this.state.class_id}/grading`}}><i style={{fontSize:"140px"}} className="fa fa-address-book"></i>
                         <p style={{textAlign:"center"}}>Grading </p></Link></div>
                    </CardBody>
                </Col>
                <Col sm={3} lg={3} md={3} style={{paddingLeft:"0px"}}>
                    <CardBody style={{border:"groove", height:"200px", flex:"1"}}>
                    <div style={{ textAlign:"center"}}><Link to={{pathname:  `/teacher/${this.state.teacher_id}/class/${this.state.class_id}/schedule`}}><i style={{fontSize:"130px", marginBottom:"10px"}} className="fa fa-calendar-minus-o"></i>
                         <p style={{textAlign:"center"}}>Class Schedule </p></Link></div>
                    </CardBody>
                </Col>                  
                </Row>
                </Card>
                </Col>
                <Col sm={2} lg={1} md = {1} /> 
            </Row>

             </div>
            </div>
            </div>
        );
    }
}