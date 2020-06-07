import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Modal, ModalHeader, ModalFooter, ModalBody, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import validators from '../../../validators';
import HeaderAdmin from '../../Common/HeaderAdmin'
import axios from 'axios';



export default class AdminTeacherAddTeacher extends Component {
    constructor(props){
        console.log("adminaddteacher");
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            teacher_id:"",
            teacher_name_first:"",
            teacher_name_last:"",
            teacher_mail:"",
            breadcrumb:"Add teacher",
            modal: false
        }
        this.saveTeacher = this.saveTeacher.bind(this);
        this.toggle = this.toggle.bind(this);
        this.validators = validators;
        this.updateValidators = this.updateValidators.bind(this);

    }

    toggle(){
        this.setState(
          {
            modal: !this.state.modal
          }
        )
      }


  updateValidators(fieldName, value) {
    this.validators[fieldName].errors = [];
    this.validators[fieldName].state = value;
    this.validators[fieldName].valid = true;
    this.validators[fieldName].rules.forEach((rule) => {
      if (rule.test instanceof RegExp) {
        if (!rule.test.test(value)) {
          this.validators[fieldName].errors.push(rule.message);
          this.validators[fieldName].valid = false;
        }
      } else if (typeof rule.test === 'function') {
        if (!rule.test(value)) {
          this.validators[fieldName].errors.push(rule.message);
          this.validators[fieldName].valid = false;
        }
      }
    });
}

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
        this.updateValidators([e.target.name], e.target.value);
    }

    saveTeacher(){
        let isValid = false;
        if(this.validators['teacher_mail'].valid  ){
            isValid = true
            console.log(this.state)
            console.log('oiuhgvbn')
            console.log(this.validators)
        }
        else{
            isValid = false
            console.log(this.state)
            console.log('not valda')
            console.log(this.validators)
        }

        if(this.validators['teacher_name_first'].valid){
            isValid = true
        }
        else{
            isValid = false
        }
        if(this.validators['teacher_name_last'].valid)
        {
            isValid = true
        }
        else{
            isValid = false
        }
        if(isValid){
            this.toggle()
        let body = {
            tfname: this.state.teacher_name_first,
            tlname: this.state.teacher_name_last,
            tmail: this.state.teacher_mail
        }
        axios(
            {
              method: 'post',
              url: 'http://localhost:5000/addTeacherByAdmin',
              data: body,
              headers: {'Content-Type': 'application/json' }
            }
          )
          .then(
            res =>  {console.log(res)
            this.setState({
            teacher_id:"",
            teacher_name_first:"",
            teacher_name_last:"",
            teacher_mail:"",
            breadcrumb:"Add teacher",
            modal: false
            })}
          )
          .catch(
            err => {console.log(err)
                this.setState({
                teacher_id:"",
                teacher_name_first:"",
                teacher_name_last:"",
                teacher_mail:"",
                breadcrumb:"Add teacher",
                modal: false
                })}
          )
        console.log(body)
    }
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
                        <BreadcrumbItem>Teachers</BreadcrumbItem>
                        <BreadcrumbItem active>{this.state.breadcrumb}</BreadcrumbItem>
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
                        <Button onClick={this.saveTeacher} style={{marginBottom:"4px", width:"60%", textAlign: "left", backgroundColor:"grey"}} type="button" className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-id-card-o"></i>Save</Button>
                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                    <ModalHeader toggle={this.toggle}>Modal title
                                 </ModalHeader>
                                    <ModalBody>
                                        <p>Please wait. Your request is getting processed.</p>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={this.toggle}>OK</Button>
                                        
                                    </ModalFooter>
                                </Modal>
                    </div>
                    </Col>
                </Row>
                
                
                <Row style={{height:"200px"}}>
                <Col lg={3} md={3} sm={3}></Col>
                <Col lg={5} md={5} sm={5}>
                    <form lg={5} onSubmit={this.handleSubmit}>
                        <Row className="form-group">
                            <label htmlFor="teacher_name_first" className="col-sm-2 col-form-label" ><span style={{color:"black", fontSize:"150%", marginRight:"3px"}}>First</span></label>
                            <Col sm={10} >
                                <input type="text" className="form-control" id="teacher_name_first" placeholder="First" onChange={this.onChange} name="teacher_name_first" value={this.state.teacher_name_first}  />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <label htmlFor="teacher_name_last" className="col-sm-2 col-form-label"><span style={{color:"black", fontSize:"150%", marginRight:"3px"}}>Last</span></label>
                            <Col sm={10} >
                                <input type="text" className="form-control" id="teacher_name_last" placeholder="Last" onChange={this.onChange} name="teacher_name_last" value={this.state.teacher_name_last} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <label htmlFor="teacher_mail" className="col-sm-2 col-form-label"><span style={{color:"black", fontSize:"150%", marginRight:"3px"}}>Email</span></label>
                            <Col sm={10} >
                                <input type="email" className="form-control" id="teacher_mail" placeholder="Email" onChange={this.onChange} name="teacher_mail" value={this.state.teacher_mail} />
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