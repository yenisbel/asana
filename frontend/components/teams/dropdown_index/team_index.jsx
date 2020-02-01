import React from 'react';
import { Link } from 'react-router-dom';

class TeamIndex extends React.Component {
  constructor(props){
    super(props);
    this.redirect = this.redirect.bind(this);
    this.removeButton = this.removeButton.bind(this);
  }

  componentDidMount(){
    this.props.requestAllTeams();
  }

  redirect(team){

    this.props.history.push(`${team.id}`);
  }

  removeButton(redirectTeam){
    const { deleteTeam, closeTeamDropdown, teamId } = this.props;
    if (this.props.teams.length > 1){
      return <div className="team-button" onClick={() => {
          deleteTeam(teamId);
          closeTeamDropdown();
          this.redirect(redirectTeam);
        }}>
        Remove me from this Team
      </div>;
    } else {
      return <div className="no-button"></div>;
    }
  }

  render() {
    const { teams, logout, closeTeamDropdown, createTeam, openModal, deleteTeam, teamId } = this.props;
    const redirectTeam = teams[0];
    return (
      <div className="layer-positioner-team">
        <div className="layer">
          <div className="dropdown-team">
            <div className="menu-team">
              <div className="teams">
                {teams.map((team, i) => (
                  <Link to={`/teams/${team.id}`} key={`team-${i}`} className="team-button" onClick={() => closeTeamDropdown()}>
                    <li className="team-item">
                      {team.name}
                    </li>
                  </Link>
                ))}
              </div>
              <div className="menu-separator">
              </div>
              <div className="team-button" onClick={() => {
                  openModal('Create Team');
                  closeTeamDropdown();
                }}>
                <span className="team-item">
                  Create New Team
                </span>
              </div>
              <div className="team-button" onClick={() => {
                  openModal('Update Team');
                  closeTeamDropdown();
                }}>
                <span className="team-item">
                  Update Team
                </span>
              </div>
              {this.removeButton(redirectTeam)}
              <div className="menu-separator">
              </div>
              <div className="team-button">
                <span className="team-item">
                  My Profile Settings
                </span>
              </div>
              <div className="team-button" onClick={() => {
                  logout();
                  closeTeamDropdown();
                }}>
                <span className="team-item">
                  Log Out
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TeamIndex;
