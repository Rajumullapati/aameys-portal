import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import DatePicker from 'react-datepicker';



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
            schedule: []
        }
        this.handleChange = this.handleChange.bind(this);   
    }


    handleChange(date) {
        this.setState({
            simpleDate: date

        });
    }

    componentDidMount(){
        columns = Object.keys(sched[0])
        this.setState({
            schedule: sched
        });
    }

    render(){
        return(
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
                        <Button style={{marginBottom:"4px", width:"130%", textAlign: "left", backgroundColor:"grey"}} type="button" className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-id-card-o"></i>Save Changes</Button>
                        
                    </div>
                    </Col>
                
            </Row>
            <Row>
                <Col xl={12} className="mb-30">
                    <Card style={{margin: "10px"}}>
                        <CardBody>
                        <div>
                        <BootstrapTable  tableStyle={{height:"280px"}}data={ this.state.schedule } keyField='Term'>
                            { columns.map((value, index) => 
                                ( <TableHeaderColumn height='10' width='100' dataField= {value} >{ value }</TableHeaderColumn>)
                            ) }
                        </BootstrapTable>
                        </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
        );
    }
}