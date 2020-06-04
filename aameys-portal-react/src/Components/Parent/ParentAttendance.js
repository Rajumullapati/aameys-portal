import React, { Component } from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem, Card, CardBody } from 'reactstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
// var columns = [];
export default class ParentAttendance extends Component {
    constructor(props){
        super(props);
        this.state = {
            attendance: [],
            student_id: this.props.match.params.sid,
            term:"",
            columns:[]
        }

        this.convert = this.convert.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:5000/studentid?id='+this.state.student_id)
        .then(response => {
            console.log(response)
            this.setState({student_img: response.data[0]['student_image'], term:response.data[0]['term']})
        })
        axios.get('http://localhost:5000/attendancebyid?id='+this.state.student_id)
        .then(response => {
            console.log(response)
            response.data[0]['term'] = this.state.term;
            this.setState({attendance: response.data})
            this.setState({columns: Object.keys(response.data[0])})
            // columns = this.state.columns;
            this.state.columns.map((value, index) => 
                                console.log(value)
                            )
        })
        
    }

    convert(value){
        console.log('ojknbj')
        console.log(value)
        let date = new Date(value*1000);
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();
        let full_date = day+"-"+month+"-"+year;
        return full_date; 
    }

    render(){
        return(


            <div style={{backgroundColor:"orange", marginTop:"150px",height:"500px", opacity:"0.65"}}>
            <Row style={{marginBottom:"25px"}}>
                <Col sm={2} lg={5} md = {5} />
                <Col sm={4} lg={1} md = {2}>
                    <Link to={{pathname:  `/parent/dash`}}>
                        <Row style={{height:"10px", alignSelf:"center", marginBottom:"100px", marginLeft:"1px"}} className="user-dp"><img style={{height:"100px",  marginTop:"3px"}} className="img-fluid rounded-circle" src="assets/images/profile-avatar.jpg" /></Row>
                        <Row style={{textAlign:"center", fontSize: "15px", fontWeight:"bold", color:"black"}} className="bold">Student ID {this.state.student_id}</Row>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col xl={12} className="mb-30">
                    <Card style={{margin: "10px"}}>
                        <CardBody>
                        <BootstrapTable data={ this.state.attendance } keyField='term'>
                        <TableHeaderColumn width='100' dataField= 'term' >Term</TableHeaderColumn>
                        <TableHeaderColumn width='100' dataField= "1591142400000" >1591142400000</TableHeaderColumn>
                        <TableHeaderColumn width='100' dataField= "1591228800000" >1591228800000</TableHeaderColumn>
                        <TableHeaderColumn width='100' dataField= "1591315200000" >1591315200000</TableHeaderColumn>
                        
                            { this.state.columns.map((value, index) => 
                                { 
                                    console.log('pimi')
                                    return(<TableHeaderColumn width='100' dataField= {value} >{ this.convert(value) }</TableHeaderColumn>)
                                }
                            ) }
                        </BootstrapTable>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>






        );
    }
}