import {RECEIVE_PROJECTS, RECEIVE_PROJECT, REMOVE_PROJECT} from '../actions/project_actions';
import {RECEIVE_SEARCH_RESULTS} from '../actions/search_actions';

const ProjectsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_PROJECTS:
      return action.projects;
    case RECEIVE_PROJECT:
      const newProject = action.project;
      newProject.reward_ids = action.project.rewards.map(reward => reward.id);
      newState = Object.assign({}, state);
      newState[newProject.id] = newProject;
      return newState;
    case REMOVE_PROJECT:
      newState = Object.assign({}, state, newProject);
      delete newState[action.project.id];
      return newState;
    case RECEIVE_SEARCH_RESULTS:
      return action.projects;
    default:
      return state;
  }
};

export default ProjectsReducer;

// case RECEIVE_SEARCH_RESULTS:
// return action.projects;
