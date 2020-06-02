import React,{Component} from 'react';
import {Col} from 'reactstrap';

export default class extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div >
                <Col sm={6} md={4} lg={3} className="mb-10 mt-10"><i className="fa fa-spin fa-circle-o-notch" styles={{ width: 'auto', height: 'auto', lineHeight: '1px', marginRight: '10px' }}></i> fa-circle-o-notch</Col>
            </div>
        )
    }
}