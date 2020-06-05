import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import HeaderTeacher from '../Common/HeaderTeacher';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import axios from 'axios';


export default class TeacherClassStudent extends Component {
    constructor(props){
        super(props);
        this.state = {
            admin_name : "",
            teachers : [],
            students:[],
            teacher_id: this.props.match.params.id,
            class_id:this.props.match.params.cid,
            class:{"class_name":"","term":""}
     
        }
        this.genderFormat = this.genderFormat.bind(this);
        this.studentFormatter = this.studentFormatter.bind(this)
    }

    genderFormat(cell, row){
        if(cell == '0'){
            return 'Female'
        }
        else {
            return "Male"
        }
    }
    componentDidMount(){
        axios.get('http://localhost:5000/getclassbyid?id='+this.state.class_id)
        .then(res => {
            this.setState({class: res.data[0]})
        })
        .catch(err => console.log(err))

        axios.get('http://localhost:5000/studentdetailsallincage')
        .then(res => {
            console.log(res)
            this.setState({students: res.data})
        })
        .catch(err => console.log(err))
    }

    studentFormatter(cell,row){
        
        return '<a href="#/teacher/'+this.state.teacher_id+'/class/'+this.state.class_id+'/students/'+row['student_id']+'"><div className="user-dp"><img class="img-fluid rounded-circle" src="assets/images/profile-avatar.jpg" style="margin: 10px; text-align: center; height: 50px;"></img>'+cell+' '+row['last_name']+'</div></a>'

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
              <BreadcrumbItem >{this.state.class['class_name']}</BreadcrumbItem>
              <BreadcrumbItem active>Student</BreadcrumbItem>
              
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
                    {/* <Col sm={2} lg={1} md = {1} /> 
                        <Col>
                        
                        </Col>
                    <Col sm={2} lg={1} md = {1} />  */}
                    <Col xl={12} className="mb-30">
                    <Card style={{margin: "10px"}}>
                        <CardBody>
                        <BootstrapTable
                                data={this.state.students}
                                pagination
                                tableStyle={{height:"150px"}}
                                >
                                <TableHeaderColumn width='100' dataField="first_name" isKey={true} dataFormat={this.studentFormatter}>Student's Name</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataFormat={this.genderFormat} dataField='gender'>Gender</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='Age'>Age</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='student_id'>Student Id</TableHeaderColumn>
                                {/* <TableHeaderColumn width='100' dataField="Remove" dataFormat={this.buttonFormatter}>Remove</TableHeaderColumn> */}
                        </BootstrapTable>
                        </CardBody>
                    </Card>
                </Col>
                </Row>

             </div>
            </div>
            </div>
        );
    }
}