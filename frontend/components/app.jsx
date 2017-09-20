import React from 'react';
import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';
import {Route} from 'react-router-dom';
import {AuthRoute} from '../util/route_util';


const App = () => (
  <div>
    <header>
      <div className='top-nav'>
        <div className='top-nav-left'>
          <a>placeholder</a>
        </div>
        <div className='top-nav-center'>
          <h1 className='kick'>KICK</h1>
          <h1 className='startnow'>STARTNOW</h1>
        </div>
        <div className='top-nav-right'>
          <GreetingContainer />
        </div>
      </div>
    </header>

    <AuthRoute path='/login' component={SessionFormContainer} />
    <AuthRoute path='/signup' component={SessionFormContainer} />
  </div>
);

export default App;
