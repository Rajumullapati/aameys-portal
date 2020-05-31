import React, { Component } from 'react';
import { Row, Col, Card,CardTitle, CardBody, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const grades = [
    {
        "name":"student 1",
        "id":"001",
        "1":"10",
        "2":"10",
        "3":"10",
        "4":"10",
        "5":"10",
        "6":"10",
        "7":"10",
        "8":"10",
        "9":"10",
        "10":"10",
        "count":"10",
        "perc":"100%",
        "notes":""
    }
]

var columns = [];
export default class AdminClassGrade extends Component {
    constructor(props){
        super(props);
        this.state = {
            grade:[]
        }
    }

    componentDidMount(){
        columns = Object.keys(grades[0])
        columns.map((value, index) => (console.log(value)))
        this.setState({grade:grades})
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
                        <Button style={{marginBottom:"4px", width:"70%", textAlign: "left", backgroundColor:"grey"}} type="button" className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-id-card-o"></i>Download grades data</Button>
                    </div>
                    </Col>
                </Row>
                
                <Row style={{height:"200px"}}>
                    <Col xl={12} className="mb-30">
                    <Card style={{margin: "10px"}}>
                        <CardBody>
                        <BootstrapTable
                                data={this.state.grade}
                                tableStyle={{height:"150px"}}
                                pagination
                                >
                                <TableHeaderColumn width='100' dataField='name' isKey={true}>Name</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='id'>Student ID</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='1'>1</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='2'>2</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='3'>3</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='4'>4</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='5'>5</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='6'>6</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='7'>7</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='8'>8</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='9'>9</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='10'>10</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='count'>#</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='notes'>Notes</TableHeaderColumn>
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