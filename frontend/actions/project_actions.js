import * as ProjectAPIUtil from '../util/project_api_util';

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const RECEIVE_PROJECT_ERRORS = 'RECEIVE_PROJECT_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';

export const receiveProjects = (projects) => {
  return {
    type: RECEIVE_PROJECTS,
    projects
  };
};

export const receiveProject = ({project, tasks}) => {
  return {
    type: RECEIVE_PROJECT,
    project,
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

export const requestProjects = (teamId) => dispatch => {

  return ProjectAPIUtil.fetchProjects(teamId).then(projects => (
    dispatch(receiveProjects(projects))
  ));
};

export const requestProject = (teamId, id) => dispatch => {

  return ProjectAPIUtil.fetchProject(teamId, id).then(payload => {
    return dispatch(receiveProject(payload));
  }, err => (dispatch(receiveErrors(err.responseJSON))));
};

export const createProject = (teamId, project) => dispatch => {
  return ProjectAPIUtil.createProject(teamId, project).then(payload => {
    return dispatch(receiveProject(payload));
  }, err => (dispatch(receiveErrors(err.responseJSON))));
};

export const updateProject = (teamId, project) => dispatch => {
  return ProjectAPIUtil.updateProject(teamId, project).then(payload => {
    return dispatch(receiveProject(payload));
  }, err => {
    return dispatch(receiveErrors(err.responseJSON));
  });
};

export const deleteProject = (teamId, id) => dispatch => {
  return ProjectAPIUtil.deleteProject(teamId, id).then(project => (
    dispatch(removeProject(teamId, id))));
};
