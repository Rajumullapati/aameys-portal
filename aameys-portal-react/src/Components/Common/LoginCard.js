
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import validators from '../../validators';
import {Container,Row,Col} from 'reactstrap';
import axios from 'axios';

var status=false;
class LoginCard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        email: '',
        password: '',
        error: null,
        waiting: true,
        redirectTo:""
      };
      this.validators = validators;
      this.onchange=this.onchange.bind(this);
      this.login=this.login.bind(this); 
      
    this.displayValidationErrors = this.displayValidationErrors.bind(this);
     this.updateValidators = this.updateValidators.bind(this);
  }
  onchange(event){
      this.setState({
        [event.target.name]:event.target.value
      });
      this.updateValidators([event.target.name], event.target.value);
  }
  updateValidators(fieldName, value) {
      this.validators[fieldName].errors = [];
      this.validators[fieldName].state = value;
      this.validators[fieldName].valid = true;
      this.validators[fieldName].rules.forEach((rule) => {
        if (rule.test instanceof RegExp) {
          if (!rule.test.test(value)) {
            this.validators[fieldName].errors.push(rule.message);
            this.validators[fieldName].valid = false;
          }
        } else if (typeof rule.test === 'function') {
          if (!rule.test(value)) {
            this.validators[fieldName].errors.push(rule.message);
            this.validators[fieldName].valid = false;
          }
        }
      });
  }
  isFormValid() {
    status = true;
    Object.keys(this.validators).forEach((field) => {
      if(field=='email' || field=='password' ){
        if (!this.validators[field].valid) {
          status = false;
        }
      }
    });
    return status;
  }
  displayValidationErrors(fieldName) {
    const validator = this.validators[fieldName];
    const result = '';
    if (validator && !validator.valid) {
      const errors = validator.errors.map((info, index) => {
        return <span className="error" key={index}>* {info}<br/></span>
      });
      return (
        <div className="col s12 row">
          {errors}
        </div>  
      );
    }
    return result;
  }

  renderRedirect() {
    if (this.state.redirectTo != "") {
      return <Redirect to={this.state.redirectTo} />
    }
  }

  login(event){
    const {
      email,
      password,
    } = this.state;


    // auth.doSignInWithEmailAndPassword(email, password)
    //   .then(() => {
    //     this.setState(() => ({
    //       email:email,
    //       password:password,
    //     }));
    //     this.props.history.push("/");
    //   })
    //   .catch(error => {
    //     alert('Invalid login id or password.');

    //   });
    console.log('pouj');
    console.log(status)
    if(status){
    console.log('p');

      axios.get('http://localhost:5000/login?uname='+email+'&pass='+password)
      .then(response => {
        console.log(response)
        if(response.data[0]['user_login_status'] == '0')
          {
            console.log('tyhjm');
            console.log(this.props)
            if(response.data[0]['user_role'] == '1'){
              axios.get('http://localhost:5000/updatestudentstatus?status=1&id='+response.data[0]['user_id_all']).then( res =>
              this.setState({redirectTo:'student/'+response.data[0]['user_id_all']}))
              .catch(err => console.log(err))
            }
            if(response.data[0]['user_role'] == '2'){
              axios.get('http://localhost:5000/updateparentstatus?status=1&id='+response.data[0]['user_id_all']).then( res =>
              this.setState({redirectTo: 'parent/dash/'+response.data[0]['user_id_all']})).catch(err => console.log(err))
            }
            if(response.data[0]['user_role'] == '3'){
              this.setState({redirectTo: 'teacher/'+response.data[0]['user_id_all']})
            }
            if(response.data[0]['user_role'] == '4'){
              this.setState({redirectTo: 'admin/'+response.data[0]['user_id_all']})
            }
        }
      })
      .catch(err => console.log(err))
    }
    event.preventDefault();
  }
    render(){
        return(
            <section className=" d-flex align-items-center page-section-ptb login" >
                 {/* <Container> */}
                <Row className="justify-content-center no-gutters vertical-align">
                  <div className="col s12 row">
                  <Col className="bg-white">
                    <div className="login-fancy pb-40 clearfix">
                      <h3 className="mb-30">Sign In To AAMEYS</h3>
                      <div className="section-field mb-20">
                        <label className="mb-10" htmlFor="email">User Name* </label>
                        <input id="email" className="web form-control" type="text" placeholder="Email" value={this.state.email} name="email" onChange={this.onchange}  />
                        {/* { this.displayValidationErrors('email') } */}
                      </div>
                      <div className="section-field mb-20">
                        <label className="mb-10" htmlFor="Password">Password* </label>
                        <input id="password" className="Password form-control" type="password" placeholder="Password" value={this.state.password} name="password" onChange={this.onchange}  />
                        { this.displayValidationErrors('password') }
                      </div>
                      <div className="section-field">
                        <div className="remember-checkbox mb-30">
                          <input type="checkbox" className="form-control" name="two" id="two" />
                          <label htmlFor="two"> Remember me</label>
                         
                        </div>
                      </div>
                      {this.renderRedirect()}
                      <a  onClick={this.login} className={`button   ${this.isFormValid() ? '' : 'disabled'}`}>
                        <span className="text-white">Log in</span> 
                         <i className="fa fa-check text-white" />
                      </a>
                      <p className="mt-20 mb-0 remember-checkbox">Don't have an account? <Link to="/register" > Create one here </Link></p>
                    </div>
                  </Col>
                  </div>
                </Row>
              {/* </Container> */}
            </section>
        );
    }
}
export default LoginCard;