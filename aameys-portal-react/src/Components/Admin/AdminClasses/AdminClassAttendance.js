import React, { Component } from 'react';
import { Row, Col, Card,CardTitle, CardBody, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import DatePicker from 'react-datepicker';
import HeaderAdmin from '../../Common/HeaderAdmin';
import axios from 'axios';


const attend = [
    {
        "student": "Student 1",
        "gender": "F",
        "age":"7",
        "studentid":"109",
        "status":"false",
        "notes":"None"

    }
];
export default class AdminClassAttendance extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.studentFormatter = this.studentFormatter.bind(this);
        this.buttonFormatter = this.buttonFormatter.bind(this);
        this.notesFormatter = this.notesFormatter.bind(this);
        this.state = {
            simpleDate:  new Date(),
            attendance: [],
            class_id:this.props.match.params.cid,
            class_name:"",
            first_name:"",
            last_name:"",
            student_count:"",
            term:"",
            getdate:"",
        }
        this.getattendance = this.getattendance.bind(this);
        this.genderFormatter = this.genderFormatter.bind(this);
        
    }

    notesFormatter(cell,row){

    }
    buttonFormatter(cell, row){
        if(cell==="1")
        return '<i class="fa fa-check" aria-hidden="true"></i>';
        else
        return '<i class="fa fa-times"></i>';
      }
    studentFormatter(cell,row){
        
        return '<a href="#/admin/teacher/'+'info'+'"><div className="user-dp"><img class="img-fluid rounded-circle" src="assets/images/profile-avatar.jpg" style="margin: 10px; text-align: center; height: 50px;"></img>'+cell+'</div></a>'
      }
    
    handleChange(date) {
        this.setState({
            simpleDate: date

        });
        console.log(this.state.sampleDate+" jhgbjnm")
        this.getattendance(date)
    }

    getattendance(date){

        console.log(this.state.simpleDate.getDate()+"-"+this.state.simpleDate.getMonth()+"-"+this.state.simpleDate.getFullYear())
        
        let datestr = date.getFullYear()+'-'+(date.getMonth()<10?'0'+date.getMonth():date.getMonth())+'-'+(date.getDate()<10?'0'+date.getDate():date.getDate()); 
        axios.get('http://localhost:5000/attendanceByDateandClass?date='+datestr+'&class='+this.state.class_id)
        .then(res => {
            console.log(res)
            this.setState({
                attendance: res.data
            })
        })
        .catch(err => console.log(err))
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

    genderFormatter(cell, row){
        if (cell === '1'){
            return 'Male'
        }
        else {
            return 'Female'
        }
    }

    render(){
        return(
            <div>
            <HeaderAdmin />
                <div style={{backgroundColor:"orange",height:"580px", opacity:"0.65"}}> 
                <Row className="page-title">
          
                    <Col style={{margin:"10px"}} sm={6} lg={4} >
                        <Breadcrumb className="float-left float-sm-left">
                        <BreadcrumbItem>Administrator</BreadcrumbItem>
                        <BreadcrumbItem >Classes</BreadcrumbItem>
                        <BreadcrumbItem >{this.state.class_name}</BreadcrumbItem>
                        <BreadcrumbItem active>Attendance</BreadcrumbItem>
                        </Breadcrumb>
                    </Col>
                </Row>
                
                
                <Row>
                <Col lg={3} md={3} sm={3} ></Col>
                    <Col lg={6} md={6} sm={6} >
                        <div style={{width:"80%"}}>
                            <CardBody>
                                <div className="user-bg parallax" style={{backgroundColor:"white"}}>
                                    <div style={{height:"150px"}} className="user-info">
                                        <Row>
                                            <Col lg={4} md={4} className="align-self-center">
                                                <div className="user-dp"><img style={{ margin: "10px", textAlign:"center", height:"100px"}} className="img-fluid rounded-circle" src="/src/assets/images/profile-avatar.jpg" /></div>
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
                        <Button style={{marginBottom:"4px", width:"70%", textAlign: "left", backgroundColor:"grey"}} type="button" className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-id-card-o"></i>Download attendance data</Button>
                    </div>
                    </Col>
                </Row>
                <Row>
                <Col lg={4} md={4} sm={4} />
                    <Col lg={3} sm={3} md={3} >
                        <Card style={{marginRight:"30px"}} className="card-statistics mb-30">
                            <CardBody className="datepicker-form">
                                <DatePicker
                                    className="form-control"
                                    selected={this.state.simpleDate}
                                    onChange={this.handleChange}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row style={{height:"200px"}}>
                    <Col xl={12} className="mb-30">
                    <Card style={{margin: "10px"}}>
                        <CardBody>
                        <BootstrapTable
                                data={this.state.attendance}
                                pagination
                                tableStyle={{height:"150px"}}
                                >
                                <TableHeaderColumn width='100' dataField="student" isKey={true} dataFormat={this.studentFormatter}>Student's Name</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='gender' dataFormat={this.genderFormatter}>Gender</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='age'>Age</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='studentid'>Student ID</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField="status" dataFormat={this.buttonFormatter}>Status</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField="notes">Notes</TableHeaderColumn>

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