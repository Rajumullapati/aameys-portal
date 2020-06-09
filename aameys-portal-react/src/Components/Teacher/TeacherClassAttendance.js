import React, { Component } from 'react';
import { Row, Col, Card, Modal, ModalHeader, ModalFooter, ModalBody, CardBody, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import HeaderTeacher from '../Common/HeaderTeacher';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import DatePicker from 'react-datepicker';



export default class TeacherClassAttendance extends Component {
    constructor(props){
        super(props);
        this.state = {
            teachers : [],
            students:[],
            selected:[],
            teacher_id: this.props.match.params.id,
            class_id:this.props.match.params.cid,
            class:[{"class_name":"","term":""}],
            simpleDate:  new Date(),
            attendance: [],
            class_name:"",
            first_name:"",
            last_name:"",
            student_count:"",
            studentcopy:[],
            term:"",
            getdate:"",
            attendancetoupdate:[],
            modal:false
        }


        this.getattendance = this.getattendance.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.studentFormatter = this.studentFormatter.bind(this);
        this.buttonFormatter = this.buttonFormatter.bind(this);
        this.notesFormatter = this.notesFormatter.bind(this);
        this.genderFormat = this.genderFormat.bind(this);
        this.toggle = this.toggle.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.postattendance = this.postattendance.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:5000/getclassbyid?id='+this.state.class_id)
        .then(res => {
            console.log(res)
            this.setState({class: res.data[0]})
        })
        .catch(err => console.log(err))

        axios.get('http://localhost:5000/studentsbyclassId?id='+this.state.class_id)
        .then(res => {
            console.log(res)
            this.setState({
                students:res.data,
                studentcopy: res.data
            })
        })
        
    }


    postattendance(){

        let data = this.state.selected
        let total = this.state.studentcopy
        let absent = total.filter(x => !data.includes(x));
        console.log(absent)
        console.log(data)
        
        // console.log(data)
        this.toggle()

        data.map((value, index) => {
            console.log(value)
            let body = {
                student_id: value['student_id'],
                class_id: this.state.class_id,
                date: this.state.simpleDate,
                absence: 1
            }
            console.log(body, 'dat')
            axios(
                    {
                      method: 'post',
                      url: 'http://localhost:5000/postattendance',
                      data: body,
                      headers: {'Content-Type': 'application/json' }
                    }
                  )
                  .then(
                    res => { console.log(res)
                        this.setState(
                            {modal: false}
                        )
                    }
                  )
                  .catch(
                    err => {console.log(err)
                        this.setState(
                            {modal: false}
                        )
                    }
                  )
        })

        absent.map((value, index) => {
            console.log(value)
            let body = {
                student_id: value['student_id'],
                class_id: this.state.class_id,
                date: this.state.simpleDate,
                absence: 0
            }
            console.log(body, 'pe')
            axios(
                    {
                      method: 'post',
                      url: 'http://localhost:5000/postattendance',
                      data: body,
                      headers: {'Content-Type': 'application/json' }
                    }
                  )
                  .then(
                    res => { console.log(res)
                    this.setState(
                        {modal: false}
                    )
                    }
                  )
                  .catch(
                    err => {console.log(err)
                        this.setState(
                            {modal: false}
                        )
                    }
                  )
        })

        // let body = {
        //     student_id: this.state.student_id,
        //     class_id: this.state.class_id,
        //     date: this.state.simpleDate,
        //     absence: 1
        // }
        
        // axios(
        //     {
        //       method: 'post',
        //       url: 'http://localhost:5000/postattendance',
        //       data: body,
        //       headers: {'Content-Type': 'application/json' }
        //     }
        //   )
        //   .then(
        //     res => { console.log(res)
        //         this.setState({
        //             class:"",
        //             term:"",
        //             school:"",
        //             modal:false,
        //             breadcrumb: ""
        //         })
        //     }
        //   )
        //   .catch(
        //     err => {console.log(err)
        //         this.setState({
        //             class:"",
        //             term:"",
        //             school:"",
        //             breadcrumb: "",
        //             modal:false
        //         })
        //     }
        //   )
        // console.log(body)
    }

    notesFormatter(cell,row){

    }

    toggle(){
        this.setState(
          {
            modal: !this.state.modal
          }
        )
      }


    buttonFormatter(cell, row){

        
        // return ''
        // if(cell==="1")
        // return '<i class="fa fa-check" aria-hidden="true"></i>';
        // else
        // return '<i class="fa fa-times"></i>';
      }
    studentFormatter(cell,row){
        
        return '<a href="#/admin/teacher/'+'info'+'"><div className="user-dp"><img class="img-fluid rounded-circle" src="assets/images/profile-avatar.jpg" style="margin: 10px; text-align: center; height: 50px;"></img>'+cell+'</div></a>'
      }
    
    handleChange(date) {
        this.setState({
            simpleDate: date

        });
        console.log(date)
        console.log(this.state.simpleDate+" jhgbjnm")
        console.log(this.state.simpleDate.getDate()+"-"+this.state.simpleDate.getMonth()+"-"+this.state.simpleDate.getFullYear())

        // this.getattendance(date)
    }

    // arr_diff (a1, a2) {

    //     var a = [], diff = [];
    
    //     for (var i = 0; i < a1.length; i++) {
    //         a[a1[i]] = true;
    //     }
    
    //     for (var i = 0; i < a2.length; i++) {
    //         if (a[a2[i]]) {
    //             delete a[a2[i]];
    //         } else {
    //             a[a2[i]] = true;
    //         }
    //     }
    
    //     for (var k in a) {
    //         diff.push(k);
    //     }
        
    //     console.log(diff)
    //     return diff;
    // }

    
    onSelect(row, isSelect, rowIndex, e){
        
        console.log(this.state.selected)
        let sel = this.state.selected;
        // let unsel = this.state.studentcopy
        console.log(sel);
        if(isSelect){
            sel.push(row)
            // unsel.pop(row)
            this.setState({
                selected: sel,
                // studentcopy: unsel
            })
            console.log(this.state.selected)
            console.log(this.state.studentcopy)
        }
        else{
            sel.pop(row)
            // unsel.push(row)  
            this.setState({
                selected: sel,
                // studentcopy:unsel
            })
            // console.log(this.state.studentcopy)
            console.log(this.state.selected)
        }
    }


    genderFormat(cell, row){
        if(cell == '0'){
            return 'Female'
        }
        else {
            return "Male"
        }
    }
    getattendance(date){

        console.log('ghjk,')
        let datestr = date.getFullYear()+'-'+(date.getMonth()<10?'0'+date.getMonth():date.getMonth())+'-'+(date.getDate()<10?'0'+date.getDate():date.getDate()); 
        console.log(datestr)
        console.log(this.state.simpleDate.getDate()+"-"+this.state.simpleDate.getMonth()+"-"+this.state.simpleDate.getFullYear())
        axios.get('http://localhost:5000/attendanceByClassDate?date='+datestr+'&class_id='+this.state.class_id)
        .then(res => {
            console.log(res)
            this.setState({
                attendance: res.data
            })
        })
        .catch(err => console.log(err))
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
                <div>
            <HeaderTeacher updateParent={this.updateValue} />
             <div>   
             <div style={{backgroundColor:"orange", marginTop:"150px",height:"500px", opacity:"0.65"}}> 
             <Row className="page-title">
          
                <Col style={{margin:"10px"}} sm={6} lg={4} >
                    <Breadcrumb className="float-left float-sm-left">
                    <BreadcrumbItem >Teachers</BreadcrumbItem>
                    <BreadcrumbItem >Classes</BreadcrumbItem>
                    <BreadcrumbItem >{this.state.class['class_name']}</BreadcrumbItem>
                    <BreadcrumbItem active>Attendance</BreadcrumbItem>
                    
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
                                                
                                                    <h2 style={{fontSize:"18px", fontWeight:"bolder", marginBottom:"30px"}} className="name">Class Info</h2>
                                                    <p>School Term: <span style={{fontSize:"100%", fontWeight:"bolder", marginRight:"50%"}} className="float-right">{ this.state.class['class_name']}  </span></p>
                                                    <p>Class Name: <span style={{fontSize:"100%", fontWeight:"bolder", marginRight:"50%"}} className="float-right">{ this.state.class['term']     } </span> </p>
                                                    
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
                    <Button onClick={this.postattendance} style={{marginBottom:"4px", width:"70%", textAlign: "left", backgroundColor:"grey"}} type="button" className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-id-card-o"></i>Save Changes</Button>
                        {/* <Button style={{marginBottom:"4px", width:"70%", textAlign: "left", backgroundColor:"grey"}} type="button" className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-id-card-o"></i>Mark All Present</Button> */}
                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                            <ModalHeader toggle={this.toggle}>Modal title
                            </ModalHeader>
                            <ModalBody>
                                <p>Please wait. Your request is getting processed.</p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.toggle}>OK</Button>
                                
                            </ModalFooter>
                        </Modal>
                    </div>
                    </Col>
                </Row>
                <Row>
                <Col lg={4} md={4} sm={4} />
                    <Col lg={3} sm={3} md={3} >
                        <Card style={{marginRight:"30px"}} className="card-statistics mb-30">
                            <CardBody className="datepicker-form">
                                <DatePicker
                                    className="form-control"
                                    selected={this.state.simpleDate}
                                    onChange={this.handleChange}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row style={{height:"200px"}}>
                    <Col xl={12} className="mb-30">
                    <Card style={{margin: "10px"}}>
                        <CardBody>
                        <BootstrapTable
                                data={this.state.students}
                                selectRow={selectRowProp}
                                pagination
                                tableStyle={{height:"150px"}}
                                >
                                <TableHeaderColumn width='100' dataField="first_name" isKey={true} dataFormat={this.studentFormatter}>Student's Name</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='gender' dataFormat={this.genderFormat}>Gender</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='Age'>Age</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='student_id'>Student ID</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField="notes">Notes</TableHeaderColumn>

                        </BootstrapTable>
                        </CardBody>
                    </Card>
                </Col>
                </Row>

            </div>
            </div>
            </div>
            </div>
        )
    }
}