import React, { Component } from 'react';
import { Row, Col, Card,CardTitle, CardBody, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import DatePicker from 'react-datepicker';



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
            attendance: []
        }
    }

    notesFormatter(cell,row){

    }
    buttonFormatter(cell, row){
        if(cell==="false")
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
    }
    componentDidMount(){
        this.setState(
            {
                attendance: attend
            }
        );
    }

    render(){
        return(
            <div>
                <div style={{backgroundColor:"orange",height:"580px", opacity:"0.65"}}> 
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
                                                    <p>Class Name: </p>
                                                    <p>Term: </p>
                                                    <p>Teacher: </p>
                                                    <p>Students: </p>
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
                                <TableHeaderColumn width='100' dataField='gender'>Gender</TableHeaderColumn>
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