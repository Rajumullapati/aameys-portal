import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import { Link } from 'react-router-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import HeaderAdmin from '../../Common/HeaderAdmin'
import axios from 'axios';

const classdata = [
    {
        "class": "English",
        "teacher": "Teacher 1",
        "student": "3",

    }
]

export default class AdminClass extends Component {
    constructor(props){
        super(props);
        this.buttonFormatter = this.buttonFormatter.bind(this);
        this.state = {
            admin_id:this.props.match.params.aid,
            classes: [{"class_name":"","first_name":"","last_name":"","student_count":""}],
            admin:[{"admin_id":"","first_name":"","last_name":"","email":"","img_add":"","teacher_count":"","student_count":"", "class_count":""}]
        }
        this.nameFormatter = this.nameFormatter.bind(this);
        this.classFormatter = this.classFormatter.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:5000/adminById?id='+this.state.admin_id)
        .then(res => {
            console.log(res)
            this.setState({admin: res.data})
        })
        .catch(err => console.log(err))
        axios.get('http://localhost:5000/class')
        .then(res => {
            console.log(res)
            this.setState({classes: res.data})
        })
        .catch(err => console.log(err))

    }

    nameFormatter(cell,row){
        return row['first_name']==null?"None":row['first_name']+' '+row['last_name']==null?"":row['last_name']
    }

    classFormatter(cell,row){
      return '<a href="#/admin/'+this.state.admin_id+'/class/'+row['class_id']+'">'+cell+'</div></a>'
    }

    buttonFormatter(cell, row){
        return '<Button style="background:red"><i style={{fontSize:"100%"}} class="fa fa-times"></i></Button>';
      }

    render(){
        return(
            <div>
            <HeaderAdmin />
                <div style={{backgroundColor:"orange", marginTop:"150px",height:"500px", opacity:"0.65"}}> 
                <Row className="page-title">
          
          <Col style={{margin:"10px"}} sm={6} lg={4} >
              <Breadcrumb className="float-left float-sm-left">
              <BreadcrumbItem >Administrator</BreadcrumbItem>
              <BreadcrumbItem active>Classes</BreadcrumbItem>
              </Breadcrumb>
          </Col>
      </Row>
               
                <Row>
                <Col lg={3} md={3} sm={3} className="mb-30"></Col>
                    <Col lg={6} md={6} sm={6} className="mb-30">
                        <div style={{width:"80%"}}>
                            <CardBody>
                                <div className="user-bg parallax" style={{backgroundColor:"white"}}>
                                    <div style={{height:"150px"}} className="user-info">
                                        <Row>
                                            <Col lg={4} md={4} className="align-self-center">
                                                <div className="user-dp"><img style={{ margin: "10px", textAlign:"center", height:"100px"}} className="img-fluid rounded-circle" src="assets/images/profile-avatar.jpg" /></div>
                                            </Col>
                                            
                                            <Col>
                                                <div className="user-detail">
                                                
                                                    <h2 style={{fontSize:"18px", fontWeight:"bolder"}} className="name">Administrator Info</h2>
                                                    <p>Name: <span style={{fontSize:"100%", fontWeight:"bolder", marginRight:"50%"}} className="float-right">{ this.state.admin[0]['first_name']} { this.state.admin[0]['last_name']    } </span></p>
                                                    <p>Teacher: <span style={{fontSize:"100%", fontWeight:"bolder", marginRight:"50%"}} className="float-right">{ this.state.admin[0]['teacher_count']     } </span> </p>
                                                    <p>Classes: <span style={{fontSize:"100%", fontWeight:"bolder", marginRight:"50%"}} className="float-right">{ this.state.admin[0]['class_count']     } </span> </p>
                                                    <p>Students: <span style={{fontSize:"100%", fontWeight:"bolder", marginRight:"50%"}} className="float-right">{ this.state.admin[0]['student_count']     } </span> </p>
                                                  
                                                </div>
                                            </Col>
                                           
                                        </Row>
                                        
                                    </div>
                                </div>
                            </CardBody>
                        </div>
                    </Col>  
                    <Col lg={3} md={3} sm={3}>
                    <div style={{margin:"10px"}}>
                        <Link to ={{pathname: "class/addclass"}}><Button style={{marginBottom:"4px", width:"70%", textAlign: "left", backgroundColor:"grey"}} type="button" className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-id-card-o"></i>Add Class</Button></Link>
                    </div>
                    </Col>
                </Row>
                <Row style={{height:"200px"}}>
                    {/* <Col sm={2} lg={1} md = {1} /> 
                        <Col>
                        
                        </Col>
                    <Col sm={2} lg={1} md = {1} />  */}
                    <Col xl={12} className="mb-30">
                    <Card style={{margin: "10px"}}>
                        <CardBody>
              
                        <BootstrapTable
                                data={this.state.classes}
                                pagination
                                tableStyle={{height:"150px"}}
                                >
                                <TableHeaderColumn width='100' dataField="class_name" isKey={true} dataFormat={this.classFormatter}>Class Name</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='first_name' dataFormat={this.nameFormatter}>Teacher</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='student_count'>Students</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField="Remove" dataFormat={this.buttonFormatter}>Remove</TableHeaderColumn>
                        </BootstrapTable>
                        </CardBody>
                    </Card>
                </Col>
                </Row>

             </div>
            </div>
        );
    }
}