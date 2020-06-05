import React,{Component} from 'react';
import { Row, CardBody, Card, Col,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import './Home.css';
import LoginCard from './LoginCard';
import HeaderCommon from './HeaderCommon';


export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName: "",
            password:""
        };

    }

    render(){
        return(
            <div >
                {/* <Row > */}
                            <HeaderCommon id="0" />
                            <LoginCard></LoginCard>
                 
                {/* </Row> */}
                {/* <Row    style={{height: 350}}>
                <Col xl={3} lg={6} md={6} className="mb-30" >
                        <Card className="card-statistics h-100">
                            <CardBody>
                                <div className="clearfix">
                                    <div className="float-left">
                                        <span className="text-danger">
                                            <i className="fa fa-bar-chart-o highlight-icon" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="float-right text-right">
                                        <p className="card-text text-dark">Visitors</p>
                                        <h4>65,650</h4>
                                    </div>
                                </div>
                                <p className="text-muted pt-3 mb-0 mt-2 border-top">
                                    <i className="fa fa-exclamation-circle mr-1" aria-hidden="true"></i> 81% lower growth
                            </p>
                            </CardBody>
                        </Card>
                    </Col>
                </Row> */}
            </div>
        );
    }
}