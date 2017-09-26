import {RECEIVE_PROJECT, RESET_PROJECT} from '../actions/project_actions';

const _nullProjects = {};

const ProjectShowReducer = (state = _nullProjects, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_PROJECT:
      return action.project;
    case RESET_PROJECT:
      return {};
    default:
      return state;
  }
};

export default ProjectShowReducer;
