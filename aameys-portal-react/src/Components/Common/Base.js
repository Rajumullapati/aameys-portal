import React,{Component} from 'react';
import Header from './header';
import { Row } from 'reactstrap';


class Base extends Component{
    constructor(props) {
        super(props);
        this.state = {
            toggleactive: false
          };
        this.updateValue=this.updateValue.bind(this);
      }
      updateValue(value) {
        this.setState(prevState => ({
            toggleactive:!prevState.toggleactive
        }))
      }

    render(){
        console.log(this.props)
        return(
            <div className="cover-full container-fluid" style={{width:"100%"}}>
                {/* <Header updateParent={this.updateValue} /> */}
                <div >
                    <div >
                        <div >
                           
                                { this.props.children }
                           
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
 
}
export default Base;