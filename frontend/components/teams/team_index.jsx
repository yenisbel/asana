import React from 'react';
import { requestTeams } from '../../actions/team_actions';
import TeamIndexItem from './team_index_item';
import { Link } from "react-router-dom";
import CreateTeamContainer from './create_team_container';

class TeamIndex extends React.Component {
    constructor(props){
      super(props);
    }

    componentDidMount() {
      this.props.requestTeams()
    }

    render() {
      const { teams, teamId, createTeam, deleteTeam, logout } = this.props;   
      if (teams === undefined) return <h1>No teams yet!</h1>

      return (
          <div>
              <ul>
                  {
                    teams.map(team => (
                      <TeamIndexItem
                        team={team}
                        deleteTeam={deleteTeam}
                        key={team.id}
                      />
                    ))
                  }
              </ul>
              <CreateTeamContainer /> 
          </div>
      )
    }
}

export default TeamIndex;