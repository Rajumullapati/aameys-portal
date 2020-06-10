import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import HeaderAdmin from '../Common/HeaderAdmin';
import DatePicker from 'react-datepicker';
import axios from 'axios';

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



export default class AdminScheduleAssign extends Component {
    constructor(props){
        super(props);
        this.state = {
            simpleDate:  new Date(),
            schedule: [],
            columns: [],
            data:[],
            selected:[],
            student:[],
            student_id:this.props.match.params.id
        }
        this.handleChange = this.handleChange.bind(this)
        // this.startTime =this.startTime.bind(this);
        this.onAfterSaveCell = this.onAfterSaveCell.bind(this);
        this.onBeforeSaveCell = this.onBeforeSaveCell.bind(this);
        this.save = this.save.bind(this)
    }


    handleChange(date) {
        this.setState({
            simpleDate: date

        });
    }

    componentDidMount(){

        axios.get('http://localhost:5000/class')
        .then(res =>{
            this.setState({data: res.data})
        })
        .catch(err => console.log(err))
    }

    onAfterSaveCell(row,  cellName, cellValue){
        console.log(row)
        let sel = this.state.selected;
        sel.push(row)
        console.log(sel)
        this.setState({
            selected: sel
        })
    }

    onBeforeSaveCell(row, cellName, cellValue) {
        console.log(cellName)
        if(cellName === 'class_name')
        {
            console.log(cellName)
            return false;
        }
        else{
            let sel = this.state.selected;
            if(sel.includes(row)){
                sel.pop(row)
                this.setState({
                    selected: sel
                })
            }
            return true;
        }
      }

      save(){

        if(this.state.selected.length > 0){
        let body = {
            sel: this.state.selected,
            date: this.state.simpleDate
        }
        axios(
            {
              method: 'post',
              url: 'http://localhost:5000/addscheduleByDate',
              data: body,
              headers: {'Content-Type': 'application/json' }
            }
          )
          .then(res => console.log(res))
          .catch(res => console.log(res))}
    }


    render(){
        const cellEditProp = {
            mode: 'click',
            blurToSave: true,
            beforeSaveCell: this.onBeforeSaveCell, 
            afterSaveCell: this.onAfterSaveCell  // a hook for after saving cell
          };
        return(
            <div>
            <HeaderAdmin />
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
                        <Button onClick={this.save} style={{marginBottom:"4px", width:"130%", textAlign: "left", backgroundColor:"grey"}} type="button" className="btn btn-sm"><i style={{marginRight:"10px"}} className="fa fa-id-card-o"></i>Save selected</Button>
                        
                    </div>
                    </Col>
                
            </Row>
            <Row>
                <Col xl={12} className="mb-30">
                    <Card style={{margin: "10px"}}>
                        <CardBody>
                        <div>
                        <BootstrapTable  tableStyle={{height:"280px"}} data={ this.state.data } keyField='Term' cellEdit={ cellEditProp }>
                            <TableHeaderColumn height='10' width='100' dataField= 'class_name' >Class Name</TableHeaderColumn>
                            <TableHeaderColumn height='10' width='100' dataField= 'first_name' dataFormat={this.nameformater} >Teacher Name</TableHeaderColumn>
                            <TableHeaderColumn height='10' width='100' dataField= 'start_time' dataFormat={this.startTime} >Start Time</TableHeaderColumn>
                            <TableHeaderColumn height='10' width='100' dataField= 'end_time' dataFormat={this.endTime} >End Time</TableHeaderColumn>
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