import { RECEIVE_PROJECT, RECEIVE_PROJECTS, REMOVE_PROJECT } from '../actions/project_actions';
import { RECEIVE_TEAM } from '../actions/team_actions';


const ProjectsReducer = (state = {}, action) => {
  let nextState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROJECT:
      return Object.assign({}, state, {[action.project.id]: action.project});
    case RECEIVE_PROJECTS:
      return Object.assign({}, state, action.projects);
    case REMOVE_PROJECT:
      nextState = Object.assign({}, state);
      delete nextState[action.projectId];
      return nextState;
    // case RECEIVE_task and remove_task pending
    case RECEIVE_TEAM:
      return Object.assign({}, action.payload.projects);
    default:
      return state;
  }
};

export default ProjectsReducer;