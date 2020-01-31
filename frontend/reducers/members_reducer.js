import {RECEIVE_TEAM} from '../actions/team_actions';

const membersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TEAM:
      return merge({}, action.payload.members);
    default:
      return state;
  }
};

export default membersReducer;