import { DESELECT_NEW, SELECT_NEW } from '../actions/ui_actions';

import merge from 'lodash/merge';

const selectionReducer = (state = false, action) => {
  Object.freeze(state);
  switch (action.type) {
    case DESELECT_NEW:
      return action.creating;
    case SELECT_NEW:
      return action.creating;
    default:
      return state;
  }
};

export default selectionReducer;
