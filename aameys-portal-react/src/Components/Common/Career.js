import React, { Component } from 'react';
import { Row, Col, Card, CardBody, CardTitle, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import HeaderCommon from '../Common/header';
import axios from 'axios';


export default class Career extends Component{
    constructor(props){
        super(props);
        this.state = {
            texttodisplay:""

        }
    }

    render(){
        return (
            <div>
                <HeaderCommon />
                <div style={{backgroundColor:"orange",height:"550px",opacity:"0.65"}} className="mt-10">
                <Row>
                <Col xl={8} className="mb-30 mt-10 ml-10">
                        <Card  className="h-100">

                  
                            <CardBody>
                                <div className="d-block d-md-flexx justify-content-between">
                                    <div className="d-block">
                                        <CardTitle>Primary and Secondary School Home work Support </CardTitle>
                                    </div>
                                    <div className="d-flex ">
                                        <div className="clearfix mr-30">
                                            <h4 >Melbourne</h4>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="chart-wrapper" style={{height: 350}}>
                                <p>hi kcdinfm c nujsmd xakjx , jsncmx cac svcecz </p>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col >
                    <div style={{margin:"10px"}}>
                        <Link to={{pathname:"editinfo"}}><Button style={{marginBottom:"40px", height:"100px", borderRadius:"10px",width:"70%", textAlign: "center", backgroundColor:"grey", fontSize:"30px"}} type="button" className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-id-card-o"></i>Apply</Button></Link>
                        <p style={{fontSize:"20px", marginBottom:"40px"}}>Contact details</p>
                        <Row>
                        <Col sm={1} lg={1} md={1}><i className="fa fa-id-card-o"></i></Col><Col><p  style={{fontSize:"20px",marginBottom:"40px"}}>harmony@aameys.com.au</p></Col>
                        </Row>
                        <Row>
                        <Col sm={1} lg={1} md={1}><i className="fa fa-id-card-o"></i></Col><Col><p style={{fontSize:"20px",marginBottom:"40px"}}>0390421604</p></Col>
                        </Row>
                    </div>
                    </Col>
                    </Row>
                </div> 
                

            </div>
        );
    }
}