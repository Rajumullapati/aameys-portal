import React,{Component} from 'react';
import { Row, CardBody, Card, Col,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import './header.css';
import LoginCard from './LoginCard';
import HeaderCommon from './HeaderCommon';


export default class CareerApply extends Component{
    constructor(props){
        super(props);
        this.state={
            fname:'',
            lname:'',
            email:'',
            address:'',
            phnum:''
        }
    }

    render(){
        return(
            <div>
            <HeaderCommon id="1" />
            <div style={{backgroundColor:"orange",height:"620px", opacity:"0.65", padding:"10px"}}> 
            <h2><p style={{marginBottom:"30px"}}>Primary and secondary school homework support</p></h2>
            <h3><p style={{marginBottom:"30px"}}>Apply Now</p></h3>
            <Row>
           
                <Col xl={8} className="mb-30 mt-10 ml-100">
                
            <Card className="h-100">
            <CardBody >
                <form>
                
                <Col>
                  <div className="form-row">
                  <Col>
                    <div className="form-group col-md-6">
                      <label htmlFor="fname">First Name</label>
                      <input type="text" className="form-control" onChange={this.onChange} value={this.state.fname} name="fname" placeholder="First Name" />
                    </div>
                    </Col>
                    <Col>
                    <div className="form-group col-md-6">
                      <label htmlFor="lname">Last Name</label>
                      <input type="text" name="lname" onChange={this.onChange} className="form-control" id="lname" value={this.state.lname} placeholder="Last Name" />
                    </div>
                    </Col>
                  </div>
                  </Col>
                  <Col>
                  <div className="form-row">
                  <Col>
                    <div className="form-group col-md-9">
                      <label htmlFor="inputEmail4">Email</label>
                      <input type="email" className="form-control" onChange={this.onChange} value={this.state.email} name="email" placeholder="Email" />
                    </div>
                    </Col>
                    </div>
                    <Col>
                    <div className="form-row">
                    <div className="form-group col-md-9">
                      <label htmlFor="address">Address</label>
                      <input type="text" name="address" onChange={this.onChange} className="form-control" id="address" value={this.state.address} placeholder="Address" />
                    </div>
                  </div>
                  </Col>
                  </Col>
                  <Col>
                  
                        <Col>
                        <div className="form-group col-md-6">
                      <label htmlFor="address">Upload resume</label>
                      <Row><input type="file" style={{height:"50px"}} className="form-control" id="pfile" placeholder="Attach File" onChange={this.onChange} name="pfile" value={this.state.pfile} /></Row>
                      <Row><span>PDF only. Upto 5MB</span></Row>
                    </div>
                        
                    </Col>
                  <Col lg={4} md={4} sm={4} />
                   
                    <Col lg={4} md={4} sm={4} />
                    
                  <div className="form-group">
                    <div className="form-check">
                      <input className="form-check-input" onChange={this.onCheckBoxChange} type="checkbox" id="gridCheck" />
                      <label className="form-check-label" htmlFor="gridCheck">
                        Accept all terms and conditions.
                          </label>
                    </div>
                  </div>
                  </Col>
                  <button onClick={this.submit}  className="btn btn-primary">Apply</button>
                </form>
              </CardBody>
            </Card>
            </Col>
            </Row>
            </div>  
            </div>
        );
    }
}