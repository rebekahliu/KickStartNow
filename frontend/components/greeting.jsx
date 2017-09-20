import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component{
  constructor(props){
    super(props);

    this.logout = this.props.logout;
    this.handleClick = this.handleClick.bind(this);
    this.greeting = this.greeting.bind(this);
  }

  handleClick(){
    return (e) => {
      e.preventDefault();
      this.logout();
    };
  }

  greeting(){
    if (this.props.currentUser){
      return (
        <div>
          <button onClick={this.handleClick()}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to='/login'>Log in</Link>
          <Link to='/signup'>Sign up</Link>
        </div>
      );
    }
  }

  render(){
    return(
      <div>
        {this.greeting()}
      </div>
    );
  }
}

export default Greeting;
