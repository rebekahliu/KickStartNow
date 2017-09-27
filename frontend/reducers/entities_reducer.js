import {combineReducers} from 'redux';
import ProjectsReducer from './projects_reducer';
import ProjectShowReducer from './project_show_reducer';
import RewardsReducer from './rewards_reducer';
import BackingsReducer from './backings_reducer';
import CategoriesReducer from './categories_reducer';
import CategoryShowReducer from './category_show_reducer';
import SearchReducer from './search_reducer';

const EntitiesReducer = combineReducers({
  projects: ProjectsReducer,
  project: ProjectShowReducer,
  rewards: RewardsReducer,
  backing: BackingsReducer,
  categories: CategoriesReducer,
  category: CategoryShowReducer,
  search: SearchReducer
});

export default EntitiesReducer;
