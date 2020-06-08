import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Modal, ModalHeader, ModalBody, ModalFooter, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import HeaderParent from '../Common/HeaderParent';
import DatePicker from 'react-datepicker';
import axios from 'axios';


export default class ParentRegChild extends Component {
    constructor(props){
        super(props);
        this.state={
            fname:"",
            selected:[],
            parent_id:this.props.match.params.pid,
            sname:"",
            email:"",
            phone:"",
            grade:"",
            class:"",
            password:"",
            bday:"",
            term:"",
            gender:"",
            simpleDate:"",
            classes:[],
            modal: "",
            redirect:false

        }
        this.handleChange = this.handleChange.bind(this);
        this.onChange = this.onChange.bind(this);
        this.toggle = this.toggle.bind(this);
        this.onCheck = this.onCheck.bind(this)
        this.save = this.save.bind(this);
        this.renderRedirect = this.renderRedirect.bind(this);
    }

    onCheck(e){
      console.log(this.state.selected)
      let sel = this.state.selected;
      if(sel.includes(e.target.value)){
        sel.pop(e.target.value)
        this.setState({
          selected: sel
        })
      }
      else{
        sel.push(e.target.value)
        this.setState({
          selected: sel
        })
      }
     console.log(this.state.selected)
    }
    renderRedirect() {
      let p = "/parent/dash/"+this.state.parent_id
      if (this.state.redirect) {
        return <Redirect to={{pathname:p}} />
      }
    }
    handleChange(date) {
      console.log(this.state.simpleDate)
        this.setState({
            simpleDate: date

        });
        console.log(this.state.simpleDate)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    save(){
      // console.log()
      this.toggle()
      this.setState({modal: true})
      let reqbody = {
        fname:this.state.fname,
        sname:this.state.sname,
        email:this.state.email,
        term:this.state.term,
        phone:this.state.phone,
        grade:this.state.grade,
        class:this.state.selected,
        gender:this.state.gender,
        parent_id:this.state.parent_id,
        simpleDate:this.state.simpleDate,

      }

      console.log(this.state)

      console.log(reqbody)
      let axiosConfig = {
        headers: {
            'Content-Type' : 'application/json; charset=UTF-8',
            'Accept': 'Token',
            "Access-Control-Allow-Origin": "*",
      
        }
      };

      axios(
        {
          method: 'post',
          url: 'http://localhost:5000/regStudent',
          data: reqbody,
          headers: axiosConfig 
        }
      )
      .then(
        res => { 
          console.log(res)
          this.setState({
            fname:"",
            sname:"",
            email:"",
            phone:"",
            grade:"",
            class:"",
            password:"",
            bday:"",
            term:"",
            gender:"",
            simpleDate:"",
            modal: false,
            redirect:true
          })
        }
      )
      .catch(
        err => {
          console.log(err)
          this.setState({
            fname:"",
            sname:"",
            email:"",
            phone:"",
            grade:"",
            class:"",
            password:"",
            bday:"",
            term:"",
            gender:"",
            simpleDate:"",
            modal: false,
            redirect:false
          })
        }
      )
    }

    toggle(){
      console.log(this.state)
      this.setState(
        {
          modal: !this.state.modal
        }
      )
      console.log(this.state)
    }

    componentDidMount(){

      axios.get('http://localhost:5000/class')
      .then(res => {
        console.log(res)
        this.setState({
        classes: res.data
      })})
      .catch(err => console.log(err))
    }


    render(){
        return(
            <div>
            <HeaderParent />
            <div style={{backgroundColor:"orange",height:"500px", opacity:"0.65", padding:"10px"}}> 
                <Card style={{margin:"30px"}} >
              <CardBody >
                <form>
                  <div className="form-row">
                    <Col>
                    <label htmlFor="fname">Child's First Name</label>
                      <input type="text" id="fname" name="fname" onChange={this.onChange} className="form-control" placeholder="First name" />
                    </Col>
                    <Col>
                    <label htmlFor="fname">Child's Last Name</label>
                      <input type="text" id="lname" name="sname" onChange={this.onChange} className="form-control" placeholder="Last Name" />
                    </Col>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputEmail4">Email</label>
                      <input type="email" className="form-control" onChange={this.onChange} id="email" name="email" placeholder="Email" />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="inputPassword4">Mobile Number</label>
                      <input type="text" className="form-control" onChange={this.onChange} id="phone" name="phone" placeholder="Mobile Number" />
                    </div>
                  </div>

                  <div className="form-row">
                  <div className="form-group col-md-6">
                      <label htmlFor="term">Term</label>
                      <input type="text" name="term" onChange={this.onChange} className="form-control" id="term" placeholder="Term" />
                    </div>
                    <Col lg={4} sm={4} md={4} >
                    <div className="form-group col-md-6">
                      <label htmlFor="bday">Date of Birth</label>
                    </div>
                        
                                <DatePicker
                                    id="bday"
                                    className="form-control"
                                    selected={this.state.simpleDate}
                                    onChange={this.handleChange}
                                />
                            
                    </Col>
                  </div>

                  <div id="gender" value="gender" name="gender" style={{margin:"10px"}} onChange={this.onChange}>
                    <label htmlFor="gender">Gender</label>
                    <Row>
                        <input style={{margin:"10px"}} type="radio" value="0" name="gender"/>Male 
                        <input style={{margin:"10px"}} type="radio" value="1" name="gender" /> Female
                        <input style={{margin:"10px"}} type="radio" value="2" name="gender" /> Other
                    </Row>
                    </div>



                  <Col lg={4} md={4} sm={4} />
                    
                    <Col lg={4} md={4} sm={4} />
                    <div  style={{margin:"10px"}} name="grade" id="grade" onChange={this.onChange}>
                    <label htmlFor="grade">Grade</label>
                    <Row>
                        <input style={{margin:"10px"}} type="radio" value="0" name="grade"/>Kindergarten 
                        <input style={{margin:"10px"}} type="radio" value="1" name="grade" /> Grade1
                        <input style={{margin:"10px"}} type="radio" value="2" name="grade" /> Grade2
                    
                        <input style={{margin:"10px"}} type="radio" value="3" name="grade"/>Grade 3 
                        <input style={{margin:"10px"}} type="radio" value="4" name="grade" /> Grade 4
                        <input style={{margin:"10px"}} type="radio" value="5" name="grade" /> Grade 5
                    
                        <input style={{margin:"10px"}} type="radio" value="6" name="grade"/>Grade 5 
                        <input style={{margin:"10px"}} type="radio" value="7" name="grade" /> Grade 7
                    </Row>
                    <Row>
                        <input style={{margin:"10px"}} type="radio" value="8" name="grade" /> Grade 8
                        <input style={{margin:"10px"}} type="radio" value="9" name="grade"/>Grade 9 
                        <input style={{margin:"10px"}} type="radio" value="10" name="grade" /> Grade 10
                        <input style={{margin:"10px"}} type="radio" value="11" name="grade" /> Grade 11
                    
                        <input style={{margin:"10px"}} type="radio" value="12" name="grade"/>Grade 12 
                    </Row>
                    </div>

            

                    <div id="class" value="class" style={{margin:"10px"}} name="class" >
                    <label htmlFor="class">Class</label>
                    <Row>
                    { this.state.classes.map((value, index) => (<div><input style={{margin:"10px"}} onChange={this.onCheck} type="checkbox" value={value['class_id']} name="class"/>{value['class_name']}</div> )) }
                    </Row>
                    </div>


                  <div className="form-group">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="gridCheck" />
                      <label className="form-check-label" htmlFor="gridCheck">
                        Accept all terms and conditions.
                      </label>
                    </div>
                  </div>
                  <Button onClick={this.save}  className="btn btn-primary">Register</Button>
                  <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                      <ModalHeader toggle={this.toggle}>Request
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