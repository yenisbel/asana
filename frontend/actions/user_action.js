import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';


export const receiveUsers = (users) => {
  return {
    type: RECEIVE_ALL_USERS,
    users
  };
};

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user,
  };
};

export const requestUsersByTeam = (teamId) => dispatch => {
  return UserAPIUtil.fetchUsersByTeam(teamId).then(users => (
    dispatch(receiveUsers(users))
  ));
};

export const requestAllUsers = () => dispatch => {
  return UserAPIUtil.fetchUsers().then(users => (
    dispatch(receiveUsers(users))
  ));
};

export const requestUser = (id) => dispatch => {
  return UserAPIUtil.fetchUser(id).then(user => (
    dispatch(receiveUser(user))
  ));
};


export const updateUser = (user) => dispatch => {
  return UserAPIUtil.updateUser(user).then(updatedUser => (
    dispatch(receiveUser(updatedUser))
  )); 
};