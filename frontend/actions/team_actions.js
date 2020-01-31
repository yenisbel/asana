import * as TeamAPIUtil from "../util/team_api_util";

export const RECEIVE_TEAMS = 'RECEIVE_TEAMS';
export const RECEIVE_TEAM = 'RECEIVE_TEAM';
export const REMOVE_TEAM = 'REMOVE_TEAM';


const receiveTeams = teams => {
    return {
        type: RECEIVE_TEAMS,
        teams
    }
};

const receiveTeam = (payload) => {
    return {
        type: RECEIVE_TEAM,
        payload
    };
};

const removeTeam = teamId => {
    return {
        type: REMOVE_TEAM,
        teamId
    };
};

export const requestTeams = ()=> dispatch => (
    TeamAPIUtil.fetchTeams().then(teams => dispatch(receiveTeams(teams)))
);

export const requestTeam = (id)=> dispatch => (
    TeamAPIUtil.fetchTeam(id).then(payload => dispatch(receiveTeam(payload)))
);

export const createTeam = (team)=> dispatch => (
    TeamAPIUtil.createTeam(team).then(team => dispatch(receiveTeam(team)))
);

export const updateTeam = (team) => dispatch => (
    TeamAPIUtil.updateTeam(team).then(team => dispatch(receiveTeam(team)))
);

  
// export const deleteTeam = (id) => dispatch => (
//     TeamAPIUtil.deleteTeam(id).then(team => (dispatch(removeTeam(id)))
// )

export const deleteTeam = teamId => dispatch => {
    return TeamAPIUtil.deleteTeam(teamId).then(team => (
      dispatch(removeTeam(teamId))
    ));
};

window.requestTeams = requestTeams;
window.requestTeam = requestTeam;
window.createTeam = createTeam;