import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

var mailPath = "";
var accPath = "";
export default class ParentDash extends Component {
    constructor(props){
        super(props);
        this.state = {
            student_id: "10",
            student_image: "",
            student_first_name: "",
            student_last_name: "",
            student_sub: [],
            student_attendance: [],
            student_email: "",

        };
        
    }
    componentDidMount(){
        mailPath = "mailteacher";
        accPath = "accinfo";
        console.log(mailPath)
    }
    render(){
        console.log(this.state);
        console.log(this.props)
        return (
            <div style={{backgroundColor:"orange", marginTop:"150px",height:"400px", opacity:"0.65"}}>
            <Row style={{marginBottom:"25px"}}>
                <Col sm={2} lg={5} md = {5} />
                <Col sm={4} lg={4} md = {4}>
                    <Row style={{height:"10px", alignSelf:"center", marginBottom:"100px", marginLeft:"1px"}} className="user-dp"><img style={{height:"100px", marginTop:"3px"}} className="img-fluid rounded-circle" src="assets/images/profile-avatar.jpg" /></Row>
                    <Row style={{ fontSize: "15px", fontWeight:"bold", color:"black"}} className="bold"><Link style={{marginRight:"10px"}} to={{}}><i class="fa fa-arrow-circle-o-left"></i></Link>Student ID {this.state.student_id}<Link  style={{marginLeft:"10px"}} to={{pathname:""}}><i class="fa fa-arrow-circle-o-right"></i></Link></Row>
                </Col>
                {/* <Col sm ={3} lg={1} md={1} /> */}
                <Col sm = {3} lg = {3} md = {2}>
                    <div style={{margin:"10px"}}>
                    <Link to={{pathname:accPath}}><Button style={{marginBottom:"4px", width:"70%", textAlign: "left", backgroundColor:"grey"}} type="button" className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-id-card-o"></i>My Account</Button></Link>
                        <Link to={{pathname:mailPath}}><Button style={{marginBottom:"4px", width:"70%", textAlign: "left", backgroundColor:"grey"}} type="button" className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-id-card-o"></i>Mail Teachers</Button></Link>

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
                    <div style={{textAlign:"center"}}><Link to={{pathname:  `/parent/dash/${this.state.student_id}/grade`}}><i style={{ fontSize:"100px"}} className="fa fa-graduation-cap"></i>
                        <p style={{textAlign:"center"}}>View my grades.</p></Link></div>
                    </CardBody>
                </Col>
                <Col sm={3} lg={3} md={3} style={{padding:"0px"}}>
                    <CardBody style={{border:"groove", height:"200px"}}>
                    <div style={{textAlign:"center"}}><Link to={{pathname:  `/parent/dash/${this.state.student_id}/attendance`}}><i style={{fontSize:"100px"}} className="fa fa-id-card-o"></i>
                         <p style={{textAlign:"center"}}>Attendance </p></Link></div>
                    </CardBody>
                </Col>
                <Col sm={3} lg={3} md={3} style={{padding:"0px"}}>
                    <CardBody style={{border:"groove", height:"200px"}}>
                    <div style={{textAlign:"center"}}><Link to={{pathname:  `/parent/dash/${this.state.student_id}/schedule`}}><i style={{fontSize:"100px"}} className="fa fa-id-card-o"></i>
                         <p style={{textAlign:"center"}}>Class Schedule </p></Link></div>
                    </CardBody>
                </Col>
                <Col sm={3} lg={3} md={3} style={{paddingLeft:"0px"}}>
                    <CardBody style={{border:"groove", height:"200px", flex:"1"}}>
                    <div style={{ textAlign:"center"}}><Link to={{pathname:  `/parent/dash/regchild`}}><i style={{fontSize:"100px", marginBottom:"10px"}} className="fa fa-calendar-minus-o"></i>
                         <p style={{textAlign:"center"}}>Register child </p></Link></div>
                    </CardBody>
                </Col>
                </Row>
                </Card>
                </Col>
                <Col sm={2} lg={1} md = {1} /> 
            </Row>

            

            </div>
        );
    }
}