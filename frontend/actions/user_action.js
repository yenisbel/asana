import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';


export const receiveUsers = (users) => {
  return {
    type: RECEIVE_ALL_USERS,
    users
  };
};


export const requestAllUsers = () => dispatch => {

  return UserAPIUtil.fetchUsers().then(users => (
    dispatch(receiveUsers(users))
  ));
};

