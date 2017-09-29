export const postReward = (reward, project_id) => {
  return $.ajax({
    method: 'POST',
    url: '/api/rewards',
    data: {reward: reward, project_id: project_id}
  });
};

export const patchReward = (reward, project_id) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/rewards/${reward.id}`,
    data: {reward: reward, project_id: project_id}
  });
};
