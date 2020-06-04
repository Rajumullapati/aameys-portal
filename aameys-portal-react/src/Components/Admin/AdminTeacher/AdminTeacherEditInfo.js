import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import './Datatables.css';
import axios from 'axios';
import Header from '../../Common/header';


export default class AdminTeacherEditInfo extends Component {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            teacher_id:this.props.match.params.id,
            teacher_name_first:"teacher 1",
            teacher_name_last:"k",
            teacher_mail:"abc@gmail.com",
            breadcrumb:"teacher 1",
            teacher:{"teacher_id": "", "first_name": "", "last_name": "", "email": "", "img_add": "", "student_count":"","class_count":"", "classdetail": [{"class_name": "", "student_count": "", "updated": ""}]}
        }

        this.save = this.save.bind(this)
    }

    save(){
        console.log('ojn ');
        let body = {
            teacher_id: this.state.teacher_id,
            first_name: this.state.teacher_name_first,
            last_name: this.state.teacher_name_last
        }

        console.log(body);
    }


    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    componentDidMount(){
        axios.get('http://localhost:5000/teachersbyid?id='+this.state.teacher_id)
        .then(res => {
            console.log(res)
            this.setState({teacher: res.data[0]})
            console.log(this.state.teacher['first_name'])
            console.log(this.state.teacher['classdetail'])
            this.setState({
                teacher_name_first: this.state.teacher['first_name'],
                teacher_name_last: this.state.teacher['last_name'],
                teacher_mail: this.state.teacher['email']
            })
    })
        .catch(err => console.log(err))
    }

    render(){
        return(
            <div>
                <Header />
                
                <div style={{backgroundColor:"orange",height:"550px",opacity:"0.65"}}> 
                <Row className="page-title">
          
                <Col style={{margin:"10px"}} sm={6} lg={4} >
              <Breadcrumb className="float-left float-sm-left">
              <BreadcrumbItem>Administrator</BreadcrumbItem>
              <BreadcrumbItem>Teachers</BreadcrumbItem>
              <BreadcrumbItem >{this.state.teacher['first_name']} {this.state.teacher['last_name']}</BreadcrumbItem>
              <BreadcrumbItem active>Edit Info</BreadcrumbItem>

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
                        <Button onClick={this.save}   style={{marginBottom:"4px", width:"60%", textAlign: "left", backgroundColor:"grey"}}  className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-id-card-o"></i>Save</Button>
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
                                <input type="text" className="form-control" id="teacher_name_first" onChange={this.onChange} name="teacher_name_first" value={this.state.teacher_name_first}  placeholder={this.state.teacher_name_first}/>
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