import React from 'react';
import {withRouter, Link, Redirect} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
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
    this.props.login({username: 'demo_email@gmail.com', password: 'demopassword'});
  }

  render(){
    if (this.props.loggedIn) return <Redirect to='/' />;
    const header = this.props.formType === 'login' ? "Log In" : "Sign Up";
    const link = this.props.formType === 'login' ?
      <Link to='/signup' className='session-link'>Sign Up</Link> :
      <Link to='/login' className='session-link'>Log In</Link>;
    const text = this.props.formType === 'login' ? "New to Kickstartnow?" : "Already have an account?" ;
    const button = this.props.formType === 'login' ? "Log me in!" : "Create Account" ;

    return(
      <div className='session-page'>
        <div className='session-form-border'>
          <div className='session-form'>
            <form>
              <h3>{header}</h3>
              {this.props.errors}
              <br />
                <input onChange={this.handleChange('username')} value={this.state.username} placeholder='email'/>
              <br />
                <input onChange={this.handleChange('password')} value={this.state.password} placeholder='password'></input>
              <button onClick={this.handleSubmit}>{button}</button>
              <button onClick={this.demoLogin}>Demo Login</button>
              {text} {link}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
