import React from 'react';
import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';
import {Route, Switch} from 'react-router-dom';
import {AuthRoute} from '../util/route_util';
import ProjectIndexContainer from './project_index/project_index_container';
import ProjectShowContainer from './project_show/project_show_container';


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
    <div className='main-page'>
      <Switch>
        <Route exact path="/projects/:projectId" component={ProjectShowContainer} />
        <Route path='/' component={ProjectIndexContainer} />
      </Switch>
    </div>
    <AuthRoute path='/login' component={SessionFormContainer} />
    <AuthRoute path='/signup' component={SessionFormContainer} />
  </div>
);

export default App;
