import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component{
  constructor(props){
    super(props);

    this.logout = this.props.logout;
    this.handleClick = this.handleClick.bind(this);
    this.sessionButtons = this.sessionButtons.bind(this);
  }

  handleClick(){
    return (e) => {
      e.preventDefault();
      this.logout();
    };
  }

  sessionButtons(){
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
      <div className='top-nav'>
        <div className='top-nav-left'>
          <Link to='/categories'>
            <i className="fa fa-compass"></i>
            Explore
          </Link>
          <Link to='/project/new'>Start a project</Link>
        </div>
        <Link to='/'>
          <img src='https://res.cloudinary.com/rebekahliu/image/upload/v1506374166/logo_xuvo0k.png' />
        </Link>
        <div className='top-nav-right'>
          {this.sessionButtons()}
        </div>
      </div>
    );
  }
}

export default Greeting;
