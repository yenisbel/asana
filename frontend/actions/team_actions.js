import * as TeamAPIUtil from '../util/team_api_util';

export const RECEIVE_ALL_TEAMS = 'RECEIVE_ALL_TEAMS';
export const RECEIVE_TEAM = 'RECEIVE_TEAM';
export const REMOVE_TEAM = 'REMOVE_TEAM';

export const receiveTeam = (payload) => {
  return {
    type: RECEIVE_TEAM,
    payload
  };
};

export const receiveAllTeams = teams => {
  return {
    type: RECEIVE_ALL_TEAMS,
    teams
  };
};

export const removeTeam = teamId => {
  return {
    type: REMOVE_TEAM,
    teamId
  };
};

export const requestAllTeams = () => dispatch => {
  return TeamAPIUtil.fetchAllTeams().then(teams => (
    dispatch(receiveAllTeams(teams))
  ));
};

export const requestTeam = id => dispatch => {

  return TeamAPIUtil.fetchTeam(id).then(payload => {
    return dispatch(receiveTeam(payload));
  });
};

export const createTeam = team => dispatch => {
  return TeamAPIUtil.createTeam(team).then(team => {
    return dispatch(receiveTeam(team));
  });
};

export const updateTeam = team => dispatch => {
  return TeamAPIUtil.updateTeam(team).then(team => {
    return dispatch(receiveTeam(team));
  });
};

export const deleteTeam = teamId => dispatch => {
  return TeamAPIUtil.deleteTeam(teamId).then(team => (
    dispatch(removeTeam(teamId))
  ));
};
