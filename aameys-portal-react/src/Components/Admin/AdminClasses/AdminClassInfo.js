import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import HeaderAdmin from '../../Common/HeaderAdmin';
import axios from 'axios';

export default class AdminClassInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            class_id:this.props.match.params.cid,
            class_name:"",
            first_name:"",
            last_name:"",
            student_count:"",
            term:""
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/getclassbyid?id='+this.state.class_id)
        .then(res => {
            this.setState({
                class_name: res.data[0]['class_name'],
                first_name: res.data[0]['first_name'],
                last_name: res.data[0]['last_name'],
                student_count: res.data[0]['student_count'],
                term: res.data[0]['term']
            })
        } )
        .catch(err => console.log(err))
    }

    render(){
        return(
            <div>
            <HeaderAdmin />
                 <div style={{backgroundColor:"orange", height:"550px", opacity:"0.65"}}> 
                 <Row className="page-title">
          
          <Col style={{margin:"10px"}} sm={6} lg={4} >
              <Breadcrumb className="float-left float-sm-left">
              <BreadcrumbItem >Administrator</BreadcrumbItem>
              <BreadcrumbItem >Classes</BreadcrumbItem>
              <BreadcrumbItem active>{this.state.class_name}</BreadcrumbItem>
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
                                                
                                                    <h2 style={{fontSize:"18px", fontWeight:"bolder"}} className="name">Class Info</h2>
                                                    <p>Class Name: <span style={{fontSize:"100%", fontWeight:"bolder", marginRight:"10%"}} className="float-right">{ this.state.class_name} </span></p>
                                                    <p>Term: <span style={{fontSize:"100%", fontWeight:"bolder", marginRight:"10%"}} className="float-right">{ this.state.term}</span> </p>
                                                    
                                                    <p>Classes: <span style={{fontSize:"100%", fontWeight:"bolder", marginRight:"10%"}} className="float-right">{ this.state.first_name} {this.state.last_name} </span> </p>
                                                    <p>Students: <span style={{fontSize:"100%", fontWeight:"bolder", marginRight:"10%"}} className="float-right">{ this.state.student_count   } </span> </p>
                                                  
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
                        <Link to={{pathname:`${this.state.class_id}/editinfo`}}><Button style={{marginBottom:"4px", width:"70%", textAlign: "left", backgroundColor:"grey"}} type="button" className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-id-card-o"></i>Edit class info</Button></Link>
                        <Link to={{pathname:`${this.state.class_id}/assignteacher`}}><Button style={{marginBottom:"4px", width:"70%", textAlign: "left", backgroundColor:"grey"}} type="button" className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-envelope-o"></i>Assign Teachers</Button></Link>
                        <Link to={{pathname:`${this.state.class_id}/assignstudent`}}><Button style={{marginBottom:"4px", width:"70%", textAlign: "left", backgroundColor:"grey"}} type="button" className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-envelope-o"></i>Assign Students</Button></Link>
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
                                    <Link to={{pathname:`${this.state.class_id}/attendance`}}><i class="fa fa-arrow-circle-o-right fa-2x highlight-icon" aria-hidden="true"></i></Link>
                                    
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
                                   <Link to={{pathname:`${this.state.class_id}/grading`}}><i className="fa fa-arrow-circle-o-right fa-2x highlight-icon" aria-hidden="true" /></Link> 
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