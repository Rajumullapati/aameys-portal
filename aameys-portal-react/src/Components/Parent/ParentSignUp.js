import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';

export default class ParentSignUp extends Component {
    constructor(props){
        super(props);
        this.state={
            fname:"",
            sname:"",
            email:"",
            password:"",
            bday:"",
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
                      <input type="text" id="fname" onChange={this.onChange} className="form-control" placeholder="First name" />
                    </Col>
                    <Col>
                      <input type="text" id="lname" onChange={this.onChange} className="form-control" placeholder="Surname" />
                    </Col>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputEmail4">Email</label>
                      <input type="email" className="form-control" id="email" placeholder="Email" />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="inputPassword4">Password</label>
                      <input type="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                  </div>
                  <Col lg={4} md={4} sm={4} />
                    <Col lg={4} sm={4} md={4} >
                    <div className="form-group col-md-6">
                      <label htmlFor="datepick">Date of Birth</label>
                    </div>
                        <Card style={{marginRight:"30px"}} className="card-statistics mb-30">
                            <CardBody className="datepicker-form">
                                <DatePicker
                                    id="datepick"
                                    className="form-control"
                                    selected={this.state.simpleDate}
                                    onChange={this.handleChange}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={4} />
                    <div id="gender" onChange={this.onChange}>
                        <input style={{margin:"10px"}} type="radio" value="Male" name="gender"/>Male
                        <input style={{margin:"10px"}} type="radio" value="Female" name="gender" /> Female
                        <input style={{margin:"10px"}} type="radio" value="Other" name="gender" /> Other
                    </div>
                  <div className="form-group">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="gridCheck" />
                      <label className="form-check-label" htmlFor="gridCheck">
                        Accept all terms and conditions.
                          </label>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">Sign in</button>
                </form>
              </CardBody>
            </Card>
            </div>
            </div>
        );
    }
}