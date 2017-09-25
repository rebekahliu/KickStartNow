import React from 'react';
import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';
import {Route, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import ProjectIndexContainer from './project_index/project_index_container';
import ProjectShowContainer from './project_show/project_show_container';
import ProjectFormContainer from './project_form/project_form_container';
import CategoryIndexContainer from './category_index/category_index_container';
import CategoryShowContainer from './category_show/category_show_container';
import NewCarousel from './carousel';

const App = () => (
  <div className='site'>
    <header>
      <GreetingContainer />
    </header>
    <div className='main-page'>
      <Switch>
        <ProtectedRoute path='/project/new' component={ProjectFormContainer}/>
        <ProtectedRoute path='/project/update' component={ProjectFormContainer}/>
        <Route exact path="/projects/:projectId" component={ProjectShowContainer} />
        <Route exact path='/' component={ProjectIndexContainer} />
        <Route exact path='/categories' component={CategoryIndexContainer} />
        <Route exact path='/categories/:categoryId' component={CategoryShowContainer} />
      </Switch>
      <AuthRoute path='/login' component={SessionFormContainer} />
      <AuthRoute path='/signup' component={SessionFormContainer} />
    </div>
    <footer>
      <a href='https://github.com/rebekahliu/KickStartNow'>
        <i className="fa fa-github"></i>
      </a>
      <a href='https://www.linkedin.com/in/rebekah-liu-287a99ab'>
        <i className="fa fa-linkedin"></i>
      </a>
    </footer>
  </div>
);

export default App;
