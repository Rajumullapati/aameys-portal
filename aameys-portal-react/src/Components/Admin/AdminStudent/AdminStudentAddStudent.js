import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import HeaderAdmin from '../../Common/HeaderAdmin'

export default class AdminStudentAddStudent extends Component {
    constructor(props){
        super(props);
        this.state = {
            class:"",
            fname:"",
            lname:"",
            mail:"",
            phone:"",
            id:"",
            pfname:"",
            plname:"",
            pmail:"",
            pphone:""
        }
        this.save = this.save.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    save(){
        let body = {
            student_first_name: this.state.fname,
            student_last_name: this.state.lname,
            student_mail: this.state.mail,
            class: this.state.class,
            phone: this.state.phone,
            id: this.state.id,
            parent_first_name: this.state.pfname,
            parent_last_name: this.state.plname,
            parent_mail: this.state.pmail,
            parent_phone: this.state.pphone
        }

        console.log(body)
    }

    render(){
        return(
            <div>
            <HeaderAdmin />
            <div style={{backgroundColor:"orange",height:"500px",opacity:"0.65"}}> 
                <Row className="page-title">
          
                    <Col style={{marginTop:"10px", marginLeft:"10px"}} sm={6} lg={4} >
                        <Breadcrumb className="float-left float-sm-left">
                        <BreadcrumbItem><a href="#">Administrator</a></BreadcrumbItem>
                        <BreadcrumbItem><a href="#">Students</a></BreadcrumbItem>
                        <BreadcrumbItem active>Add Student</BreadcrumbItem>
                        </Breadcrumb>
                    </Col>
                <Col lg={1} md={1} sm={1} className="mb-30"></Col>
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
                    <Col lg={2} md={2} sm={2}>
                    <div style={{margin:"10px"}}>
                        <Button onClick={this.save} style={{marginBottom:"4px", width:"60%", textAlign: "left", backgroundColor:"grey"}} type="button" className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-id-card-o"></i>Save</Button>
                    </div>
                    </Col>
                </Row>
                <Row style={{height:"200px"}}>
                {/* <Col lg={3} md={3} sm={3}></Col> */}
                <Col lg={10} md={8} sm={8} style={{marginLeft:"30px"}}>
                    <form  onSubmit={this.handleSubmit}>
                        <Row>
                        <Col lg={6}>
                        <Row className="form-group">
                        <Col lg={3} md={3} sm={3}>
                            <label htmlFor="class" className="" ><span style={{color:"black", fontSize:"100%", marginRight:"3px"}}>Add to class</span></label>
                        </Col>
                            <Col lg={9} md={9} sm={9}>
                                <input type="text" style={{height:"10px", borderRadius:"30px"}} className="form-control" id="class" placeholder="Class Name" onChange={this.onChange} name="class" value={this.state.class}  />
                            </Col>
                        </Row>

                        <Row className="form-group">
                        <Col lg={3} md={3} sm={3} style={{marginRight:"0px"}}>
                            <label htmlFor="fname" className=""><span style={{color:"black", fontSize:"100%", marginRight:"3px"}}>First Name</span></label>
                            </Col>
                            <Col lg={9} md={9} sm={9} >
                                <input type="text" style={{height:"10px", borderRadius:"30px"}} className="form-control" id="fname" placeholder="fname" onChange={this.onChange} name="fname" value={this.state.fname} />
                            </Col>
                        </Row>

                        <Row className="form-group">
                        <Col lg={3} md={3} sm={3}>
                            <label htmlFor="lname" ><span style={{color:"black", fontSize:"100%", marginRight:"3px"}}>Last Name</span></label>
                            </Col>
                            <Col lg={9} md={9} sm={9} >
                                <input type="text" style={{height:"10px", borderRadius:"30px"}} className="form-control" id="lname" placeholder="Last Name" onChange={this.onChange} name="lname" value={this.state.lname} />
                            </Col>
                        </Row>
                        
                        <Row className="form-group">
                        <Col lg={3} md={3} sm={3}>
                            <label htmlFor="mail" ><span style={{color:"black", fontSize:"100%", marginRight:"3px"}}>Email</span></label>
                            </Col>
                            <Col lg={9} md={9} sm={9} >
                                <input type="Email" style={{height:"10px", borderRadius:"30px"}} className="form-control" id="mail" placeholder="Email" onChange={this.onChange} name="mail" value={this.state.mail} />
                            </Col>
                        </Row>

                        <Row className="form-group">
                        <Col lg={3} md={3} sm={3}>
                            <label htmlFor="phone" ><span style={{color:"black", fontSize:"100%", marginRight:"3px"}}>Phone</span></label>
                            </Col>
                            <Col lg={9} md={9} sm={9} >
                                <input type="text" style={{height:"10px", borderRadius:"30px"}} className="form-control" id="phone" placeholder="Phone" onChange={this.onChange} name="phone" value={this.state.phone} />
                            </Col>
                        </Row>
                        
                        <Row className="form-group">
                        <Col lg={3} md={3} sm={3}>
                            <label htmlFor="id" ><span style={{color:"black", fontSize:"100%", marginRight:"3px"}}>Student ID</span></label>
                            </Col>
                            <Col lg={9} md={9} sm={9} >
                                <input type="text" style={{height:"10px", borderRadius:"30px"}} className="form-control" id="phone" placeholder="Student ID" onChange={this.onChange} name="id" value={this.state.id} />
                            </Col>
                        </Row>
                        </Col>
                        <Col lg={6} style={{marginRight:"0px"}}>
                        <Row className="form-group">
                        <Col lg={3} md={3} sm={3}>
                            <label htmlFor="pfname" ><span style={{color:"black", fontSize:"100%", marginRight:"3px"}}>Parent First Name</span></label>
                            </Col>
                            <Col lg={9} md={9} sm={9} >
                                <input type="text" style={{height:"10px", borderRadius:"30px"}} className="form-control" id="pfname" placeholder="Parent First Name" onChange={this.onChange} name="pfname" value={this.state.pfname} />
                            </Col>
                        </Row>

                        <Row className="form-group">
                        <Col lg={3} md={3} sm={3}>
                            <label htmlFor="plname" ><span style={{color:"black", fontSize:"100%", marginRight:"3px"}}>Parent Last Name</span></label>
                            </Col>
                            <Col lg={9} md={9} sm={9} >
                                <input type="text" style={{height:"10px", borderRadius:"30px"}} className="form-control" id="plname" placeholder="Parent Last Name" onChange={this.onChange} name="plname" value={this.state.plname} />
                            </Col>
                        </Row>

                        <Row className="form-group">
                        <Col lg={3} md={3} sm={3}>
                            <label htmlFor="pmail" ><span style={{color:"black", fontSize:"100%", marginRight:"3px"}}>Parent Mail</span></label>
                            </Col>
                            <Col lg={9} md={9} sm={9} >
                                <input type="text" style={{height:"10px", borderRadius:"30px"}} className="form-control" id="pmail" placeholder="Parent Mail" onChange={this.onChange} name="pmail" value={this.state.pmail} />
                            </Col>
                        </Row>

                        <Row className="form-group">
                        <Col lg={3} md={3} sm={3}>
                            <label htmlFor="pphone" ><span style={{color:"black", fontSize:"100%", marginRight:"3px"}}>Parent Phone</span></label>
                            </Col>
                            <Col lg={9} md={9} sm={9} >
                                <input type="text" style={{height:"10px", borderRadius:"30px"}} className="form-control" id="pphone" placeholder="Parent Phone" onChange={this.onChange} name="pphone" value={this.state.pphone} />
                            </Col>
                        </Row>
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