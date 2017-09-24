export const selectProjectRewards = (state, project) => {
  return project === {} ? project.reward_ids.map(id => state.entities.rewards[id]) : [];
};
