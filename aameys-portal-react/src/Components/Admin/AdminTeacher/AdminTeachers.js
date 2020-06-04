import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button, BreadcrumbItem, Breadcrumb} from 'reactstrap';
import { Link } from 'react-router-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import './Datatables.css';
import Header from '../../Common/header';
import axios from 'axios';


const teachers =[ {
"Teacher": "Teacher 1",
"id":"10",
"Email":"abc@gmail.com",
"Classes":"2",
"Students":"2",
}];

var columns = [];
export default class AdminTeacher extends Component {
    constructor(props){
        super(props);
        this.state = {
            teacher:[],
            student_id:"10",
            admin_id:this.props.match.params.aid,
            admin:[{"admin_id":"","first_name":"","last_name":"","email":"","img_add":"","teacher_count":"","student_count":"", "class_count":""}]
        }
    this.buttonFormatter = this.buttonFormatter.bind(this);
    this.teacherFormatter = this.teacherFormatter.bind(this);
    }

    
    componentDidMount(){
        console.log(teachers)
        columns = Object.keys(teachers[0])
        columns.map((value, index) => (console.log(value)))


        console.log(teachers)
        
        axios.get('http://localhost:5000/adminById?id='+this.state.admin_id)
        .then(res => {
            this.setState({admin: res.data})
        })
        .catch(err => console.log(err))

        axios.get('http://localhost:5000/teachers').
        then( res =>
        {
            console.log(res)
            this.setState({teacher: res.data})
        }
        )
        .catch(err => console.log(err))
    }

     buttonFormatter(cell, row){
        return '<Button style="background:red"><i style={{fontSize:"100%"}} className="fa fa-times"></i></Button>';
      }
      teacherFormatter(cell,row){
        
        return '<a href="#/admin/'+this.state.admin_id+'/teacher/'+row['teacher_id']+'"><div className="user-dp"><img class="img-fluid rounded-circle" src="assets/images/profile-avatar.jpg" style="margin: 10px; text-align: center; height: 50px;"></img>'+cell+' '+row['last_name']+'</div></a>'
      }
    //   <img class="img-fluid rounded-circle" src="assets/images/profile-avatar.jpg" style="margin: 10px; text-align: center; height: 100px;"></img>
    render(){
        return(
            <div>
            <Header />

                <div style={{backgroundColor:"orange",height:"600px", opacity:"0.65"}}> 
                
                <Row className="page-title">
          
                    <Col style={{margin:"10px"}} sm={6} lg={4} >
                        <Breadcrumb className="float-left float-sm-left">
                        <BreadcrumbItem>Administrator</BreadcrumbItem>
                        <BreadcrumbItem active>Teachers</BreadcrumbItem>
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
                        <Link to={{pathname:"addteach"}}><Button style={{marginBottom:"4px", width:"70%", textAlign: "left", backgroundColor:"grey"}} type="button" className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-id-card-o"></i>Add Teacher</Button></Link>
                    </div>
                    </Col>
                </Row>
                <Row style={{height:"200px"}}>
                    {/* <Col sm={2} lg={1} md = {1} /> 
                        <Col>
                        
                        </Col>
                    <Col sm={2} lg={1} md = {1} />  */}
                    <Col xl={12} className="mb-30">
                    <Card style={{margin: "10px"}}>
                        <CardBody>
                        <BootstrapTable
                                data={this.state.teacher}
                                pagination
                                tableStyle={{height:"150px"}}
                                >
                                <TableHeaderColumn width='100' dataField="first_name" isKey={true} dataFormat={this.teacherFormatter}>Teacher's Name</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='email'>Email</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='class_num'>Classes</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='student_num'>Students</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField="Remove" dataFormat={this.buttonFormatter}>Remove</TableHeaderColumn>
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
