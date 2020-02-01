import * as TaskAPIUtil from '../util/task_api_util';

export const RECEIVE_TASK = 'RECEIVE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const RECEIVE_ALL_TASKS = 'RECEIVE_ALL_TASKS';

export const receiveTask = payload => {
  return {
    type: RECEIVE_TASK,
    payload
  };
};

export const removeTask = payload => {
  return {
    type: REMOVE_TASK,
    payload
  };
};

export const receiveTasks = tasks => {

  return {
    type: RECEIVE_ALL_TASKS,
    tasks
  };
};

export const requestAllTasks = (teamId, projectId, columnId) => {

  return TaskAPIUtil.fetchProjectTasks(teamId, projectId, columnId).then(tasks => {

    return dispatch(receiveTasks(tasks));
  });
};

export const createTask = (task, columnId, projectId, teamId) => dispatch => {

  return TaskAPIUtil.createTask(task, columnId, projectId, teamId).then(res => (
    dispatch(receiveTask(res))
  ));
};

export const updateTask = (task, columnId, projectId, teamId) => dispatch => {
  return TaskAPIUtil.updateTask(task, columnId, projectId, teamId).then(res => (
    dispatch(receiveTask(res))
  ));
};

export const deleteTask = (taskId, columnId, projectId, teamId) => dispatch => {
  return TaskAPIUtil.deleteTask(taskId, columnId, projectId, teamId).then(res => (
    dispatch(removeTask(res))
  ));
};

export const fetchTask = (taskId, columnId, projectId, teamId) => dispatch => {
  return TaskAPIUtil.fetchTask(taskId, columnId, projectId, teamId).then(res => (
    dispatch(receiveTask(res))
  ));
};
