import { connect } from 'react-redux';
import TeamShow from './team_show';
import { requestTeam } from '../../actions/team_actions';

const mapStateToProps = (state, ownProps) => ({
  team: state.teams[ownProps.match.params.teamId]
});

const mapDispatchToProps = dispatch => ({
  requestTeam: teamId => dispatch(requestTeam(teamId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamShow);