import * as ProjectAPIUtil from '../util/project_api_util';

export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const RECEIVE_PROJECT_ERRORS = 'RECEIVE_PROJECT_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';

export const receiveProjects = (projects) => {

  return {
    type: RECEIVE_ALL_PROJECTS,
    projects
  };
};

export const receiveProject = ({project, columns, tasks}) => {

  return {
    type: RECEIVE_PROJECT,
    project,
    columns,
    tasks
  };
};

export const removeProject = (projectId, teamId) => {
  return {
    type: REMOVE_PROJECT,
    projectId,
    teamId
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_PROJECT_ERRORS,
    errors
  };
};

export const removeErrors = () => {
  return {
    type: REMOVE_ERRORS
  };
};

export const requestAllProjects = (teamId) => dispatch => {

  return ProjectAPIUtil.fetchAllProjects(teamId).then(projects => (
    dispatch(receiveProjects(projects))
  ));
};

export const requestProject = (id, teamId) => dispatch => {

  return ProjectAPIUtil.fetchSingleProject(id, teamId).then(payload => {

    return dispatch(receiveProject(payload));
  }, err => (dispatch(receiveErrors(err.responseJSON))));
};

export const createProject = (project, teamId) => dispatch => {

  return ProjectAPIUtil.createProject(project, teamId).then(payload => {

    return dispatch(receiveProject(payload));
  }, err => (dispatch(receiveErrors(err.responseJSON))));
};

export const updateProject = (project, teamId) => dispatch => {
  return ProjectAPIUtil.updateProject(project, teamId).then(payload => {

    return dispatch(receiveProject(payload));
  }, err => {

    return dispatch(receiveErrors(err.responseJSON));
  });
};

export const deleteProject = (projectId, teamId) => dispatch => {
  return ProjectAPIUtil.deleteProject(projectId, teamId).then(project => (
    dispatch(removeProject(projectId, teamId))));
};
