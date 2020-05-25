import React, { Component } from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem, Card, CardBody } from 'reactstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import './Datatables.css';
import { Link } from 'react-router-dom';

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
            attendance: [],
            student_id: this.props.match.params.id
        }
    }

    componentDidMount(){
        console.log(attend)
        columns = Object.keys(attend[0])
        columns.map((value, index) => (console.log(value)))
        console.log(columns)
        this.setState({attendance: attend});
    }

    render(){
        return(


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
                        <BootstrapTable data={ this.state.attendance } keyField='Term'>
                            { columns.map((value, index) => 
                                ( <TableHeaderColumn width='100' dataField= {value} >{ value }</TableHeaderColumn>)
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