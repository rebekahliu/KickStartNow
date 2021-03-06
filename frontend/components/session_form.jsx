import React from 'react';
import {withRouter, Link, Redirect} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      name: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.errors = this.errors.bind(this);
  }

  componentWillMount(){
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleChange(type) {
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }

  demoLogin(e){
    e.preventDefault();
    const demo = ['demo_email@gmail.com', 'demopassword'];
    this.setState({ username: "", password: "", name: ""});
    const username_arr = demo[0].split("");
    const password_arr = demo[1].split("");
    const shiftFunction = function(){
      if(username_arr.length > 0){
        this.setState({username: this.state.username.concat(username_arr.shift())});
      } else if (password_arr.length > 0){
        this.setState({password: this.state.password.concat(password_arr.shift())});
      } else {
        clearInterval(stop);
        this.props.login(this.state);
      }}.bind(this);
    const stop = setInterval(shiftFunction, 60);
  }

  errors(){
    return this.props.errors.map((error) => (
      <li>{error}</li>
    ));
  }

  render(){
    if (this.props.loggedIn) return <Redirect to='/' />;
    const header = this.props.formType === 'login' ? "Log In" : "Sign Up";

    const link = this.props.formType === 'login' ?
      <Link to='/signup' className='session-link'>Sign Up</Link> :
      <Link to='/login' className='session-link'>Log In</Link>;

    const nameInput = this.props.formType === 'login' ? "" :
      <input onChange={this.handleChange('name')} value={this.state.name} placeholder='name'/>;

    const text = this.props.formType === 'login' ? "New to Kickstartnow?" : "Already have an account?" ;

    const button = this.props.formType === 'login' ? "Log me in!" : "Create Account" ;

    // const demoLoginButton = this.props.formType === 'login' ?
    //    : "";

    return(
      <div className='session-page'>
        <div className='session-form-border'>
          <div className='session-form'>
            <form>
              <h3>{header}</h3>
              <div className='session-form-errors'>
                <ul>
                  {this.errors()}
                </ul>
              </div>
              <br />
                {nameInput}
                <input onChange={this.handleChange('username')} value={this.state.username} placeholder='email'/>
              <br />
                <input type='password' onChange={this.handleChange('password')} value={this.state.password} placeholder='password'></input>
              <button onClick={this.handleSubmit}>{button}</button>
              <button onClick={this.demoLogin}>Demo Login</button>
              <div className='bottom-text'>
                {text} {link}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
