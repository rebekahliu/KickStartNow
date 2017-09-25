export const postBacking = (backing) => {
  return $.ajax({
    method: 'POST',
    url: '/api/backings',
    data: {backing}
  });
};
