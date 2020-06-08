import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import HeaderAdmin from '../../Common/HeaderAdmin'
import axios from 'axios';

const teachers = [{
    "class":"English",
    "Students":"3"
},
{
    "class":"Maths",
    "Students":"3"
},
{
    "class":"kacn",
    "Students":"3"
},
{
    "class":"as",
    "Students":"3"
}
,
{
    "class":"sda",
    "Students":"3"
}]

var selc = [];
export default class AdminTeacherAssignClasses extends Component {
    constructor(props){
        super(props);
        this.onSelect = this.onSelect.bind(this);
        this.state = {
            teacher_id:this.props.match.params.id,
            teacher_name_first:"teacher 1",
            teacher:{"teacher_id": "", "first_name": "", "last_name": "", "email": "", "img_add": "", "student_count":"","class_count":"", "classdetail": [{"class_name": "", "student_count": "", "updated": ""}]},
            selected: [],
            classes:[]
        }
        this.assignClasses = this.assignClasses.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:5000/teachersbyid?id='+this.state.teacher_id)
        .then(res => {
            console.log(res)
            this.setState({teacher: res.data[0]})
            console.log(this.state.teacher['first_name'])
            console.log(this.state.teacher['classdetail'])
    })
        .catch(err => console.log(err))
        console.log('bnbn');
        axios.get('http://localhost:5000/getfreeclasses')
        .then(res => {
            console.log('erfgnm')
                console.log(res)
                this.setState({
                    classes: res.data
                })
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    assignClasses(){

        let body ={
            sel: this.state.selected,
            teacher_id: this.props.match.params.id
        }
        console.log(this.props.match.params)
        console.log(body)
        axios(
            {
              method: 'post',
              url: 'http://localhost:5000/addclassestoteacher',
              data: body,
              headers: {'Content-Type': 'application/json' }
            }
          )
          .then(
            res =>  {console.log(res)
            this.setState({
            teacher_id:"",
            teacher_name_first:"",
            teacher_name_last:"",
            teacher_mail:"",
            breadcrumb:"Add teacher",
            modal: false
            })}
          )
          .catch(
            err => {console.log(err)
                this.setState({
                teacher_id:"",
                teacher_name_first:"",
                teacher_name_last:"",
                teacher_mail:"",
                breadcrumb:"Add teacher",
                modal: false
                })}
          )
    }

    onSelect(row, isSelect, rowIndex, e){
        
        console.log(this.state.selected)
        let sel = this.state.selected;
        console.log(sel);
        if(isSelect){
            sel.push(row)
            this.setState({
                selected: sel,
            })
            console.log(this.state.selected)
        }
        else{
            sel.pop(row)
            this.setState({
                selected: sel
            })
            console.log(this.state.selected)
        }
    }

    render(){
        const selectRowProp = {
            mode: 'checkbox',
            clickToSelect: true,
            onSelect: this.onSelect,
            className: this.selectedRowClass
        };
        return(
            <div>
            <HeaderAdmin />
                 <div style={{backgroundColor:"orange",height:"550px", opacity:"0.65"}}> 
                 <Row className="page-title">
          
                 <Col style={{margin:"10px"}} sm={6} lg={4} >
                    <Breadcrumb className="float-left float-sm-left">
                    <BreadcrumbItem>Administrator</BreadcrumbItem>
                    <BreadcrumbItem>Teachers</BreadcrumbItem>
                    <BreadcrumbItem >{this.state.teacher['first_name']} {this.state.teacher['last_name']}</BreadcrumbItem>
                    <BreadcrumbItem active>Assign classes</BreadcrumbItem>

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
                                                
                                                    <h2 style={{fontSize:"18px", fontWeight:"bolder"}} className="name">Administrator Info</h2>
                                                    <p>Name: <span style={{fontSize:"100%", fontWeight:"bolder", marginRight:"20%"}} className="float-right">{ this.state.teacher['first_name']} { this.state.teacher['last_name']    } </span></p>
                                                    {/* <p>Teacher: <span style={{fontSize:"100%", fontWeight:"bolder", marginRight:"50%"}} className="float-right">{ this.state.teacher['teacher_count']     } </span> </p> */}
                                                    <p>Classes: <span style={{fontSize:"100%", fontWeight:"bolder", marginRight:"50%"}} className="float-right">{ this.state.teacher['class_count'] } </span> </p>
                                                    <p>Students: <span style={{fontSize:"100%", fontWeight:"bolder", marginRight:"50%"}} className="float-right">{ this.state.teacher['student_count']     } </span> </p>
                                                  
                                                </div>
                                            </Col>
                                            
                                           
                                        </Row>
                                       
                                    </div>
                                </div>
                            <Button onClick={this.assignClasses} style={{marginBottom:"4px", marginTop:"20px", width:"100%", textAlign: "left", backgroundColor:"grey"}} type="button" className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-id-card-o"></i>Assign selected classes to Teacher</Button>

                            </CardBody>
                            
                        </div>
                    </Col>
                    <Col lg={3} md={3} sm={3}>
                    <div style={{margin:"10px"}}>
                        <Button style={{marginBottom:"4px", width:"70%", textAlign: "left", backgroundColor:"grey"}} type="button" className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-id-card-o"></i>Save changes</Button>
                    </div>
                    </Col>
                </Row>
                <Row style={{height:"200px"}}>
                    <Col xl={12} className="mb-30">
                    <Card style={{margin: "10px"}}>
                        <CardBody>
                  
                        <BootstrapTable
                                data={this.state.classes}
                                pagination
                                selectRow={selectRowProp}
                                tableStyle={{height:"100px"}}
                                >
                                <TableHeaderColumn width='100' dataField="class_name" isKey={true}>Class Name</TableHeaderColumn>
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