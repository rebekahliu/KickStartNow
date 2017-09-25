import {indexCategories, showCategory} from '../util/category_api_util';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';

export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories
});

export const receiveCategory = category => ({
  type: RECEIVE_CATEGORY,
  category
});

export const getCategories = () => dispatch => (
  indexCategories()
    .then(categories => dispatch(receiveCategories(categories)))
);

export const getCategory = categoryId => dispatch => (
  showCategory(categoryId)
    .then(category => dispatch(receiveCategory(category)))
);
