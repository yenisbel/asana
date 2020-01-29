import {connect} from "react-redux";
import TeamIndex from "./team_index"; 
import {fetchTeams} from "../actions/team_actions";

const mapStateToProps = (state) => {
    return {
        teams: state.entities.teams
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTeams: () => dispatch(fetchTeams())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TeamIndex);