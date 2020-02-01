import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TeamForm from './team_form';
import { updateTeam, removeErrors } from '../../../actions/team_actions';
import { closeModal, openModal } from '../../../actions/modal_actions';
import { Link } from 'react-router-dom';
import React from 'react';

const msp = ({errors, session, entities}) => {
  const teamId = session.currentTeamId
  return {
    formType: 'Update Team',
    errors: errors.team,
    formMessage: 'Edit',
    team: entities.teams[session.currentTeamId] || {name: '', members:''},
    teamId
  };
};

const mdp = dispatch => {
  return {
    action: (team) => dispatch(updateTeam(team)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(TeamForm);
