import React, { Component } from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem, Card, CardBody } from 'reactstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Link } from 'react-router-dom';
import axios from 'axios';
import HeaderParent from '../Common/HeaderParent';


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
            console.log(response)
            this.setState({student_img: response.data[0]['student_image']})
        })
        .catch(err => console.log(err));
        axios.get('http://localhost:5000/gradesbyid?id='+this.state.student_id)
        .then(response => {
                console.log(response);
                this.setState({assignments: response['data']});
            })
        .catch(err => console.log(err))
    }
    
    
    render(){
        return(
            <div><HeaderParent />
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
                                <TableHeaderColumn width='100' dataField='term' isKey={true}>Term</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='class_name'>Subject</TableHeaderColumn>
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
                                <TableHeaderColumn width='100' dataField='messages'>Messages</TableHeaderColumn>
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