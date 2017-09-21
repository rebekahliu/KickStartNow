import {combineReducers} from 'redux';
import ProjectsReducer from './projects_reducer';
import ProjectShowReducer from './project_show_reducer';

const EntitiesReducer = combineReducers({
  projects: ProjectsReducer,
  project: ProjectShowReducer
});

export default EntitiesReducer;
