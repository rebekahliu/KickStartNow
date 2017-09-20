export const indexProjects = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/projects'
  });
};

export const showProjects = (projectId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/projects/${projectId}`
  });
};
