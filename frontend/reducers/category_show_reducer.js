import {RECEIVE_CATEGORY, RESET_CATEGORY} from '../actions/category_actions';

const CategoryShowReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CATEGORY:
      return action.category;
    case RESET_CATEGORY:
      return {};
    default:
      return state;
  }
};

export default CategoryShowReducer;
