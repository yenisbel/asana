import merge from 'lodash/merge';
import {RECEIVE_ALL_USERS, RECEIVE_USER} from "../actions/user_action";
import { RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_TEAM} from '../actions/team_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {[action.currentUser.id]: action.currentUser});
    case RECEIVE_TEAM:
      return merge({}, action.payload.members);
    case RECEIVE_ALL_USERS:
      return merge({}, state, action.users);
    case RECEIVE_USER:
      const { user } = action;
      return merge({}, state, { [user.id]: user });
    default:
      return state;
  }
};

export default usersReducer;
