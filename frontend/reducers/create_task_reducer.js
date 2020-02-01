import { OPEN_TASK_NEW, CLOSE_TASK_NEW } from '../actions/ui_actions';

const CreateTaskReducer = (state = false, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_TASK_NEW:
      return action.creatingT;
    case CLOSE_TASK_NEW:
      return action.creatingT;
    default:
      return state;
  }
};

export default CreateTaskReducer;
