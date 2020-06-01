import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';



const teacher = [
    {
        name:"Teacher 1",
        mail:"abc@gmail.com"
    }
]
export default class AdminEmailParent extends Component {
    constructor(props){
        super(props);
        this.state = {
            teachers:[],
            selected: [],
            fmail:"abc@ameys.com",
            sub:"",
            message:"",
            pfile:""
        }
        this.onChange = this.onChange.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.parentFormatter = this.parentFormatter.bind(this);
    }

    componentDidMount(){
        this.setState({
            teachers:teacher
        })
    }

    
    onSelect(row, isSelect, rowIndex, e){
        
        console.log(this.state.selected)
        let sel = this.state.selected;
        console.log(sel);
        if(isSelect){
            sel.push(row)
            this.setState({
                selected: sel
            })
            console.log(this.state.selected)
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    parentFormatter(cell,row){
        return '<div className="user-dp"><img class="img-fluid rounded-circle" src="assets/images/profile-avatar.jpg" style="margin: 10px; text-align: center; height: 50px;"></img>'+cell+'</div>'
      }

    render()
    {
        const selectRowProp = {
            mode: 'checkbox',
            clickToSelect: true,
            onSelect: this.onSelect,
            className: this.selectedRowClass
        };
        return(
            <div>
                <div style={{backgroundColor:"orange",height:"550px", opacity:"0.65"}}> 
                 <Row className="page-title">
          
                    <Col style={{margin:"10px"}} sm={6} lg={4} >
                        <Breadcrumb className="float-left float-sm-left">
                        <BreadcrumbItem><a href="#">Administrator</a></BreadcrumbItem>
                        <BreadcrumbItem actice>Email Parent</BreadcrumbItem>
                        </Breadcrumb>
                    </Col>
                </Row>
                <Row>
                    <Col xl={12} className="mb-30">
                        <Card style={{margin: "10px"}}>
                            <CardBody>
                                <Col lg={3} md={3} sm={3} >
                                    <h6>Email</h6>
                                </Col>

                                <Row className="form-group">
                                <Col lg={3} md={3} sm={3} style={{marginRight:"0px"}}>
                                    <label htmlFor="fmail" className=""><span style={{color:"black", fontSize:"100%", marginRight:"3px"}}>From</span></label>
                                    </Col>
                                    <Col lg={9} md={9} sm={9} >
                                        <input type="text" style={{height:"10px", borderRadius:"30px"}} className="form-control" id="fmail" placeholder="from mail" onChange={this.onChange} name="fmail" value={this.state.fmail} />
                                    </Col>
                                </Row>

                                <Row className="form-group">
                                <Col lg={3} md={3} sm={3} style={{marginRight:"0px"}}>
                                    <label htmlFor="sub" className=""><span style={{color:"black", fontSize:"100%", marginRight:"3px"}}>Suject</span></label>
                                    </Col>
                                    <Col lg={9} md={9} sm={9} >
                                        <input type="text" style={{height:"10px", borderRadius:"30px"}} className="form-control" id="sub" placeholder="Subject" onChange={this.onChange} name="sub" value={this.state.sub} />
                                    </Col>
                                </Row>

                                <Row className="form-group">
                                <Col lg={3} md={3} sm={3} style={{marginRight:"0px", marginBottom:"10px"}}>
                                    <label htmlFor="pfile" className=""><span style={{color:"black", fontSize:"100%", marginRight:"3px"}}>Attachements</span></label>
                                    </Col>
                                    <Col lg={9} md={9} sm={9} >
                                        <input type="file" style={{height:"50px"}} className="form-control" id="pfile" placeholder="Attach File" onChange={this.onChange} name="sub" value={this.state.pfile} />
                                    </Col>
                                </Row>


                                <Row className="form-group">
                                <Col lg={3} md={3} sm={3} style={{marginRight:"0px", marginBottom:"10px"}}>
                                    <label htmlFor="message" className=""><span style={{color:"black", fontSize:"100%", marginRight:"3px"}}>Message</span></label>
                                    </Col>
                                    <Col lg={9} md={9} sm={9} >
                                        <input type="text" style={{height:"100px"}} className="form-control" id="message" placeholder="Message" onChange={this.onChange} name="message" value={this.state.message} />
                                    </Col>
                                </Row>

                                <Row style={{margin:"5px", marginBottom:"30px"}} className="form-group">
                                    <Button>Send Email</Button>
                                </Row>

                                <Row>                  
                                <BootstrapTable
                                        data={this.state.teachers}
                                        pagination
                                        selectRow={selectRowProp}
                                        >
                                        <TableHeaderColumn width='100' dataField='name'  dataFormat={this.studentFormatter} isKey={true}>Parent Name</TableHeaderColumn>
                                        <TableHeaderColumn width='100' dataField="mail">Email</TableHeaderColumn>
                                </BootstrapTable>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                                
                </Row>
                
               
                </div>
            </div>
        );
    }
}