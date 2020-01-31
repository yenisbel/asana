import * as TaskAPIUtil from '../util/task_api_util';

export const RECEIVE_TASK = 'RECEIVE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const RECEIVE_TASKS = 'RECEIVE_TASKS';


export const receiveTasks = tasks => {
    return {
      type: RECEIVE_ALL_TASKS,
      tasks
    };
};

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



export const requestTasks = (teamId, projectId) => {

  return TaskAPIUtil.fetchTasks(teamId, projectId).then(tasks => {

    return dispatch(receiveTasks(tasks));
  });
};

// change to requestTask
export const fetchTask = (teamId, projectId, id) => dispatch => {
    return TaskAPIUtil.fetchTask(teamId, projectId, id).then(res => (
      dispatch(receiveTask(res))
    ));
};

export const createTask = (task, teamId, projectId) => dispatch => {

  return TaskAPIUtil.createTask(task, teamId, projectId).then(res => (
    dispatch(receiveTask(res))
  ));
};

export const updateTask = (task, teamId, projectId) => dispatch => {
  return TaskAPIUtil.updateTask(task, teamId, projectId).then(res => (
    dispatch(receiveTask(res))
  ));
};

export const deleteTask = (teamId, projectId, id) => dispatch => {
  return TaskAPIUtil.deleteTask(teamId, projectId, id).then(res => (
    dispatch(removeTask(res))
  ));
};

