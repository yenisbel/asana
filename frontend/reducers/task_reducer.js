import { RECEIVE_TASK, REMOVE_TASK, RECEIVE_ALL_TASKS } from '../actions/task_actions';
import { RECEIVE_COLUMN } from '../actions/column_actions';
import {RECEIVE_PROJECT } from '../actions/project_actions';
import { RECEIVE_TEAM } from '../actions/team_actions';
import merge from 'lodash/merge';

const TasksReducer = (state = {}, action) => {

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROJECT:
      return merge({}, state, action.tasks);
    case RECEIVE_COLUMN:
      return merge({}, state, action.tasks);
    case RECEIVE_TASK:
      return merge({}, state, {[action.payload.task.id]: action.payload.task});
    case REMOVE_TASK:
      let newState = merge({}, state);
      delete newState[action.payload.task.id];
      return newState;
    case RECEIVE_ALL_TASKS:
      return merge({}, state, action.tasks);
    case RECEIVE_TEAM:
      return merge({}, state, action.payload.tasks);
    default:
      return state;
  }
};

export default TasksReducer;
