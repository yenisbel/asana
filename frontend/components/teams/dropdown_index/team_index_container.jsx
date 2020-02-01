import { connect } from 'react-redux';
import TeamIndex from './team_index';
import { requestAllTeams, deleteTeam } from '../../../actions/team_actions';
import { logout } from '../../../actions/session_actions';
import { closeTeamDropdown } from '../../../actions/ui_actions';
import { openModal } from '../../../actions/modal_actions';


const msp = (state, ownProps) => {
  
  return {
    teams: Object.values(state.entities.teams),
    teamId: state.session.currentTeamId
  };
};

const mdp = dispatch => {
  return {
    requestAllTeams: () => dispatch(requestAllTeams()),
    logout: () => dispatch(logout()),
    closeTeamDropdown: () => dispatch(closeTeamDropdown()),
    openModal: (modal) => dispatch(openModal(modal)),
    deleteTeam: (teamId) => dispatch(deleteTeam(teamId))
  };
};

export default connect(msp, mdp)(TeamIndex);
