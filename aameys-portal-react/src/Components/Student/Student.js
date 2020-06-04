import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from '../Common/header'

var mailPath = "";
var accPath = "";
export default class Student extends Component {
    constructor(props){
        super(props);
        this.state = {
            student_id: this.props.match.params.id,
            student_image: "",
            student_first_name: "",
            student_last_name: "",
            student_sub: [],
            student_attendance: [],
            student_email: "",

        };
        
    }
    componentDidMount(){
        mailPath = this.state.student_id+"/mailteacher";
        accPath = this.state.student_id+"/accinfo";
        console.log(mailPath)
    }
    render(){
        console.log(this.state);
        console.log(this.props)
        return (

            <div>
            <Header />
            <div style={{backgroundColor:"orange", marginTop:"150px",height:"400px", opacity:"0.65"}}>
            <Row style={{marginBottom:"25px"}}>
                <Col sm={2} lg={5} md = {5} />
                <Col sm={4} lg={4} md = {4}>
                    <Row style={{height:"10px", alignSelf:"center", marginBottom:"100px", marginLeft:"1px"}} className="user-dp"><img style={{height:"100px", marginTop:"3px"}} className="img-fluid rounded-circle" src="assets/images/profile-avatar.jpg" /></Row>
                    <Row style={{ fontSize: "15px", fontWeight:"bold", color:"black"}} className="bold">Student ID {this.state.student_id}</Row>
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
                <Col sm={4} lg={4} md={4} style={{paddingRight:"0px"}}>
                    <CardBody style={{border:"groove", height:"200px" }} className="icon-box">
                    <div style={{textAlign:"center"}}><Link to={{pathname:  `/student/grades/${this.state.student_id}`}}><i style={{ fontSize:"140px"}} className="fa fa-graduation-cap"></i>
                        <p style={{textAlign:"center"}}>View my grades.</p></Link></div>
                    </CardBody>
                </Col>
                <Col sm={4} lg={4} md={4} style={{padding:"0px"}}>
                    <CardBody style={{border:"groove", height:"200px"}}>
                    <div style={{textAlign:"center"}}><Link to={{pathname:  `/student/attendance/${this.state.student_id}`}}><i style={{fontSize:"140px"}} className="fa fa-id-card-o"></i>
                         <p style={{textAlign:"center"}}>Attendance </p></Link></div>
                    </CardBody>
                </Col>
                <Col sm={4} lg={4} md={4} style={{paddingLeft:"0px"}}>
                    <CardBody style={{border:"groove", height:"200px", flex:"1"}}>
                    <div style={{ textAlign:"center"}}><Link to={{pathname:  `/student/schedule/${this.state.student_id}`}}><i style={{fontSize:"130px", marginBottom:"10px"}} className="fa fa-calendar-minus-o"></i>
                         <p style={{textAlign:"center"}}>Class schedule </p></Link></div>
                    </CardBody>
                </Col>
                    
                </Row>
                </Card>
                </Col>
                <Col sm={2} lg={1} md = {1} /> 
            </Row>

            </div>

            </div>
        );
    }
}