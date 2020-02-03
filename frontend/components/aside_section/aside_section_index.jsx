import React from 'react';
import { Link } from 'react-router-dom';
import { closeNav } from '../../actions/ui_actions';

class AsideSectionProjectIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const { teamId, requestTeam, requestAllProjects, requestAllMembers } = this.props;
    requestTeam(teamId);
  }

  componentDidUpdate(prevProps){
    if (prevProps.location.pathname != this.props.location.pathname){

      this.props.requestTeam(this.props.teamId);
      this.props.requestAllMembers(this.props.teamId);
      this.props.requestAllProjects(this.props.teamId);
    }
  }

  render(){
    const { teamName, teamId, members, teams, projects, deselectNewColumn, deselectEdit, closeDropdown, hideTaskNew, closeDropdownTask, closeTeamDropdown } = this.props;
    return (
      <aside id="aside-index" className="aside-index"
        style={{ width: this.props.sidebar ? '250px' : "0" }}
        onClick={() => {
          deselectNewColumn();
          deselectEdit();
          closeDropdown();
          hideTaskNew();
          closeDropdownTask();
          closeTeamDropdown();
        }}>
        <section className="aside-project-index" >
          <div className="aside-top">
            <Link to={`/teams/${teamId}`} className="logo">
              <h1>Dashboard</h1>
            </Link>
            <button className="closebtn" onClick={this.props.closeNav}> &#9776;</button>
          </div>
          <section className="aside-projects-members">
            <label className="team-header">
              <div className="team-name">
                {teamName}
              </div>
            </label>
            <section className="members-projects-section">
              <div className="aside-members">
                <label className="aside-members-header">
                  Members
                </label>
                <ul className="team-members-list">
                  {members.map((member, i) => (
                    <li className="team-member" key={`member-${i}`}>
                      {member.username}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="aside-projects">
                <label className="aside-projects-header">
                  Projects
                </label>
                <ul className="aside-projects-list">
                  {projects.map((project, i)=> (
                    <Link to={`/teams/${teamId}/projects/${project.id}`} key={`project-${i}`} className="link-project-aside">
                      <li className="aside-project">
                        <svg className="li-square" style={{ backgroundColor: `#blue`}}></svg>
                        {project.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </section>
          </section>
        </section>
      </aside>
    );
  }
}

export default AsideSectionProjectIndex;
