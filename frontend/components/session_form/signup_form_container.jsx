import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { requestAllTeams, createTeam } from '../../actions/team_actions';
import { signup, removeErrors, demoLogin } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const msp = (state) => {
  return {
    errors: state.errors.session,
    formType: 'Sign Up',
    navMessage: "Already have an account?",
    formTitle: 'Sign up'
  };
};

const mdp = dispatch => {
  return {
    createTeam: (team) => dispatch(createTeam(team)),
    processForm: user => dispatch(signup(user)),
    removeErrors: () => dispatch(removeErrors()),
    demoLogin: () => dispatch(demoLogin()),
    otherForm: (
      <button className="modal-login" onClick={() => dispatch(openModal('Log In'))}>
        Log In
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(SessionForm);

//still need to mdp for the demoLogin
