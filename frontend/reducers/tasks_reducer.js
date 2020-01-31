import { RECEIVE_TASK, REMOVE_TASK, RECEIVE_TASKS } from '../actions/task_actions';
import {RECEIVE_PROJECT } from '../actions/project_actions';
import { RECEIVE_TEAM } from '../actions/team_actions';


const TasksReducer = (state = {}, action) => {

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROJECT:
      return Object.assign({}, state, action.tasks);
    case RECEIVE_TASK:
      return Object.assign({}, state, {[action.payload.task.id]: action.payload.task});
    case REMOVE_TASK:
      let nextState = Object.assign({}, state);
      delete nextState[action.payload.task.id];
      return nextState;
    case RECEIVE_TASKS:
      return Object.assign({}, state, action.tasks);
    case RECEIVE_TEAM:
      return merge({}, state, action.payload.tasks);
    default:
      return state;
  }
};

export default TasksReducer;