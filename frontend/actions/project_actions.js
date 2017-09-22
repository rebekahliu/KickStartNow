import {indexProjects, showProjects, postProject} from '../util/project_api_util';

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';

export const receiveProjects = projects => ({
  type: RECEIVE_PROJECTS,
  projects
});

export const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  project
});

export const getProjects = () => dispatch => (
  indexProjects()
    .then(projects => dispatch(receiveProjects(projects)))
);

export const getProject = projectId => dispatch => (
  showProjects(projectId)
    .then(project => dispatch(receiveProject(project)))
);

export const createProject = formProject => dispatch => (
  postProject(formProject)
    .then(project => dispatch(receiveProject(project)))
);
