import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProjectForm from './project_form';
import { createProject, removeErrors } from '../../../actions/project_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { Link } from 'react-router-dom';
import React from 'react';

const msp = ({ errors, session, entities }, ownProps) => {
  
  const teamId = session.currentTeamId;
  return {
    formType: 'Create Project',
    errors: errors.project,
    formMessage: "New Project",
    project: {name: '', description:'', teamId: `${teamId}`},
    teamId
  };
};

const mdp = dispatch => {
  return {
    action: (project, teamId) => dispatch(createProject(project, teamId)),
    removeErrors: () => dispatch(removeErrors()),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(ProjectForm);
