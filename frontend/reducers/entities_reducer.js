import {combineReducers} from 'redux';
import ProjectsReducer from './projects_reducer';
import ProjectShowReducer from './project_show_reducer';
import RewardsReducer from './rewards_reducer';

const EntitiesReducer = combineReducers({
  projects: ProjectsReducer,
  project: ProjectShowReducer,
  rewards: RewardsReducer
});

export default EntitiesReducer;
