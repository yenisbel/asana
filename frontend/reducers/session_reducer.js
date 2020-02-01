import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { OPEN_MODAL } from '../actions/modal_actions';
import { RECEIVE_PROJECT, RECEIVE_ALL_PROJECTS } from '../actions/project_actions';
import { SELECT_EDIT, OPEN_DROPDOWN, OPEN_TASK_NEW, OPEN_DROPDOWN_TASK } from '../actions/ui_actions';
import { RECEIVE_TEAM } from '../actions/team_actions';
import merge from 'lodash/merge';
const defaultState = { currentUserId: null, currentTeamId: null, currentProjectId: null, currentColumnId: null, currentTaskId: null};

const sessionReducer = (state = defaultState, action) => {

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUserId: action.currentUser.id, currentTeamId: action.team.id };
    case LOGOUT_CURRENT_USER:
      return defaultState;
    case OPEN_MODAL:
      return Object.assign({}, state, {currentProjectId: action.projectId, currentTaskId: action.taskId});
    case RECEIVE_PROJECT:
      return merge({}, state, {currentProjectId: action.project.id});
    case SELECT_EDIT:
      return merge({}, state, {currentColumnId: action.columnId});
    case OPEN_DROPDOWN:
      return merge({}, state, {currentColumnId: action.columnId});
    case OPEN_TASK_NEW:
      return merge({}, state, {currentColumnId: action.columnId});
    case OPEN_DROPDOWN_TASK:
      return merge({}, state, {currentTaskId: action.taskId});
    case RECEIVE_ALL_PROJECTS:
      if (Object.keys(action.projects).length != 0) {
        
        const projectId = parseInt(Object.keys(action.projects)[0]);
        const teamId = action.projects[projectId].team_id;
        return merge({}, state, {currentTeamId: teamId});
      }
      return state;
    case RECEIVE_TEAM:
        return merge({}, state, {currentTeamId: action.payload.team.id});
    default:
      return state;
  }
};

export default sessionReducer;
