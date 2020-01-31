import { RECEIVE_TEAMS, RECEIVE_TEAM, REMOVE_TEAM } from "../actions/team_actions";
import { REMOVE_PROJECT } from "../actions/project_actions";
const teamsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TEAMS:
      return action.teams;
    case RECEIVE_TEAM:
      return Object.assign({}, state, {[action.payload.team.id]: action.payload.team});
    // case rEMOVE_PROJECT pending   
    case REMOVE_TEAM:
      let nextState = Object.assign({}, state);
      delete nextState[action.teamId];
      return nextState;
    default:
      return state;
  }
};

export default teamsReducer;