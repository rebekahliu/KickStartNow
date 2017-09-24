export const postReward = (reward, project_id) => {
  return $.ajax({
    method: 'POST',
    url: '/api/rewards',
    data: {reward: reward, project_id: project_id}
  });
};
