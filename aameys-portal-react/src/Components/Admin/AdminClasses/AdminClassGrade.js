import React, { Component } from 'react';
import { Row, Col, Card,CardTitle, CardBody, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import HeaderAdmin from '../../Common/HeaderAdmin';
import axios from 'axios';

var fileDownload = require('js-file-download'); 
const grades = [
    {
        "name":"student 1",
        "id":"001",
        "1":"10",
        "2":"10",
        "3":"10",
        "4":"10",
        "5":"10",
        "6":"10",
        "7":"10",
        "8":"10",
        "9":"10",
        "10":"10",
        "count":"10",
        "perc":"100%",
        "notes":""
    }
]

var columns = [];
export default class AdminClassGrade extends Component {
    constructor(props){
        super(props);
        this.state = {
            grade:[],
            class_id:this.props.match.params.cid,
            class_name:"",
            first_name:"",
            last_name:"",
            student_count:"",
            term:""
        }
        this.download = this.download.bind(this);
        this.studentFormatter = this.studentFormatter.bind(this);
    }



    componentDidMount(){

        axios.get('http://localhost:5000/getclassbyid?id='+this.state.class_id)
        .then(res => {
            this.setState({
                class_name: res.data[0]['class_name'],
                first_name: res.data[0]['first_name'],
                last_name: res.data[0]['last_name'],
                student_count: res.data[0]['student_count'],
                term: res.data[0]['term']
            })
        } )
        .catch(err => console.log(err))

        axios.get('http://localhost:5000/grades')
        .then(res => {
            console.log(res)
            this.setState({
                grade: res.data
            })
        })
        .catch(err => console.log(err))
    }

    download(){
        axios.get('http://localhost:5000/downloadgrades')
        .then(res => {
            fileDownload(res.data,'report.csv')
        })
    }

    studentFormatter(cell, row){
        return row['first_name']+" "+row['last_name']
    }


    render(){
        return(
            <div>
            <HeaderAdmin />
                <div style={{backgroundColor:"orange",height:"580px", opacity:"0.65"}}> 
                <Row className="page-title">
          
          <Col style={{margin:"10px"}} sm={6} lg={4} >
              <Breadcrumb className="float-left float-sm-left">
              <BreadcrumbItem >Administrator</BreadcrumbItem>
              <BreadcrumbItem >Classes</BreadcrumbItem>
              <BreadcrumbItem >{this.state.class_name}</BreadcrumbItem>
              <BreadcrumbItem active>Grading</BreadcrumbItem>
              </Breadcrumb>
          </Col>
      </Row>
                <Row>
                <Col lg={3} md={3} sm={3} ></Col>
                    <Col lg={6} md={6} sm={6} >
                        <div style={{width:"80%"}}>
                            <CardBody>
                                <div className="user-bg parallax" style={{backgroundColor:"white"}}>
                                    <div style={{height:"150px"}} className="user-info">
                                        <Row>
                                            <Col lg={4} md={4} className="align-self-center">
                                                <div className="user-dp"><img style={{ margin: "10px", textAlign:"center", height:"100px"}} className="img-fluid rounded-circle" src="/src/assets/images/profile-avatar.jpg" /></div>
                                            </Col>
                                            
                                            <Col>
                                                <div className="user-detail">
                                                
                                                    <h2 style={{fontSize:"18px", fontWeight:"bolder"}} className="name">Class Info</h2>
                                                    <p>Class Name: <span style={{fontSize:"100%", fontWeight:"bolder", marginRight:"10%"}} className="float-right">{ this.state.class_name} </span></p>
                                                    <p>Term: <span style={{fontSize:"100%", fontWeight:"bolder", marginRight:"10%"}} className="float-right">{ this.state.term}</span> </p>
                                                    
                                                    <p>Classes: <span style={{fontSize:"100%", fontWeight:"bolder", marginRight:"10%"}} className="float-right">{ this.state.first_name} {this.state.last_name} </span> </p>
                                                    <p>Students: <span style={{fontSize:"100%", fontWeight:"bolder", marginRight:"10%"}} className="float-right">{ this.state.student_count   } </span> </p>
                                                  
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
                        <Button onClick={this.download} style={{marginBottom:"4px", width:"70%", textAlign: "left", backgroundColor:"grey"}} type="button" className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-id-card-o"></i>Download grades data</Button>
                    </div>
                    </Col>
                </Row>
                
                <Row style={{height:"200px"}}>
                    <Col xl={12} className="mb-30">
                    <Card style={{margin: "10px"}}>
                        <CardBody>
                        <BootstrapTable
                                data={this.state.grade}
                                tableStyle={{height:"150px"}}
                                pagination
                                >
                                <TableHeaderColumn width='100' dataField='first_name' dataFormat={this.studentFormatter} isKey={true}>Name</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='student_id'>Student ID</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='one'>1</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='two'>2</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='three'>3</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='four'>4</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='five'>5</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='six'>6</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='seven'>7</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='eight'>8</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='nine'>9</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='ten'>10</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='count'>#</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='notes'>Notes</TableHeaderColumn>
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