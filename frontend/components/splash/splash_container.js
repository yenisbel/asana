import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import Splash from './splash';
import { openNav, deselectNewColumn, deselectEdit, closeDropdown, hideTaskNew, closeDropdownTask, openTeamDropdown, closeTeamDropdown } from '../../actions/ui_actions';
import { withRouter } from 'react-router-dom';

const msp = ({ session, entities, ui }, ownProps) => {

  const teamId = session.currentTeamId;
  return {
    currentUser: entities.users[session.currentUserId],
    sidebar: ui.sidebar,
    currentProject: (ownProps.location.pathname === `/teams/${teamId}`) ? null : entities.projects[session.currentProjectId],
    teamsDropdown: ui.teamsDropdown
  };
};

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: (modal, projectId) => dispatch(openModal(modal, projectId)),
  closeModal: () => dispatch(closeModal()),
  openNav: () => dispatch(openNav()),
  deselectNewColumn: () => dispatch(deselectNewColumn()),
  deselectEdit: () => dispatch(deselectEdit()),
  closeDropdown: () => dispatch(closeDropdown()),
  hideTaskNew: () => dispatch(hideTaskNew()),
  closeDropdownTask: () => dispatch(closeDropdownTask()),
  openTeamDropdown: () => dispatch(openTeamDropdown()),
  closeTeamDropdown: () => dispatch(closeTeamDropdown())
});

export default withRouter(connect(msp, mdp)(Splash));
