import {postBacking} from '../util/backing_api_util';

export const RECEIVE_BACKING = 'RECEIVE_BACKING';

export const receiveBacking = backing => ({
  type: RECEIVE_BACKING,
  backing
});

export const createBacking = newBacking => dispatch => (
  postBacking(newBacking)
    .then(backing => console.log("successful ajax call"))
);

// dispatch(receiveBacking(backing))
