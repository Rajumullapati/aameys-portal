import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import './Datatables.css';
import Header from '../../Common/header';
import axios from 'axios';

const teachers =[ {
    "class": "English",
    "updated":"01-10-2010",
    "Students":"2",
    }];

var columns = [];
var editInfo = "";
var assignClass = "";
export default class AdminTeacherInfo extends Component{

    constructor(props){
        super(props);
        this.state = {
            teacher_id:this.props.match.params.id,
            teacher:{"teacher_id": "", "first_name": "", "last_name": "", "email": "", "img_add": "", "student_count":"","class_count":"", "classdetail": [{"class_name": "", "student_count": "", "updated": ""}]}
        }
    }


    componentDidMount(){
        console.log(teachers)
        columns = Object.keys(teachers[0])
        columns.map((value, index) => (console.log(value)))
        console.log(teachers)
        // this.setState({teacher: teachers});
        editInfo = this.state.teacher_id+"/editinfo";
        assignClass = this.state.teacher_id+"/assignclass";

        axios.get('http://localhost:5000/teachersbyid?id='+this.state.teacher_id)
        .then(res => {
            console.log(res)
            this.setState({teacher: res.data[0]})
            console.log(this.state.teacher['first_name'])
            console.log(this.state.teacher['classdetail'])
    })
        .catch(err => console.log(err))
    }


    render(){
        return(
            <div>
            <Header></Header>
                 <div style={{backgroundColor:"orange", marginTop:"150px",height:"500px", opacity:"0.65"}}> 
                 <Row className="page-title">
          
          <Col style={{margin:"10px"}} sm={6} lg={4} >
              <Breadcrumb className="float-left float-sm-left">
              <BreadcrumbItem>Administrator</BreadcrumbItem>
              <BreadcrumbItem>Teachers</BreadcrumbItem>
              <BreadcrumbItem active>{this.state.teacher['first_name']} {this.state.teacher['last_name']}</BreadcrumbItem>

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
                                                    <p>Name: <span style={{fontSize:"100%", fontWeight:"bolder", marginRight:"20%"}} className="float-right">{ this.state.teacher['first_name']} { this.state.teacher['last_name']    } </span></p>
                                                    {/* <p>Teacher: <span style={{fontSize:"100%", fontWeight:"bolder", marginRight:"50%"}} className="float-right">{ this.state.teacher['teacher_count']     } </span> </p> */}
                                                    <p>Classes: <span style={{fontSize:"100%", fontWeight:"bolder", marginRight:"50%"}} className="float-right">{ this.state.teacher['class_count'] } </span> </p>
                                                    <p>Students: <span style={{fontSize:"100%", fontWeight:"bolder", marginRight:"50%"}} className="float-right">{ this.state.teacher['student_count']     } </span> </p>
                                                  
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
                    <Link to={{pathname: editInfo}}><Button style={{marginBottom:"4px", width:"70%", textAlign: "left", backgroundColor:"grey"}} type="button" className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-id-card-o"></i>Edit teacher info</Button></Link>
                    <Link to={{pathname: assignClass}}><Button style={{marginBottom:"4px", width:"70%", textAlign: "left", backgroundColor:"grey"}} type="button" className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-envelope-o"></i>Assign classes</Button></Link>
                    </div>
                    </Col>
                </Row>
                <Row style={{height:"200px"}}>
                    <Col xl={12} className="mb-30">
                    <Card style={{margin: "10px"}}>
                        <CardBody>
                  
                        <BootstrapTable
                                data={this.state.teacher.classdetail}
                                pagination
                                tableStyle={{height:"150px"}}
                                >
                                <TableHeaderColumn width='100' dataField="class_name" isKey={true}>Class Name</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='student_count'>Students</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField="updated">Updated</TableHeaderColumn>
                        </BootstrapTable>
                        </CardBody>
                    </Card>
                </Col>
                </Row>
                
             </div>
            </div>
        );
    }
}

    