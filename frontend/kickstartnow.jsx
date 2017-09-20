import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//for testing//
// import {postUser, postSession, deleteSession} from './util/session_api_util';
import {login, signup, logout} from './actions/session_actions';
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
  // window.postUser = postUser;
  // window.postSession = postSession;
  // window.deleteSession = deleteSession;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  //for testing//

  ReactDOM.render(<Root store={store}/>, root);
});
