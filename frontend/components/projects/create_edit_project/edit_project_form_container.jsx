import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProjectForm from './project_form';
import { updateProject, removeErrors } from '../../../actions/project_actions';
import { closeModal, openModal } from '../../../actions/modal_actions';
import { Link } from 'react-router-dom';
import React from 'react';

const msp = ({errors, session, entities}) => {
  const teamId = session.currentTeamId
  return {
    formType: 'Update Project',
    errors: errors.project,
    formMessage: 'Edit',
    project: entities.projects[session.currentProjectId] || {name: '', description:'', teamId: `${teamId}`},
    teamId
  };
};

const mdp = dispatch => {
  return {
    action: (project, teamId) => dispatch(updateProject(project, teamId)),
    removeErrors: () => dispatch(removeErrors()),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(ProjectForm);
