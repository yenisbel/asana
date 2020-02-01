import { OPEN_DROPDOWN_TEAM, CLOSE_DROPDOWN_TEAM } from '../actions/ui_actions';
import merge from 'lodash/merge';

const TeamDropdownReducer = (state = false, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_DROPDOWN_TEAM:
      return action.teamsDropdown;
    case CLOSE_DROPDOWN_TEAM:
      return action.teamsDropdown;
    default:
      return state;
  }
};

export default TeamDropdownReducer;
