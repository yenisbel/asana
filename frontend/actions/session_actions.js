import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';

export const receiveCurrentUser = ({user, team}) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser: user,
  team
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => {

  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const demoLogin = () => dispatch => {

  return (APIUtil.login({username: 'Demo User', password: 'hogwarts', teamId: 1}).then(payload => (
    dispatch(receiveCurrentUser(payload))
    ), err => (dispatch(receiveErrors(err.responseJSON))))
  );
};

export const removeErrors = () => {
  return {
    type: REMOVE_ERRORS
  };
};

export const signup = user => dispatch => {

  return (APIUtil.signup(user).then(payload => (
    dispatch(receiveCurrentUser(payload))
  ), err => (dispatch(receiveErrors(err.responseJSON))))
  );
};

export const login = user => dispatch => (
  APIUtil.login(user).then(payload => (
    dispatch(receiveCurrentUser(payload))
  ), err => (dispatch(receiveErrors(err.responseJSON))))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => (
    dispatch(logoutCurrentUser())
  ))
);
