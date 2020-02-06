import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TeamForm from './team_form';
import { createTeam } from '../../../actions/team_actions';
import { requestAllUsers } from '../../../actions/user_action';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { Link } from 'react-router-dom';
import React from 'react';

const msp = ({ errors, session, entities }, ownProps) => {

  const teamId = session.currentTeamId;
  return {
    formType: 'Create Team',
    errors: errors.team,
    formMessage: "Create new team",
    team: {name: '', members:''},
    teamId
  };
};

const mdp = dispatch => {
  return {
    action: (team) => dispatch(createTeam(team)),
    closeModal: () => dispatch(closeModal()),
    requestAllUsers: (teamId) => dispatch(requestAllUsers(teamId))
  };
};

export default connect(msp, mdp)(TeamForm);
