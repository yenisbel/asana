import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TeamForm from './team_form';
import { updateTeam, requestTeam } from '../../actions/team_actions';
import { Link } from 'react-router-dom';
import React from 'react';

class EditTeamForm extends React.Component {
    componentDidMount() {
      this.props.requestTeam(this.props.match.params.teamId);
    }
  
    render() {
  
      const { action, formType, team } = this.props;
  
      if (!team) return null;
      return (
        <TeamForm
          action={action}
          formType={formType}
          team={team} />
      );
    }
  }
  
  const mapStateToProps = (state, ownProps) => ({
    team: state.teams[ownProps.match.params.teamId],
    formType: 'Update Team'
  });
  
  const mapDispatchToProps = dispatch => ({
    requestTeam: teamId => dispatch(requestTeam(teamId)),
    action: team => dispatch(updateTeam(team))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditTeamForm);