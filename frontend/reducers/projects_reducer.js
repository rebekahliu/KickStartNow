import {RECEIVE_PROJECTS, RECEIVE_PROJECT} from '../actions/project_actions';

const _nullProjects = {};

const ProjectsReducer = (state = _nullProjects, action) => {
  let newState;
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_PROJECTS:
      return action.projects;
    case RECEIVE_PROJECT:
      newState = Object.assign({}, state);
      newState[action.project.id] = action.project;
      return newState;
    default:
      return state;
  }
};

export default ProjectsReducer;
