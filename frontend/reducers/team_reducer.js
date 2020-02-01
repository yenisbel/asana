import { RECEIVE_TEAM, RECEIVE_ALL_TEAMS, REMOVE_TEAM } from '../actions/team_actions';
import { RECEIVE_PROJECT, REMOVE_PROJECT } from '../actions/project_actions';
import merge from 'lodash/merge';

const TeamsReducer = (state = {}, action) => {

  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TEAM:
      return merge({}, state, {[action.payload.team.id]: action.payload.team});
    case RECEIVE_ALL_TEAMS:
      return merge({}, state, action.teams);
    case REMOVE_PROJECT:

      newState = merge({}, state);
      const projectIds = newState[action.teamId].project_ids;
      projectIds.splice(projectIds.indexOf(action.projectId), 1);
      return newState;
    case REMOVE_TEAM:
      newState = merge({}, state);
      delete newState[action.teamId];
      return newState;
    default:
      return state;
  }
};

export default TeamsReducer;
