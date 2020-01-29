import * as APIUtil from "../util/team_api_util";

export const RECEIVE_TEAMS = 'RECEIVE_TEAMS';
export const RECEIVE_TEAM = 'RECEIVE_TEAM';


const receiveTeams = teams => {
    return {
        type: RECEIVE_TEAMS,
        teams
    }
};

const receiveTeam = team => {
    return {
        type: RECEIVE_TEAM,
        team
    }
};

export const fetchTeams = ()=> dispatch => (
    APIUtil.fetchTeams().then( teams => dispatch(receiveTeams(teams)))
);

export const fetchTeam = (id)=> dispatch => (
    APIUtil.fetchTeam(id).then( team => dispatch(receiveTeam(team)))
);

window.fetchTeams = fetchTeams;
window.fetchTeam = fetchTeam;