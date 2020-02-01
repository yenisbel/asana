import { CLOSE_NAV, OPEN_NAV } from '../actions/ui_actions';
import merge from 'lodash/merge';

const sidebarReducer = (state = true, action) => {
  Object.freeze(state);
  switch (action.type) {
    case CLOSE_NAV:
      return action.sidebar;
    case OPEN_NAV:
      return action.sidebar;
    default:
      return state;
  }
};

export default sidebarReducer;
