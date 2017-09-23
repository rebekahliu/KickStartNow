import {RECEIVE_PROJECTS, RECEIVE_PROJECT, REMOVE_PROJECT} from '../actions/project_actions';

const ProjectsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_PROJECTS:
      return action.projects;
    case RECEIVE_PROJECT:
      const newProject = {[action.project.id]: action.project};
      newState = Object.assign({}, state, newProject);
      return newState;
    case REMOVE_PROJECT:
      newState = Object.assign({}, state, newProject);
      delete newState[action.project.id];
      return newState;
    default:
      return state;
  }
};

export default ProjectsReducer;
