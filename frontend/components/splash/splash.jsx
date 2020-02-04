import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import TeamIndex from '../teams/dropdown_index/team_index_container';

class Splash extends React.Component {
  constructor(props){
    super(props);
    this.dropdownTeamsOpen = this.dropdownTeamsOpen.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  renderHeader(){

    const { currentProject, teamId } = this.props;
    if (currentProject){
      return (<h1>{currentProject.name}</h1>);
    } else {
      return (
        <Link to={`/teams/${teamId}`} className="header-link-greeting">
          <h1>Home</h1>
        </Link>
      );
    }
  }

  links() {
    const { openModal, closeModal } = this.props;
    return (
    <div>
      <nav className="login-signup">
        <button className="header-login" onClick={() => openModal('Log In')}>Log In</button>
        &nbsp;
        <button className="header-signup" onClick={() => openModal('Sign Up')}>Sign Up</button>
      </nav>
      <section className="section-splash">
        <div className="splash-content">
          <section className="splash-content-text">
            <div className="further-div">
              <h1 className="splash-h1">Less friction. More flow. Give Teams Better Clarity</h1>
              <p className="splash-text">BlueAsana simplifies team-based work management</p>
            </div>
          </section>
          
          <button className="header-signup trial" onClick={() => openModal('Sign Up')}>Try for free</button>
        </div>
      </section>
    </div>
  );
  }

  dropdownTeamsOpen() {
    const { teamsDropdown } = this.props;
    if (teamsDropdown) {
      return <TeamIndex history={this.props.history}/>;
    } else {
      return <div className="no-dropdown-teams"></div>;
    }
  }

  toggleDropdown(){
    const { closeTeamDropdown, openTeamDropdown, teamsDropdown } = this.props;
    if (teamsDropdown === false){
      openTeamDropdown();
    } else {
      closeTeamDropdown();
    }
  }

  greeting() {
    const { currentUser, logout, openModal, deselectNewColumn, deselectEdit, closeDropdown, hideTaskNew, closeDropdownTask, closeTeamDropdown, openTeamDropdown } = this.props;

    // let name = currentUser.username.split('@')[0];

    return (
      <section>
        <header>
          <nav className="header" onClick={() => {
              deselectNewColumn();
              deselectEdit();
              closeDropdown();
              hideTaskNew();
              closeDropdownTask();
            }}>
            <div className="left" onClick={() => closeTeamDropdown()}>
              <button className="ham-button" onClick={this.props.openNav}>&#9776;</button>
            </div>
            <div className="high-right">
              <div className="low-left" style={{ marginLeft: this.props.sidebar ? '270px' : '60px'}} onClick={() => closeTeamDropdown()}>
                {this.renderHeader()}
              </div>
              <div className="right">
                <button className="header-new" onClick={() => {
                    closeTeamDropdown();
                    openModal('Create Project');
                  }}>+</button>
                <button className="user-menu" onClick={() => this.toggleDropdown()}>{currentUser.username}</button>
                <div className="teams-dropdown">
                  {this.dropdownTeamsOpen()}
                </div>
              </div>
            </div>
            <div className="header-shadow" onClick={() => closeTeamDropdown()}></div>
          </nav>
        </header>
      </section>
    );

  }

  render() {
    const { currentUser } = this.props;
    return currentUser ? this.greeting() : this.links();

  }
}

export default Splash;
