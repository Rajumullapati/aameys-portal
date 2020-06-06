import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import HeaderAdmin from '../../Common/HeaderAdmin'


export default class AdminClassAddClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            class:"",
            term:"",
            school:"",
            breadcrumb: ""
        }
        this.onChange = this.onChange.bind(this);

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }


    componentDidMount(){

    }

    render(){
        return(
            <div>

                 <HeaderAdmin />
<div style={{backgroundColor:"orange",height:"550px",opacity:"0.65"}}> 
                <Row className="page-title">
          
                    <Col style={{margin:"10px"}} sm={6} lg={4} >
                        <Breadcrumb className="float-left float-sm-left">
                        <BreadcrumbItem>Administrator</BreadcrumbItem>
                        <BreadcrumbItem>Classes</BreadcrumbItem>
                        <BreadcrumbItem active>Add class</BreadcrumbItem>
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
                        <Button style={{marginBottom:"4px", width:"60%", textAlign: "left", backgroundColor:"grey"}} type="button" className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-id-card-o"></i>Save</Button>
                    </div>
                    </Col>
                </Row>
                
                
                <Row style={{height:"200px"}}>
                <Col lg={3} md={3} sm={3}></Col>
                <Col lg={5} md={5} sm={5}>
                    <form lg={7} onSubmit={this.handleSubmit}>
                        <Row className="form-group">
                        <Col lg={2} md={2} sm={2}>
                            <label htmlFor="term" className="col-sm-2 col-form-label" ><span style={{color:"black", fontSize:"100%", marginRight:"3px"}}>Term</span></label>
                        </Col>
                            <Col lg={10} md={10} sm={10}>
                                <input type="text" onChange={this.onChange} className="form-control" id="term" placeholder="Term" onChange={this.onChange} name="term" value={this.state.term}  />
                            </Col>
                        </Row>
                        <Row className="form-group">
                        <Col lg={2} md={2} sm={2}>
                            <label htmlFor="class" className="col-sm-2 col-form-label"><span style={{color:"black", fontSize:"100%", marginRight:"3px"}}>Class Name</span></label>
                            </Col>
                            <Col lg={10} md={10} sm={10} >
                                <input type="text" onChange={this.onChange} className="form-control" id="class" placeholder="Class Name" onChange={this.onChange} name="class" value={this.state.class} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                        <Col lg={2} md={2} sm={2} style={{marginRight:"0px"}}>
                            <label htmlFor="school" className="col-sm-2 col-form-label"><span style={{color:"black", fontSize:"100%", marginRight:"3px"}}>AAMEYS</span></label>
                            </Col>
                            <Col lg={10} md={10} sm={10} >
                                <input type="text" onChange={this.onChange} className="form-control" id="school" placeholder="School" onChange={this.onChange} name="school" value={this.state.school} />
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