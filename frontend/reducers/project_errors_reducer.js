import { RECEIVE_PROJECT_ERRORS, REMOVE_ERRORS } from '../actions/project_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROJECT_ERRORS:
    if (action.errors){
      return action.errors;
    }
      break;
    case REMOVE_ERRORS:
      return [];
    default:
    return state;
  }
};
