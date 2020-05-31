import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import './Datatables.css';

const teachers =[ {
"Teacher": "Teacher 1",
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
            student_id:"10"
        }
    this.buttonFormatter = this.buttonFormatter.bind(this);
    this.teacherFormatter = this.teacherFormatter.bind(this);
    }

    
    componentDidMount(){
        console.log(teachers)
        columns = Object.keys(teachers[0])
        columns.map((value, index) => (console.log(value)))
        console.log(teachers)
        this.setState({teacher: teachers});
    }

     buttonFormatter(cell, row){
        return '<Button style="background:red"><i style={{fontSize:"100%"}} className="fa fa-times"></i></Button>';
      }
      teacherFormatter(cell,row){
          console.log('sdax')
        console.log(cell)
        var str = '<Link>';
        var str1 = '</Link>'
        
        return '<a href="#/student/schedule/'+this.state.student_id+'"><div className="user-dp"><img class="img-fluid rounded-circle" src="assets/images/profile-avatar.jpg" style="margin: 10px; text-align: center; height: 50px;"></img>'+cell+'</div></a>'
      }
    //   <img class="img-fluid rounded-circle" src="assets/images/profile-avatar.jpg" style="margin: 10px; text-align: center; height: 100px;"></img>
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
                                                
                                                    <h2 style={{fontSize:"18px", fontWeight:"bolder"}} className="name">Administrator Info</h2>
                                                    <p>Name: </p>
                                                    <p>Teacher: </p>
                                                    <p>Classes: </p>
                                                    <p>Students: </p>
                                                    <p>Term: </p>
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
                        <Button style={{marginBottom:"4px", width:"70%", textAlign: "left", backgroundColor:"grey"}} type="button" className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-id-card-o"></i>Add Teacher</Button>
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
                        {/* <BootstrapTable data={ this.state.teacher }>
                        ( <TableHeaderColumn width='100' dataField= "Teacher\'s Name"  isKey={true}>Teacher's Name</TableHeaderColumn>)
                            { columns.map((value, index) => 
                                ( <TableHeaderColumn width='100' dataField= {value} >{ value }</TableHeaderColumn>)
                            ) }
                            <TableHeaderColumn width='100' dataField="Remove" dataFormat={this.buttonFormatter}>Remove</TableHeaderColumn>
                        </BootstrapTable> */}
                        <BootstrapTable
                                data={this.state.teacher}
                                pagination
                                tableStyle={{height:"150px"}}
                                >
                                <TableHeaderColumn width='100' dataField="Teacher" isKey={true} dataFormat={this.teacherFormatter}>Teacher's Name</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='Email'>Subject</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='Classes'>1</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='Students'>Messages</TableHeaderColumn>
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
