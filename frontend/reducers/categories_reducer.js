import {RECEIVE_CATEGORIES, RECEIVE_CATEGORY} from '../actions/category_actions';

const CategoriesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_CATEGORIES:
      return action.categories;
    case RECEIVE_CATEGORY:
      const newCategory = action.cateogry;
      newState = Object.assign({}, state, newCategory);
      return newState;

    default:
      return state;
  }
};

export default CategoriesReducer;
