import { RECEIVE_BACKING } from '../actions/backing_actions';

const BackingsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_BACKING:
      const newBacking = action.backing;
      return Object.assign({}, state, newBacking);
    default:
      return state;
  }
};

export default BackingsReducer;
