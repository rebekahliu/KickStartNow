import { RECEIVE_REWARD } from '../actions/project_actions';

const RewardsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_REWARD:
      const newReward = action.reward;
      return Object.assign({}, state, newReward);
    default:
      return state;
  }
};

export default RewardsReducer;
