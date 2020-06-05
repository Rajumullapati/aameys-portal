import React,{Component} from 'react';
import { Row, Col, Card, CardBody, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';    
import HeaderTeacher from '../Common/HeaderTeacher'
import axios from 'axios';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


export default class TeacherHome extends Component {
    constructor(props){
        super(props);
        this.state={
            teacherid: this.props.match.params.id,
            teacher:{"teacher_id": "", "first_name": "", "last_name": "", "email": "", "img_add": "", "student_count":"","class_count":"", "classdetail": [{"class_name": "", "student_count": "", "updated": ""}]}
        }
        this.classFormat = this.classFormat.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:5000/teachersbyid?id='+this.state.teacherid)
        .then(res => {
            console.log(res)
            this.setState({teacher: res.data[0]})
            console.log(this.state.teacher['first_name'])
            console.log(this.state.teacher['classdetail'])
    })
        .catch(err => console.log(err))
    }

    classFormat(cell,row){
        return '<a href="#/teacher/'+this.state.teacherid+'/class/'+row['class_id']+'"><div className="user-dp"><img class="img-fluid rounded-circle" src="assets/images/profile-avatar.jpg" style="margin: 10px; text-align: center; height: 50px;"></img>'+cell+'</div></a>'

    }

    render(){
        return(
            <div>
            <HeaderTeacher />
                <div style={{backgroundColor:"orange",height:"600px", opacity:"0.65"}}> 
                 <Row className="page-title">
          
          <Col style={{margin:"10px"}} sm={6} lg={4} >
              <Breadcrumb className="float-left float-sm-left">
              <BreadcrumbItem active>Teachers</BreadcrumbItem>
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
                                                
                                                    <h2 style={{fontSize:"18px", fontWeight:"bolder"}} className="name">Teacher Info</h2>
                                                    <p>Name: <span style={{fontSize:"100%", fontWeight:"bolder", marginRight:"20%"}} className="float-right">{ this.state.teacher['first_name']} { this.state.teacher['last_name']    } </span></p>
                                                    {/* <p>Term: <span style={{fontSize:"100%", fontWeight:"bolder", marginRight:"20%"}} className="float-right">{ this.state.teacher['first_name']} { this.state.teacher['last_name']    } </span></p> */}
                                                    {/* <p>Teacher: <span style={{fontSize:"100%", fontWeight:"bolder", marginRight:"50%"}} className="float-right">{ this.state.teacher['teacher_count']     } </span> </p> */}
                                                    <p>Classes: <span style={{fontSize:"100%", fontWeight:"bolder", marginRight:"50%"}} className="float-right">{ this.state.teacher['class_count'] } </span> </p>
                                                    <p>Students: <span style={{fontSize:"100%", fontWeight:"bolder", marginRight:"50%"}} className="float-right">{ this.state.teacher['student_count']     } </span> </p>
                                                  
                                                </div>
                                            </Col>
                                           
                                           
                                        </Row>
                                        
                                    </div>
                                </div>
                            </CardBody>
                        </div>
                    </Col>
                    <Col lg={3} md={3} sm={3}>
                    <div style={{margin:"10px"}}>
                    <Link to={{pathname: `${this.state.teacherid}/accinfo`}}><Button style={{marginBottom:"4px", width:"70%", textAlign: "left", backgroundColor:"grey"}} type="button" className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-id-card-o"></i>My account</Button></Link>
                    <Link to={{pathname: `${this.state.teacherid}/emailstudents`}}><Button style={{marginBottom:"4px", width:"70%", textAlign: "left", backgroundColor:"grey"}} type="button" className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-envelope-o"></i>Email Students</Button></Link>
                    <Link to={{pathname: `${this.state.teacherid}/emailparents`}}><Button style={{marginBottom:"4px", width:"70%", textAlign: "left", backgroundColor:"grey"}} type="button" className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-envelope-o"></i>Email Parents</Button></Link>
                    </div>
                    </Col>
                </Row>
                <Row style={{height:"200px"}}>
                    <Col xl={12} className="mb-30">
                    <Card style={{margin: "10px"}}>
                        <CardBody>
                  
                        <BootstrapTable
                                data={this.state.teacher.classdetail}
                                pagination
                                tableStyle={{height:"150px"}}
                                >
                                <TableHeaderColumn width='100' dataFormat={this.classFormat} dataField="class_name" isKey={true}>Class Name</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField="updated">Updated</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='student_count'>Students</TableHeaderColumn>
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