import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import DatePicker from 'react-datepicker';
import HeaderAdmin from '../Common/HeaderAdmin';
import axios from 'axios';
import { DateTimePicker } from 'react-widgets'
const sched = [{
    "Time":"8:00-9:00",
    "Monday":"English",
    "Tuesday":"",
    "Wednesday":"",
    "Thursday":"",
    "Friday":""
},
{
    "Time":"",
    "Monday":"Mathematics",
    "Tuesday":"",
    "Wednesday":"",
    "Thursday":"",
    "Friday":""
},
{
    "Time":"",
    "Monday":"Mathematics",
    "Tuesday":"",
    "Wednesday":"",
    "Thursday":"",
    "Friday":""
},
{
    "Time":"",
    "Monday":"Mathematics",
    "Tuesday":"",
    "Wednesday":"",
    "Thursday":"",
    "Friday":""
},
{
    "Time":"",
    "Monday":"Mathematics",
    "Tuesday":"",
    "Wednesday":"",
    "Thursday":"",
    "Friday":""
},
{
    "Time":"",
    "Monday":"Mathematics",
    "Tuesday":"",
    "Wednesday":"",
    "Thursday":"",
    "Friday":""
},
{
    "Time":"",
    "Monday":"Mathematics",
    "Tuesday":"",
    "Wednesday":"",
    "Thursday":"",
    "Friday":""
},
{
    "Time":"",
    "Monday":"Mathematics",
    "Tuesday":"",
    "Wednesday":"",
    "Thursday":"",
    "Friday":""
},
{
    "Time":"",
    "Monday":"Mathematics",
    "Tuesday":"",
    "Wednesday":"",
    "Thursday":"",
    "Friday":""
},
{
    "Time":"",
    "Monday":"Mathematics",
    "Tuesday":"",
    "Wednesday":"",
    "Thursday":"",
    "Friday":""
},
{
    "Time":"",
    "Monday":"Mathematics",
    "Tuesday":"",
    "Wednesday":"",
    "Thursday":"",
    "Friday":""
},
{
    "Time":"",
    "Monday":"Mathematics",
    "Tuesday":"",
    "Wednesday":"",
    "Thursday":"",
    "Friday":""
}];

var columns = [];


export default class AdminSchedule extends Component {
    constructor(props){
        super(props);
        this.state = {
            simpleDate:  new Date(),
            schedule: [],
            columns: [],
            admin_id: this.props.match.params.aid,
            student:[],
            student_id:this.props.match.params.id
        }
        this.getsched = this.getsched.bind(this);
        this.handleChange = this.handleChange.bind(this);   
    }


    handleChange(date) {
        this.setState({
            simpleDate: date
        });
        this.getsched(date)

    }

    getsched(date){
        let datestr = date.getFullYear()+'-'+(date.getMonth()<10?'0'+date.getMonth():date.getMonth())+'-'+(date.getDate()<10?'0'+date.getDate():date.getDate()); 

        axios.get('http://localhost:5000/getschedulebydate?date='+datestr)
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

    componentDidMount(){
        let date = this.state.simpleDate;
        let datestr = date.getFullYear()+'-'+(date.getMonth()<10?'0'+date.getMonth():date.getMonth())+'-'+(date.getDate()<10?'0'+date.getDate():date.getDate()); 

        axios.get('http://localhost:5000/getschedulebydate?date='+datestr)
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

    render(){
        return(
            <div>
            <HeaderAdmin />
            <div style={{backgroundColor:"orange", height:"500px", opacity:"0.65"}}>
            
            <Row style={{marginBottom:"25px"}}>
                <Col sm={2} lg={4} md = {5} >
                <Breadcrumb style={{marginTop:"5px", marginLeft:"5px"}} className="float-left float-sm-left">
                        <BreadcrumbItem><a href="#">Administrator</a></BreadcrumbItem>
                        <BreadcrumbItem active>Schedule</BreadcrumbItem>
                        </Breadcrumb>
                        </Col>
                <Col sm={4} lg={4} md = {2}>
                <Card style={{marginRight:"30px", marginTop:"10px"}} className="card-statistics mb-30">
                            <CardBody className="datepicker-form">
                                <DatePicker
                                    className="form-control"
                                    selected={this.state.simpleDate}
                                    onChange={this.handleChange}
                                />
                            </CardBody>
                        </Card>
                </Col>
                <Col lg={3} md={3} sm={3}>
                    
                    <div style={{marginLeft:"120px", marginTop:"3px"}}>
                        <Link to={{pathname:`/admin/${this.state.admin_id}/schedule/assignschedule`}}><Button style={{marginBottom:"4px", width:"130%", textAlign: "left", backgroundColor:"grey"}} type="button" className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-id-card-o"></i>Assign Schedule</Button></Link>
                        
                    </div>
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
        );
    }
}