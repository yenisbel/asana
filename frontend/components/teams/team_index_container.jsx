import {connect} from "react-redux";
import TeamIndex from "./team_index"; 
import {requestTeams, deleteTeam} from "../../actions/team_actions";
import {logout} from '../../actions/session_actions';
import {closeTeamDropdown} from '../../actions/ui_actions';
import {openModal} from '../../actions/modal_actions';
const mapStateToProps = (state) => {
    return {
        teams: Object.values(state.entities.teams),
        teamId: state.session.currentTeamId
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        requestTeams: () => dispatch(requestTeams()),
        logout: () => dispatch(logout()),
        closeTeamDropdown: () => dispatch(closeTeamDropdown()),
        openModal: (modal) => dispatch(openModal(modal)),
        deleteTeam: (teamId) => dispatch(deleteTeam(teamId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamIndex);