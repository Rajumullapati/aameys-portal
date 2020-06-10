import React, { Component } from 'react';
import { Row, Col, Card, Modal, ModalHeader, ModalFooter, ModalBody, CardBody, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import HeaderCommon from '../Common/HeaderCommon';


export default class ParentSignUp extends Component {
    constructor(props){
        super(props);
        this.state={
            fname:"",
            sname:"",
            email:"",
            password:"",
            gender:"",
            gridCheck:"",            
            redirect:false,
            modal:false,
            simpleDate:  new Date()
        }
        this.handleChange = this.handleChange.bind(this);
        this.onChange = this.onChange.bind(this);
        this.submit = this.submit.bind(this);
        this.validate = this.validate.bind(this);
        this.onCheckBoxChange = this.onCheckBoxChange.bind(this); 
        this.toggle = this.toggle.bind(this);
        this.renderRedirect = this.renderRedirect.bind(this);
;
    }

    renderRedirect() {
      if (this.state.redirect) {
        return <Redirect to={this.state.redirectTo} />
      }
    }

    handleChange(date) {
        this.setState({
            simpleDate: date

        });
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    toggle(){
      this.setState(
        {
          modal: !this.state.modal
        }
      )
    }

    
    submit(){
      this.toggle()
      if(this.validate()){

        let reqbody = {
          fname: this.state.fname,
          lname: this.state.sname,
          email: this.state.email,
          pass: this.state.password,
          bday: '',
          gender: this.state.gender
        }

        let axiosConfig = {
          headers: {
              'Content-Type' : 'application/json; charset=UTF-8',
              'Accept': 'Token',
              "Access-Control-Allow-Origin": "*",
        
          }
        };



        console.log(reqbody)


        // axios.get('http://localhost:5000/parentSignup?fname='+reqbody['fname']+'&lname = '+reqbody['lname']+'&email = '+reqbody['email']+'&pass ='+reqbody['pass']+'&bday='+reqbody['bday']+'&gender='+reqbody['gender']).
        // then(res => {
        //   console.log(res)
        // })
        // var request = new XMLHttpRequest();
        // request.open('POST', 'http://localhost:5000/parentSignUp', true);
        // request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        // request.send(reqbody);
  // .then(response => response.json())
          axios(
            {
              method: 'post',
              url: 'http://localhost:5000/parentSignUp',
              data: reqbody,
              headers: axiosConfig 
            }
          )
          .then(
            res =>  {console.log(res)
              this.setState({
                fname:"",
                sname:"",
                email:"",
                password:"",
                gender:"",
                gridCheck:"",
                redirect: true,
                modal:false,
                simpleDate:  new Date()
            })
            }
          )
          .catch(
            err => {console.log(err)
              this.setState({
                fname:"",
                sname:"",
                email:"",
                password:"",
                gender:"",
                gridCheck:"",
                modal:false,
                simpleDate:  new Date()
            })
            }
          )
      }
    }

    validate(){
      // console.log('yjm')
       let flag =true;
      // console.log(this.state)
      // if(flag && this.state.password.length < 6){
      //   flag = false;
      // }
      // if(flag && this.state.simpleDate.length ==0){
      //   flag = false;
      // }
      // if(flag && this.state.gender.length ==0){
      //   flag = false;
      // }
      // if(flag && this.state.email.length ==0){
      //   flag = false;
      // }
      // if(flag && this.state.sname.length ==0){
      //   flag = false;
      // }
      // if(flag && this.state.fname.length ==0){
      //   flag = false;
      // }
      // console.log(this.state.gridCheck)
      // if(flag && this.state.gridCheck.length ==0){
      //   flag = false;
      // }
      return flag
    }

    onCheckBoxChange(){
      if(this.state.gridCheck ==""){
        this.setState({gridCheck: "1"})
      }
      else{
        this.setState({gridCheck:""})
      }

    }

    render(){
        return(
            <div>
            <HeaderCommon id="1" />
            <div style={{backgroundColor:"orange",height:"500px", opacity:"0.65", padding:"10px"}}> 
                <Card style={{margin:"30px"}} >
              <CardBody >
                <form>
                  <div className="form-row">
                    <Col>
                      <input type="text" id="fname" name="fname" onChange={this.onChange} value={this.state.fname} className="form-control" placeholder="First name" />
                    </Col>
                    <Col>
                      <input type="text" id="lname" name="sname" onChange={this.onChange} value={this.state.sname} className="form-control" placeholder="Surname" />
                    </Col>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputEmail4">Email</label>
                      <input type="email" className="form-control" onChange={this.onChange} value={this.state.email} name="email" placeholder="Email" />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="inputPassword4">Password</label>
                      <input type="password" name="password" onChange={this.onChange} className="form-control" id="password" value={this.state.password} placeholder="Password" />
                    </div>
                  </div>
                  <Col lg={4} md={4} sm={4} />
                    <Col lg={4} sm={4} md={4} >
                    <div className="form-group col-md-6">
                      <label htmlFor="bday">Date of Birth</label>
                    </div>
                        <Card style={{marginRight:"30px"}} className="card-statistics mb-30">
                            <CardBody className="datepicker-form">
                                <DatePicker
                                    id="bday"
                                    className="form-control"
                                    selected={this.state.simpleDate}
                                    onChange={this.handleChange}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={4} />
                    <div id="gender" onChange={this.onChange}>
                        <input style={{margin:"10px"}} type="radio" value='0' name="gender"/>Male
                        <input style={{margin:"10px"}} type="radio" value="1" name="gender" /> Female
                        <input style={{margin:"10px"}} type="radio" value="3" name="gender" /> Other
                    </div>
                  <div className="form-group">
                    <div className="form-check">
                      <input className="form-check-input" onChange={this.onCheckBoxChange} type="checkbox" id="gridCheck" />
                      <label className="form-check-label" htmlFor="gridCheck">
                        Accept all terms and conditions.
                          </label>
                    </div>
                  </div>
                  <Button onClick={this.submit}  className="btn btn-primary">Sign in</Button>
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
                  {this.renderRedirect()}
                </form>
              </CardBody>
            </Card>
            </div>
            </div>
        );
    }
}