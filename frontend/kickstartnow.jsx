import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//for testing//
import {receiveProjects, receiveProject, logout, resetProject} from './actions/project_actions';
import {getProjects, getProject, createProject, destroyProject} from './actions/project_actions';
import {postBacking} from './util/backing_api_util';
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
  window.destroyProject = destroyProject;
  window.postBacking = postBacking;
  window.resetProject = resetProject;
  //for testing//

  ReactDOM.render(<Root store={store}/>, root);
});
