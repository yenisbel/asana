import { RECEIVE_PROJECT, RECEIVE_ALL_PROJECTS, REMOVE_PROJECT } from '../actions/project_actions';
import { RECEIVE_COLUMN, REMOVE_COLUMN } from '../actions/column_actions';
import { RECEIVE_TEAM } from '../actions/team_actions';
import merge from 'lodash/merge';

const ProjectsReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PROJECT:

      return merge({}, state, {[action.project.id]: action.project});
    case RECEIVE_ALL_PROJECTS:
      return merge({}, state, action.projects);
    case REMOVE_PROJECT:
      newState = merge({}, state);
      delete newState[action.projectId];
      return newState;
    case RECEIVE_COLUMN:
      newState = merge({}, state);
      if (!newState[action.payload.column.project_id].column_ids.includes(action.payload.column.id)){
        newState[action.payload.column.project_id].column_ids.push(action.payload.column.id);
      }
      return newState;
    case REMOVE_COLUMN:
      newState = merge({}, state);
      const columnIds = newState[action.payload.column.project_id].column_ids;
      columnIds.splice(columnIds.indexOf(action.payload.column.id), 1);
      return newState;
    case RECEIVE_TEAM:
      return merge({}, action.payload.projects);
    default:
      return state;
  }
};

export default ProjectsReducer;
