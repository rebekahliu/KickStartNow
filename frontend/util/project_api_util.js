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

export const postProject = project => {
  return $.ajax({
    method: 'POST',
    url: '/api/projects',
    data: {project}
  });
};
