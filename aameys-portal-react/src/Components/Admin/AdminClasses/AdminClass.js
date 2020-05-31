import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const classdata = [
    {
        "class": "English",
        "teacher": "Teacher 1",
        "student": "3",

    }
]

export default class AdminClass extends Component {
    constructor(props){
        super(props);
        this.buttonFormatter = this.buttonFormatter.bind(this);
        this.state = {
            classes: []
        }
    }

    componentDidMount(){
        this.setState({
            classes: classdata
        })
    }

    classFormatter(cell,row){
      return '<a href="#/admin/class/'+cell+'">'+cell+'</div></a>'
    }

    buttonFormatter(cell, row){
        return '<Button style="background:red"><i style={{fontSize:"100%"}} className="fa fa-times"></i></Button>';
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
                        <Button style={{marginBottom:"4px", width:"70%", textAlign: "left", backgroundColor:"grey"}} type="button" className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-id-card-o"></i>Add Class</Button>
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
                                data={this.state.classes}
                                pagination
                                tableStyle={{height:"150px"}}
                                >
                                <TableHeaderColumn width='100' dataField="class" isKey={true} dataFormat={this.classFormatter}>Class Name</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='teacher'>Teacher</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='student'>Students</TableHeaderColumn>
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