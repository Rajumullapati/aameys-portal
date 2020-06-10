import React, { Component } from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem, Card, CardBody } from 'reactstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Link } from 'react-router-dom';
import axios from 'axios';
import HeaderStudent from '../Common/HeaderStudent';



// const sched = [{
//     "Time":"8:00-9:00",
//     "Monday":"English",
//     "Tuesday":"",
//     "Wednesday":"",
//     "Thursday":"",
//     "Friday":""
// },
// {
//     "Time":"",
//     "Monday":"Mathematics",
//     "Tuesday":"",
//     "Wednesday":"",
//     "Thursday":"",
//     "Friday":""
// },
// {
//     "Time":"",
//     "Monday":"Mathematics",
//     "Tuesday":"",
//     "Wednesday":"",
//     "Thursday":"",
//     "Friday":""
// },
// {
//     "Time":"",
//     "Monday":"Mathematics",
//     "Tuesday":"",
//     "Wednesday":"",
//     "Thursday":"",
//     "Friday":""
// },
// {
//     "Time":"",
//     "Monday":"Mathematics",
//     "Tuesday":"",
//     "Wednesday":"",
//     "Thursday":"",
//     "Friday":""
// },
// {
//     "Time":"",
//     "Monday":"Mathematics",
//     "Tuesday":"",
//     "Wednesday":"",
//     "Thursday":"",
//     "Friday":""
// },
// {
//     "Time":"",
//     "Monday":"Mathematics",
//     "Tuesday":"",
//     "Wednesday":"",
//     "Thursday":"",
//     "Friday":""
// },
// {
//     "Time":"",
//     "Monday":"Mathematics",
//     "Tuesday":"",
//     "Wednesday":"",
//     "Thursday":"",
//     "Friday":""
// },
// {
//     "Time":"",
//     "Monday":"Mathematics",
//     "Tuesday":"",
//     "Wednesday":"",
//     "Thursday":"",
//     "Friday":""
// },
// {
//     "Time":"",
//     "Monday":"Mathematics",
//     "Tuesday":"",
//     "Wednesday":"",
//     "Thursday":"",
//     "Friday":""
// },
// {
//     "Time":"",
//     "Monday":"Mathematics",
//     "Tuesday":"",
//     "Wednesday":"",
//     "Thursday":"",
//     "Friday":""
// },
// {
//     "Time":"",
//     "Monday":"Mathematics",
//     "Tuesday":"",
//     "Wednesday":"",
//     "Thursday":"",
//     "Friday":""
// }];

var columns = [];

export default class Schedule extends Component {
    constructor(props){
        super(props);
        this.state = {
            student_id: this.props.match.params.sid,
            schedule: [],
            student_img:""
        };
        this.convert = this.convert.bind(this);
    }

    convert(value){
        console.log('ojknbj')
        console.log(value)
        let date = new Date(value);
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();
        console.log(date)
        let full_date = day+"-"+month+"-"+year;
        console.log(full_date)
        return full_date; 
    }
    componentDidMount(){
        axios.get('http://localhost:5000/studentid?id='+this.state.student_id)
        .then(response => {
            // this.setState({student_img: response[0]['student_image']})
        })
        .catch(err => console.log(err));
        console.log(columns)
        axios.get('http://localhost:5000/schedulebyid?id='+this.state.student_id)
        .then(response => {
                this.setState({schedule: response['data']});
                columns = Object.keys(response['data'][0])
                columns.map((value, index) => (console.log(value)))
            })
        .catch(err => console.log(err))
        
    }
    
    render(){
        return(
            <div><HeaderStudent />
            <div style={{backgroundColor:"orange", marginTop:"150px",height:"500px", opacity:"0.65"}}>
            <Row style={{marginBottom:"25px"}}>
                <Col sm={2} lg={5} md = {5} />
                
                <Col sm={4} lg={1} md = {2}>
                    <Link to={{pathname:  `/student/${this.state.student_id}`}}>
                        <Row style={{height:"10px", alignSelf:"center", marginBottom:"100px", marginLeft:"1px"}} className="user-dp"><img style={{height:"100px",  marginTop:"3px"}} className="img-fluid rounded-circle" src="assets/images/profile-avatar.jpg" /></Row>
                        <Row style={{ fontSize: "15px", fontWeight:"bold", color:"black"}} className="bold">Student ID {this.state.student_id}</Row>
                    </Link>
                </Col>
                
            </Row>
            <Row>
                <Col xl={12} className="mb-30">
                    <Card style={{margin: "10px"}}>
                        <CardBody>
                        <div>
                        <BootstrapTable  tableStyle={{height:"280px"}} data={ this.state.schedule } keyField='Term'>
                        <TableHeaderColumn height='10' width='100' dataField= 'class_name' >Class Name</TableHeaderColumn>
                        <TableHeaderColumn height='10' width='100' dataFormat={this.convert} dataField= 'datesched' >Date</TableHeaderColumn>
                        <TableHeaderColumn height='10' width='100' dataField= 'starttime' >Start Time</TableHeaderColumn>
                        <TableHeaderColumn height='10' width='100'  dataField= 'endtime' >End Time</TableHeaderColumn>
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