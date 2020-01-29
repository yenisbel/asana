import React from 'react';
import { fetchTeams } from '../actions/team_actions';

class TeamIndex extends React.Component {
    componentDidMount() {
      this.props.fetchTeams()
    }
  
    render() {
      const { teams } = this.props;   
      if (teams === undefined) return <h1>No teams yet!</h1>

      return (
          <div>
              <ul>
                  {
                    Object.values(teams).map(b => (
                            // <BItem/>
                        <li>{b.description}</li>
                        )
                    )
                  }
              </ul>
          </div>
      )
    }
}

  export default TeamIndex;