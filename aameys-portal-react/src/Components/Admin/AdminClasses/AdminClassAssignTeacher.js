import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import HeaderAdmin from '../../Common/HeaderAdmin'
import axios from 'axios';


const teachers = [{
    "teacher": "Teacher 1",
    "class":"English",
    "Students":"3"
},
{
    "teacher": "Teacher 7",
    "class":"Maths",
    "Students":"3"
},
{
    "teacher": "Teacher 2",
    "class":"kacn",
    "Students":"3"
},
{
    "teacher": "Teacher 5",
    "class":"as",
    "Students":"3"
}
,
{
    "teacher": "Teacher 3",
    "class":"sda",
    "Students":"3"
}]


export default class AdminClassAssignTeacher extends Component {
    constructor(props){
        super(props);
        this.onSelect = this.onSelect.bind(this);
        this.state = {
            teacher:[],
            selected:[],
            class:"",
            term:"",
            school:"",
            class_id:this.props.match.params.cid,
            class_name:"",
            first_name:"",
            last_name:"",
            student_count:""
        }
        this.teacherFormatter = this.teacherFormatter.bind(this)
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

        axios.get('http://localhost:5000/teachers').
        then( res =>
        {
            console.log(res)
            this.setState({teacher: res.data})
        }
        )
        .catch(err => console.log(err))
    }


    onSelect(row, isSelect, rowIndex, e){
        
        console.log(this.state.selected)
        let sel = this.state.selected;
        console.log(sel);
        if(isSelect){
            sel.push(row)
            this.setState({
                selected: sel
            })
            console.log(this.state.selected)
        }
    }

    teacherFormatter(){
        return this.state.first_name+" "+this.state.last_name
    }

    render(){
        const selectRowProp = {
            mode: 'checkbox',
            clickToSelect: true,
            onSelect: this.onSelect,
            className: this.selectedRowClass
        };
        return(
            <div>
            <HeaderAdmin />
                <div style={{backgroundColor:"orange",height:"550px", opacity:"0.65"}}> 
                 <Row className="page-title">
          
                    <Col style={{margin:"10px"}} sm={6} lg={4} >
                        <Breadcrumb className="float-left float-sm-left">
                        <BreadcrumbItem>Administrator</BreadcrumbItem>
                        <BreadcrumbItem>Class</BreadcrumbItem>
                        <BreadcrumbItem >{this.state.class_name}</BreadcrumbItem>
                        <BreadcrumbItem active>Assign Teacher</BreadcrumbItem>
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
                            <Row>
                            <Col lg={4} md={4} sm={4}>
                            <Button style={{marginBottom:"4px",marginLeft:"20px", width:"150%", textAlign: "left", backgroundColor:"grey"}} type="button" className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-id-card-o"></i>Assign Teachers to class</Button>
                            </Col>  
                            <Col lg={2} md={2} sm={2}></Col>
                            <Col lg={4} md={4} sm={4}>
                            <Button style={{marginBottom:"4px",marginLeft:"", width:"150%", textAlign: "left", backgroundColor:"grey"}} type="button" className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-id-card-o"></i>Remove teachers from class</Button>
                            </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={3} md={3} sm={3}>
                    <div style={{margin:"10px"}}>
                        <Button style={{marginBottom:"4px", width:"70%", textAlign: "left", backgroundColor:"grey"}} type="button" className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-id-card-o"></i>Save changes</Button>
                    </div>
                    </Col>
                </Row>
                <Row style={{height:"200px"}}>
                    <Col xl={12} className="mb-30">
                    <Card style={{margin: "10px"}}>
                        <CardBody>
                  
                        <BootstrapTable
                                data={this.state.teacher}
                                pagination
                                selectRow={selectRowProp}   
                                tableStyle={{height:"100px"}}
                                >
                                <TableHeaderColumn width='100' dataField='first_name' dataFormat={this.teacherFormatter} isKey={true}>Teacher</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='class_num' >Class</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField="student_num">Students</TableHeaderColumn>
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