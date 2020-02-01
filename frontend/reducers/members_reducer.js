import merge from 'lodash/merge';
import { RECEIVE_MEMBER, RECEIVE_ALL_MEMBERS, REMOVE_MEMBER } from '../actions/member_actions';
import {RECEIVE_TEAM} from '../actions/team_actions';

const membersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MEMBER:
      return merge({}, state, {[action.member.id]: action.member});
    case RECEIVE_ALL_MEMBERS:
      return merge({}, state, action.members);
    case REMOVE_MEMBER:
      let newState = merge({}, state);
      delete newState[action.memberId];
      return newState;
    case RECEIVE_TEAM:
      return merge({}, action.payload.members);
    default:
      return state;
  }
};

export default membersReducer;
