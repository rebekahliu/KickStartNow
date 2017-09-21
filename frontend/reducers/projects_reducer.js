import {RECEIVE_PROJECTS} from '../actions/project_actions';

const _nullProjects = {};

const ProjectsReducer = (state = _nullProjects, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_PROJECTS:
      return action.projects;
    default:
      return state;
  }
};

export default ProjectsReducer;
