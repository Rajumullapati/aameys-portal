import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from '../Common/header';
import axios from 'axios';


export default class Admin extends Component {
    constructor(props){
        super(props);
        this.state = {
            admin_name : "",
            teachers : [],
            admin_id:this.props.match.params.aid,
            admin:[{"admin_id":"","first_name":"","last_name":"","email":"","img_add":"","teacher_count":"","student_count":"", "class_count":""}]
     
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/adminById?id='+this.state.admin_id)
        .then(res => {
            this.setState({admin: res.data})
        })
        .catch(err => console.log(err))
    }

    render(){
        return(

            <div>
            <Header updateParent={this.updateValue} />
             <div>   
             <div style={{backgroundColor:"orange", marginTop:"150px",height:"500px", opacity:"0.65"}}> 
             <Row className="page-title">
          
          <Col style={{margin:"10px"}} sm={6} lg={4} >
              <Breadcrumb className="float-left float-sm-left">
              <BreadcrumbItem active>Administrator</BreadcrumbItem>
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
                                                
                                                    <h2 style={{fontSize:"18px", fontWeight:"bolder"}} className="name">Administrator Info</h2>
                                                    <p>Name: <span style={{fontSize:"100%", fontWeight:"bolder", marginRight:"50%"}} className="float-right">{ this.state.admin[0]['first_name']} { this.state.admin[0]['last_name']    } </span></p>
                                                    <p>Teacher: <span style={{fontSize:"100%", fontWeight:"bolder", marginRight:"50%"}} className="float-right">{ this.state.admin[0]['teacher_count']     } </span> </p>
                                                    <p>Classes: <span style={{fontSize:"100%", fontWeight:"bolder", marginRight:"50%"}} className="float-right">{ this.state.admin[0]['class_count']     } </span> </p>
                                                    <p>Students: <span style={{fontSize:"100%", fontWeight:"bolder", marginRight:"50%"}} className="float-right">{ this.state.admin[0]['student_count']     } </span> </p>
                                                  
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
                        <Link to={{pathname:"editinfo"}}><Button style={{marginBottom:"4px", width:"70%", textAlign: "left", backgroundColor:"grey"}} type="button" className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-id-card-o"></i>My account</Button></Link>
                        <Link to={{pathname:`emailteacher`}}><Button style={{marginBottom:"4px", width:"70%", textAlign: "left", backgroundColor:"grey"}} type="button" className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-envelope-o"></i>Email teachers</Button></Link>
                        <Link to={{pathname:"emailstudent"}}><Button style={{marginBottom:"4px", width:"70%", textAlign: "left", backgroundColor:"grey"}} type="button" className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-envelope-o"></i>Email students</Button></Link>
                        <Link to={{pathname:"emailparent"}}><Button style={{marginBottom:"4px", width:"70%", textAlign: "left", backgroundColor:"grey"}} type="button" className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-envelope-o"></i>Email parents</Button></Link>
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
                    <div style={{textAlign:"center"}}><Link to={{pathname:  `/admin/${this.state.admin_id}/teacher/`}}><i style={{ fontSize:"140px"}} className="fa fa-graduation-cap"></i>
                        <p style={{textAlign:"center"}}>Teachers</p></Link></div>
                    </CardBody>
                </Col>
                <Col sm={3} lg={3} md={3} style={{padding:"0px"}}>
                    <CardBody style={{border:"groove", height:"200px"}}>
                    <div style={{textAlign:"center"}}><Link to={{pathname:  `/admin/${this.state.admin_id}/class`}}><i style={{fontSize:"140px"}} className="fa fa-id-card-o"></i>
                         <p style={{textAlign:"center"}}>Classes </p></Link></div>
                    </CardBody>
                </Col>
                <Col sm={3} lg={3} md={3} style={{padding:"0px"}}>
                    <CardBody style={{border:"groove", height:"200px"}}>
                    <div style={{textAlign:"center"}}><Link to={{pathname:  `/admin/${this.state.admin_id}/student`}}><i style={{fontSize:"140px"}} className="fa fa-address-book"></i>
                         <p style={{textAlign:"center"}}>Students </p></Link></div>
                    </CardBody>
                </Col>
                <Col sm={3} lg={3} md={3} style={{paddingLeft:"0px"}}>
                    <CardBody style={{border:"groove", height:"200px", flex:"1"}}>
                    <div style={{ textAlign:"center"}}><Link to={{pathname:  `/admin/${this.state.admin_id}/schedule`}}><i style={{fontSize:"130px", marginBottom:"10px"}} className="fa fa-calendar-minus-o"></i>
                         <p style={{textAlign:"center"}}>Schedule </p></Link></div>
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