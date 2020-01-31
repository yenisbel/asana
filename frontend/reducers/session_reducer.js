import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions"
import { RECEIVE_PROJECT, RECEIVE_PROJECTS } from "../actions/project_actions";
import { RECEIVE_TEAM } from "../actions/team_actions";

const _nullSession = {
    currentUserId: null,
    currentTeamId: null,
    currentProjectId: null,
    currentTaskId: null
};

const sessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { currentUserId: action.currentUser.id, currentTeamId: action.team.id };
        case RECEIVE_PROJECT:
            return Object.assign({}, state, {currentProjectId: action.project.id});
        
        case RECEIVE_PROJECTS:
            if (Object.keys(action.projects).length != 0) {
                const projectId = parseInt(Object.keys(action.projects)[0]);
                const teamId = action.projects[projectId].team_id;
                return Object.assign({}, state, {currentTeamId: teamId});
            }
            return state;
        case RECEIVE_TEAM:
            return Object.assign({}, state, {currentTeamId: action.payload.team.id});
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return state;
    }
};

export default sessionReducer