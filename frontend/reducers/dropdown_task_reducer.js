import { OPEN_DROPDOWN_TASK, CLOSE_DROPDOWN_TASK } from '../actions/ui_actions';
import merge from 'lodash/merge';

const DropdownTaskReducer = (state = false, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_DROPDOWN_TASK:
      return action.dropdownTask;
    case CLOSE_DROPDOWN_TASK:
      return action.dropdownTask;
    default:
      return state;
  }
};

export default DropdownTaskReducer;
