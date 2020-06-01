import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import './Datatables.css';


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
            teacher_id:"10"
        }
    }


    componentDidMount(){
        console.log(teachers)
        columns = Object.keys(teachers[0])
        columns.map((value, index) => (console.log(value)))
        console.log(teachers)
        this.setState({teacher: teachers});
        editInfo = this.state.teacher_id+"/editinfo";
        assignClass = this.state.teacher_id+"/assignclass";


    }


    render(){
        return(
            <div>
                 <div style={{backgroundColor:"orange", marginTop:"150px",height:"500px", opacity:"0.65"}}> 
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
                                                
                                                    <h2 style={{fontSize:"18px", fontWeight:"bolder"}} className="name">Teacher Info</h2>
                                                    <p>Name: </p>
                                                    <p>School term: </p>
                                                    <p>Classes: </p>
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
                                data={this.state.teacher}
                                pagination
                                tableStyle={{height:"150px"}}
                                >
                                <TableHeaderColumn width='100' dataField="class" isKey={true}>Class Name</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='Students'>Students</TableHeaderColumn>
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

    