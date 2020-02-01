import { RECEIVE_COLUMN, REMOVE_COLUMN, RECEIVE_ALL_COLUMNS } from '../actions/column_actions';
import { RECEIVE_PROJECT } from '../actions/project_actions';
import { RECEIVE_TASK, REMOVE_TASK } from '../actions/task_actions';
import { RECEIVE_TEAM } from '../actions/team_actions';
import merge from 'lodash/merge';

const ColumnsReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TEAM:
    
      return merge({}, state, action.payload.columns);
    case RECEIVE_PROJECT:
      return merge({}, state, action.columns);
    case RECEIVE_ALL_COLUMNS:
      return merge({}, state, action.columns);
    case RECEIVE_COLUMN:
      return merge({}, state, {[action.payload.column.id]: action.payload.column});
    case REMOVE_COLUMN:
      newState = merge({}, state);
      delete newState[action.payload.column.id];
      return newState;
    case RECEIVE_TASK:
      newState = merge({}, state);
      if (!newState[action.payload.task.column_id].task_ids.includes(action.payload.task.id)){
        newState[action.payload.task.column_id].task_ids.unshift(action.payload.task.id);
      }
      return newState;
    case REMOVE_TASK:
      newState = merge({}, state);
      const taskIds = newState[action.payload.task.column_id].task_ids;
      taskIds.splice(taskIds.indexOf(action.payload.task.id), 1);
      return newState;
    default:
      return state;
  }
};

export default ColumnsReducer;
