import {search} from '../util/search_api_util';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';

export const receiveSearchResults = projects => ({
  type: RECEIVE_SEARCH_RESULTS,
  projects
});

export const getSearchResults = query => dispatch => (
  search(query).then(projects => dispatch(receiveSearchResults(projects)))
);
