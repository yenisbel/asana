import { OPEN_DROPDOWN, CLOSE_DROPDOWN } from '../actions/ui_actions';
import merge from 'lodash/merge';

const DropdownReducer = (state = false, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_DROPDOWN:
      return action.dropdown;
    case CLOSE_DROPDOWN:
      return action.dropdown;
    default:
      return state;
  }
};

export default DropdownReducer;
