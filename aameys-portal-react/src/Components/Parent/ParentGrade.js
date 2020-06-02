import React, { Component } from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem, Card, CardBody } from 'reactstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Link } from 'react-router-dom';
import axios from 'axios';

const assignment = [{
    "Term":"1",
    "Subject":"English",
    "1":"",
    "2":"",
    "3":"",
    "4":"",
    "5":"",
    "6":"",
    "7":"",
    "8":"",
    "9":"",
    "10":"",
    "messages":""
}]  

export default class ParentGrade extends Component {
    constructor(props){
        super(props);
        this.state = {
            assignments: [],
            student_id: this.props.match.params.sid
        };

    }
    componentDidMount(){
        axios.get('http://localhost:5000/studentid?id='+this.state.student_id)
        .then(response => {
            this.setState({student_img: response[0]['student_image']})
        })
        .catch(err => console.log(err));
        axios.get('http://localhost:5000/gradesbyid?id='+this.state.student_id)
        .then(response => {
                this.setState({assignments: response['data']});
            })
        .catch(err => console.log(err))
    }
    
    
    render(){
        return(
            
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
                            <BootstrapTable
                                data={this.state.assignments}
                                pagination
                                >
                                <TableHeaderColumn width='100' dataField='Term' isKey={true}>Term</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='Subject'>Subject</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='1'>1</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='2'>2</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='3'>3</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='4'>4</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='5'>5</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='6'>6</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='7'>7</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='8'>8</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='9'>9</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='10'>10</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='messages'>Messages</TableHeaderColumn>
                            </BootstrapTable>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
        );
    }
}