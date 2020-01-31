import React from 'react';
import { Link } from 'react-router-dom';

class TeamShow extends React.Component {
  componentDidMount() {
    this.props.requestTeam(this.props.match.params.teamId);
  }

  render() {
    const { team } = this.props;

    return (
      <div>
        <h1>{team.name}</h1>
        <p>{team.description}</p>
        <Link to="/" />
      </div>
    );
  }
}

export default TeamShow;