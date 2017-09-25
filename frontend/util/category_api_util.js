export const indexCategories = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/categories'
  });
};

export const showCategory = (categoryId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/categories/${categoryId}`
  });
};
