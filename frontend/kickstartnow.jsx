import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//for testing//
import {receiveProjects, receiveProject, logout} from './actions/project_actions';
import {getProjects, getProject, createProject} from './actions/project_actions';
//for testing//

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const preloadedState = {};
  if (window.currentUser){
    preloadedState.session = {currentUser: window.currentUser };
    delete window.currentUser;
  }

  const store = configureStore(preloadedState);

  //for testing//
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.getProjects = getProjects;
  window.getProject = getProject;
  window.createProject = createProject;
  //for testing//

  ReactDOM.render(<Root store={store}/>, root);
});
