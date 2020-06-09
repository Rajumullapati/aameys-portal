import React, { Component } from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem, Card, CardBody } from 'reactstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Link } from 'react-router-dom';
import axios from 'axios';
import HeaderParent from '../Common/HeaderParent';


const attend = [{
    "Term":"1",
    "01-01-20":"X",
    "02-01-20":"X",
    "03-01-20":"X",
    "04-01-20":"X",
    "05-01-20":"X",
    "06-01-20":"X",
    "07-01-20":"X",
    "08-01-20":"X",
    "09-01-20":"X",
    "10-01-20":"X",
    "#":"10",
    "%":"100%"
}];
var columns = [];
export default class Attendance extends Component {
    constructor(props){
        super(props);
        this.state = {
            attendance: [{'class_name':"",
                          'dateattedance':"",
                          'absence':""}],
            student_id: this.props.match.params.sid,
            student_img:""
        }
        this.convert = this.convert.bind(this);
        this.buttonFormatter = this.buttonFormatter.bind(this);
        
        console.log(this.props);
        console.log(this.state)
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

    buttonFormatter(cell, row){

        
        if(cell=="1")
        return '<i class="fa fa-check" aria-hidden="true"></i>';
        else
        return '<i class="fa fa-times"></i>';
      }

    componentDidMount(){
        console.log(attend)
        axios.get('http://localhost:5000/studentid?id='+this.state.student_id)
        .then(response => {
           // this.setState({student_img: response[0]['student_image']})
        })
        .catch(err => console.log(err));
        console.log(columns)
        axios.get('http://localhost:5000/attendancebysid?id='+this.state.student_id)
        .then(response => {
                console.log(response)
                this.setState({attendance: response.data});
                columns = Object.keys(response.data[0])
                columns.map((value, index) => (console.log(value)))
            })
        .catch(err => console.log(err))
        
    }

    render(){
        return(

            <div>
                <HeaderParent />
            <div style={{backgroundColor:"orange", marginTop:"150px",height:"500px", opacity:"0.65"}}>
            <Row style={{marginBottom:"25px"}}>
                <Col sm={2} lg={5} md = {5} />
                <Col sm={4} lg={1} md = {2}>
                    <Link to={{pathname:  `/student/${this.state.student_id}`}}>
                        <Row style={{height:"10px", alignSelf:"center", marginBottom:"100px", marginLeft:"1px"}} className="user-dp"><img style={{height:"100px",  marginTop:"3px"}} className="img-fluid rounded-circle" src="assets/images/profile-avatar.jpg" /></Row>
                        <Row style={{textAlign:"center", fontSize: "15px", fontWeight:"bold", color:"black"}} className="bold">Student ID {this.state.student_id}</Row>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col xl={12} className="mb-30">
                    <Card style={{margin: "10px"}}>
                        <CardBody>
                        <BootstrapTable  tableStyle={{height:"280px"}} data={ this.state.attendance } keyField='dateattendance'>
                        <TableHeaderColumn height='10' width='100' dataField= 'class_name' >Class Name</TableHeaderColumn>
                        <TableHeaderColumn height='10' width='100' dataField= 'dateattendance' dataFormat={this.convert}   >Start Time</TableHeaderColumn>
                        <TableHeaderColumn height='10' width='100' dataField= 'absence' dataFormat={this.buttonFormatter} >End Time</TableHeaderColumn>
                        </BootstrapTable>
                        {/* <BootstrapTable data={ this.state.attendance } keyField='dateattedance'>
                        <TableHeaderColumn width='100' dataField= 'class_name'  >Class Name</TableHeaderColumn>)
                        <TableHeaderColumn width='100' dataField= 'dateattedance'>Date</TableHeaderColumn>)
                        <TableHeaderColumn width='100' dataField= 'absence' >Status</TableHeaderColumn>)

                            { columns.map((value, index) => 
                                ( <TableHeaderColumn width='100' dataField= {value} >{this.convert(value) }</TableHeaderColumn>)
                            ) }
                        </BootstrapTable> */}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
            </div>
            






        );
    }
}