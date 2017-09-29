import {postReward, patchReward} from '../util/reward_api_util';

export const RECEIVE_REWARD = 'RECEIVE_REWARD';

export const receiveReward = reward => ({
  type: RECEIVE_REWARD,
  reward
});

export const createReward = (formReward, project_id) => dispatch => (
  postReward(formReward, project_id)
    .then(reward => dispatch(receiveReward(reward)))
);

export const updateReward = (formReward, project_id) => dispatch => (
  patchReward(formReward, project_id)
    .then(reward => dispatch(receiveReward(reward)))
);
