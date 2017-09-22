import {RECEIVE_PROJECTS, RECEIVE_PROJECT} from '../actions/project_actions';

const ProjectsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_PROJECTS:
      return action.projects;
    case RECEIVE_PROJECT:
      const newProject = {[action.project.id]: action.project};
      let newState = Object.assign({}, state, newProject);
      return newState;
    default:
      return state;
  }
};

export default ProjectsReducer;
