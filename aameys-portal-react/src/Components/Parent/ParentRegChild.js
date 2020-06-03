import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';

export default class ParentRegChild extends Component {
    constructor(props){
        super(props);
        this.state={
            fname:"",
            sname:"",
            email:"",
            password:"",
            bday:"",
            term:"",
            gender:"",
            simpleDate:  new Date()
        }
        this.handleChange = this.handleChange.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            simpleDate: date

        });
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render(){
        return(
            <div>
            <div style={{backgroundColor:"orange",height:"500px", opacity:"0.65", padding:"10px"}}> 
                <Card style={{margin:"30px"}} >
              <CardBody >
                <form>
                  <div className="form-row">
                    <Col>
                    <label htmlFor="fname">Child's First Name</label>
                      <input type="text" id="fname" onChange={this.onChange} className="form-control" placeholder="First name" />
                    </Col>
                    <Col>
                    <label htmlFor="fname">Child's Last Name</label>
                      <input type="text" id="lname" onChange={this.onChange} className="form-control" placeholder="Last Name" />
                    </Col>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputEmail4">Email</label>
                      <input type="email" className="form-control" id="email" placeholder="Email" />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="inputPassword4">Mobile Number</label>
                      <input type="text" className="form-control" id="phone" placeholder="Mobile Number" />
                    </div>
                  </div>

                  <div className="form-row">
                  <div className="form-group col-md-6">
                      <label htmlFor="term">Term</label>
                      <input type="text" className="form-control" id="term" placeholder="Term" />
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

                  <Col lg={4} md={4} sm={4} />
                    
                    <Col lg={4} md={4} sm={4} />
                    <div  style={{margin:"10px"}} id="grade" onChange={this.onChange}>
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

                    <div id="gender" style={{margin:"10px"}} onChange={this.onChange}>
                    <label htmlFor="class">Gender</label>
                    <Row>
                        <input style={{margin:"10px"}} type="radio" value="0" name="class"/>Male 
                        <input style={{margin:"10px"}} type="radio" value="1" name="class" /> Female
                        <input style={{margin:"10px"}} type="radio" value="2" name="class" /> Other
                    </Row>
                    </div>

                    <div id="class" style={{margin:"10px"}} onChange={this.onChange}>
                    <label htmlFor="class">Class</label>
                    <Row>
                        <input style={{margin:"10px"}} type="radio" value="English" name="class"/>English 
                        <input style={{margin:"10px"}} type="radio" value="Maths" name="class" /> Maths
                        <input style={{margin:"10px"}} type="radio" value="Science" name="class" /> Science
                    
                        <input style={{margin:"10px"}} type="radio" value="History" name="class"/>History 
                        <input style={{margin:"10px"}} type="radio" value="Geography" name="class" /> Geography
                        <input style={{margin:"10px"}} type="radio" value="Civics" name="class" /> Civics
                    
                        <input style={{margin:"10px"}} type="radio" value="Design" name="class"/>Design 
                        <input style={{margin:"10px"}} type="radio" value="Digital" name="class" />Digital
                    </Row>
                    <Row>
                        <input style={{margin:"10px"}} type="radio" value="Economics" name="class" /> Economics
                        <input style={{margin:"10px"}} type="radio" value="Health" name="class"/>Health
                        <input style={{margin:"10px"}} type="radio" value="Arts" name="class" /> Arts
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
                  <button type="submit" className="btn btn-primary">Register</button>
                </form>
              </CardBody>
            </Card>
            </div>
            </div>
        );
    }
}