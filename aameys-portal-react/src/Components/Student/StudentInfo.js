import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import './Datatables.css';


export default class StudentInfo extends Component {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            student_id:"",
            student_name_first:"teacher 1",
            student_name_last:"k",
            student_mail:"abc@gmail.com",
            breadcrumb:"teacher 1"
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render(){
        return(
            <div>
                
                
                <div style={{backgroundColor:"orange",height:"550px",opacity:"0.65"}}> 
                <Row className="page-title">
          
                    <Col style={{margin:"10px"}} sm={6} lg={4} >
                        <Breadcrumb className="float-left float-sm-left">
                        <BreadcrumbItem><a href="#">Student</a></BreadcrumbItem>
                        <BreadcrumbItem active>My Account</BreadcrumbItem>
                        </Breadcrumb>
                    </Col>
                </Row>

                <Row>
                <Col lg={5} md={5} sm={5} className="mb-30"></Col>
                    <Col lg={4} md={4} sm={4} className="mb-30">
                        <div style={{width:"80%"}}>
                                <div className="user-bg parallax">
                                    <div style={{height:"150px"}} className="user-info">
                                        <Row>
                                            <Col  className=" float-right align-self-center">
                                                <div className="user-dp"><img style={{ margin: "10px", textAlign:"center", height:"100px"}} className="img-fluid rounded-circle" src="assets/images/profile-avatar.jpg" /></div>
                                                <div className="form-group upload-file">
                                                <Button style={{textAlign:"center", marginLeft:"10px"}}><label htmlFor="pfile">
                                                    Edit image</label></Button>
                                                    <input type="file" hidden className="form-control-file" id="pfile" placeholder="Select Multiple Tags" />
                                                </div>
                                                
                                            </Col>
                                        </Row>
                                        
                                    </div>
                                </div>
                        </div>
                    </Col>
                    <Col lg={3} md={3} sm={3}>
                    <div style={{margin:"10px"}}>
                        <Button style={{marginBottom:"4px", width:"60%", textAlign: "left", backgroundColor:"grey"}} type="button" className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-id-card-o"></i>Save Changes</Button>
                        <Button style={{marginBottom:"4px", width:"60%", textAlign: "left", backgroundColor:"grey"}} type="button" className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-id-card-o"></i>Change Email</Button>
                        <Button style={{marginBottom:"4px", width:"60%", textAlign: "left", backgroundColor:"grey"}} type="button" className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-id-card-o"></i>Change password</Button>
                        <Button style={{marginBottom:"4px", width:"60%", textAlign: "left", backgroundColor:"grey"}} type="button" className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-id-card-o"></i>Sign out</Button>
                        <Button style={{marginBottom:"4px", width:"60%", textAlign: "left", backgroundColor:"grey"}} type="button" className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-id-card-o"></i>Delete Account</Button>
                        <Button style={{marginBottom:"4px", width:"60%", textAlign: "left", backgroundColor:"grey"}} type="button" className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-id-card-o"></i>Return</Button>

                    </div>
                    </Col>
                </Row>
                
                
                <Row style={{height:"200px"}}>
                <Col lg={3} md={3} sm={3}></Col>
                <Col lg={5} md={5} sm={5}>
                    <form lg={5} onSubmit={this.handleSubmit}>
                        <Row className="form-group">
                            <label htmlFor="student_name_first" className="col-sm-2 col-form-label" ><span style={{color:"black", fontSize:"150%", marginRight:"3px"}}>First</span></label>
                            <Col sm={10} >
                                <input type="text" className="form-control" id="student_name_first" onChange={this.onChange} name="student_name_first" value={this.state.student_name_first}  placeholder={this.state.student_name_first}/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <label htmlFor="student_name_last" className="col-sm-2 col-form-label"><span style={{color:"black", fontSize:"150%", marginRight:"3px"}}>Last</span></label>
                            <Col sm={10} >
                                <input type="text" className="form-control" id="student_name_last" placeholder="Last" onChange={this.onChange} name="student_name_last" value={this.state.student_name_last} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <label htmlFor="student_mail" className="col-sm-2 col-form-label"><span style={{color:"black", fontSize:"150%", marginRight:"3px"}}>Email</span></label>
                            <Col sm={10} >
                                <input type="email" className="form-control" id="student_mail" placeholder="Email" onChange={this.onChange} name="student_mail" value={this.state.student_mail} />
                            </Col>
                        </Row>
                        
                    </form>
                    
                </Col>
                </Row>
             </div>
            </div>
        );
    }
}