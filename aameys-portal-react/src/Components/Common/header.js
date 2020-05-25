// import React,{Component} from 'react';
// import { Link } from 'react-router-dom';

// export default class Header extends Component
// {
//     constructor(props){
        
//         super(props);
//     }
//     render(){
//         return(
//             <nav className="admin-header navbar navbar-default col-lg-12 col-12 p-0 fixed-top d-flex flex-row"> 
//                 <div className="text-left navbar-brand-wrapper">
//                     <Link className="navbar-brand brand-logo" to="/"><img src="assets/images/logo-dark.png" alt="" /></Link>
//                     <Link className="navbar-brand brand-logo-mini" to="/"><img src="assets/images/logo-icon-dark.png"  alt="" /></Link>
//                 </div>
//             </nav>
//         );
//     }
// }



import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
class Header extends Component{

    constructor(props) {
        super(props);
      
        this.state = {
          toggleactive: false,
          defaultValue: 1
        };
        this.togglebutton = this.togglebutton.bind(this);
        console.log(process.env.PUBLIC_URL);
        console.log(process.env.NODE_ENV);
      }
      togglebutton(toggleactive) {
        this.props.updateParent();
      };
 
    render(){
        return(
            <div style={{marginBottom:"90px"}}>
              <nav className="admin-header navbar navbar-default col-lg-12 col-12 p-0 fixed-top d-flex flex-row"> 

                    <Col sm={2} md={4} lg={4}>
                    <div className="text-left navbar-brand-wrapper">
                      <Link className="navbar-brand brand-logo" to="/"><img src="assets/images/logo-dark.png" alt="" /></Link>
                      <Link className="navbar-brand brand-logo-mini" to="/"><img src="assets/images/logo-icon-dark.png"  alt="" /></Link>
                    </div>
                    </Col>
                    {/* <!-- Top bar left --> */}
                    {/* <ul className="nav navbar-nav mr-auto">
                         <li className="nav-item">
                            <a className="button-toggle-nav inline-block ml-20 pull-left"  onClick={this.togglebutton} href="javascript:void(0);"  ><i className="zmdi zmdi-menu ti-align-right"></i></a>
                        </li>
                        <li className="nav-item">
                            <div className="search">
                            <a className="search-btn not_click" href="javascript:void(0);"></a>
                            <div className="search-box not-click">
                                <input type="text" className="not-click form-control" placeholder="Search" name="search" />
                                <button className="search-button" type="submit"> <i className="fa fa-search not-click"></i></button>
                            </div>
                            </div>
                        </li>
                    </ul> */}
                    {/* <Col sm={2}></Col> */}
                    <Col className="" md={8} lg={6} sm={2}>
             
                    {/* <!-- top bar right --> */}
                    <ul className="nav navbar-nav ml-auto col-lg-12 col-12">
                    <Row className="col-lg-12 col-12" md={12} lg={12} sm={12}>
                    <div className=""></div>
                    <Col style={{ alignItems:"center"}} sm={2}>
                          <a href="#" >Home</a>
                        </Col>
                        <Col sm={2} md={2} lg={2}>
                          <a href="#" >About Us</a>
                        </Col>
                        <Col sm={2} md={2} lg={2}>
                          <a href="#" >TEACHERS</a>
                        </Col>
                        <Link to={{pathname:  `/student/10`}}><Col sm={2} md={2} lg={2}>
                          <a href="#" >STUDENTS</a>
                        </Col></Link>
                        <Col sm={2} md={2} lg={2}>
                          <a href="#" >PARENTS</a>
                        </Col>
                        <Col sm={2} md={2} lg={2}>
                          <a href="#" >CAREERS</a>
                        </Col>
                        {/* <Col sm={2}>
                          <a href="#" >New registered user  </a>
                        </Col> */}
                        </Row>
                    </ul>
                    </Col>

                </nav>
                </div>
            //   End Header

        );
    }
}
export default Header;

