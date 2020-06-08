import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import HeaderTeacher from '../Common/HeaderTeacher';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import DatePicker from 'react-datepicker';





export default class TeacherClassSchedule extends Component {
    constructor(props){
        super(props);
        this.state = {
            teachers : [],
            students:[],
            teacher_id: this.props.match.params.id,
            class_id:this.props.match.params.cid,
            grade:[],
            selected: [],
            class_name:"",
            first_name:"",
            last_name:"",
            student_count:"",
            term:"",
            class:{"class_name":"","term":""}
            
        }
    }
    


    componentDidMount(){


        axios.get('http://localhost:5000/getschedulebyclass?id='+this.state.class_id)
        .then(
            res => {
                console.log(res)
                this.setState(
                    {
                        schedule: res.data
                    }
                )
            }
        )
        .catch(err => console.log(err))
    }


    
    studentFormatter(cell, row){
        if(row['first_name'] == null){
            return "None"
        }
        return row['first_name']+' '+row['last_name']
    }

    render(){
       
        
         
        return(
            <div>
                <div>
            <HeaderTeacher updateParent={this.updateValue} />
             <div>   
             <div style={{backgroundColor:"orange", marginTop:"150px",height:"500px", opacity:"0.65"}}> 
             <Row className="page-title">
          
                <Col style={{margin:"10px"}} sm={6} lg={4} >
                    <Breadcrumb className="float-left float-sm-left">
                    <BreadcrumbItem >Teachers</BreadcrumbItem>
                    <BreadcrumbItem active>Schedule</BreadcrumbItem>
                    
                    </Breadcrumb>
                </Col>
            </Row>
            
                <Row>
                <Col xl={12} className="mb-30">
                    <Card style={{margin: "10px"}}>
                        <CardBody>
                        <div>
                        <BootstrapTable  tableStyle={{height:"280px"}} data={ this.state.schedule } keyField='Term'>
                        <TableHeaderColumn height='10' width='100' dataField= 'class_name' >Class Name</TableHeaderColumn>
                        <TableHeaderColumn height='10' width='100' dataField= 'starttime' >Start Time</TableHeaderColumn>
                        <TableHeaderColumn height='10' width='100' dataField= 'endtime' >End Time</TableHeaderColumn>
                        </BootstrapTable>
                        </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            </div>
            </div>
            </div>
            </div>
        )
    }
}