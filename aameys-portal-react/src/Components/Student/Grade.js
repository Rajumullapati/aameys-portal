import React, { Component } from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem, Card, CardBody } from 'reactstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class Grade extends Component {
    constructor(props){
        super(props);
        this.state{
            assignments = []
        };

    }

    render(){
        return(
            
        <div style={{backgroundColor:"orange", marginTop:"150px",height:"400px", opacity:"0.65"}}>
            <Row style={{marginBottom:"25px"}}>
                <Col sm={2} lg={5} md = {5} />
                <Col sm={4} lg={4} md = {4}>
                    <Row style={{height:"10px", alignSelf:"center", marginBottom:"100px", marginLeft:"1px"}} className="user-dp"><img style={{height:"100px"}} className="img-fluid rounded-circle" src="assets/images/profile-avatar.jpg" /></Row>
                    <Row style={{ fontSize: "15px", fontWeight:"bold", color:"black"}} className="bold">Student ID {this.state.student_id}</Row>
                </Col>
            </Row>
        </div>
        );
    }
}