import { DESELECT_EDIT, SELECT_EDIT } from '../actions/ui_actions';

const EditReducer = (state = false, action) => {
  Object.freeze(state);
  switch (action.type) {
    case DESELECT_EDIT:
      return action.editing;
    case SELECT_EDIT:
      return action.editing;
    default:
    return state;
  }
};

export default EditReducer;
