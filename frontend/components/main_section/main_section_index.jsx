import React from 'react';
import ProjectIndexItem from '../projects/index_project/project_index_item_container';
import MemberIndexItem from '../members/index_member/member_index_item_container';
import { Link } from 'react-router-dom';

class MainSectionProjectIndex extends React.Component {

  componentDidMount(){

    this.props.requestTeam(this.props.teamId);
    this.props.requestAllProjects(this.props.teamId);
    this.props.requestAllMembers(this.props.teamId);

  }

  componentDidUpdate(prevProps){
    if (prevProps.location.pathname != this.props.location.pathname){
      
      this.props.requestTeam(this.props.teamId);
      this.props.requestAllProjects(this.props.teamId);
      this.props.requestAllMembers(this.props.teamId);
    }
  }

  render(){
    const { teamId, projects, members, openModal, deleteProject, deleteMember, closeTeamDropdown } = this.props;
    return (
      // ui: { sidebarIsOpen: true/false }
      <div id="index" className="index" style={{ marginLeft: this.props.sidebar ? '250px' : '0' }} onClick={() => closeTeamDropdown()}>
        <div className="wrapper">
        <section className="main-index">
          <h1 className="project-index">Projects</h1>
          <section className="main-projects">
            <div className="projects-list">
              {projects.map(project => (
                <ProjectIndexItem key={project.id}
                  project={project}
                  openModal={this.props.openModal}
                  deleteProject={this.props.deleteProject}
                  teamId={teamId}/>
                ))}
              <button className="project-index-item new-project" onClick={() => {
                  openModal('Create Project');
                }}>
                <div className="tile-structure">
                  <div className="tile-s-child">
                    <div className="tile-new">
                      <div className="card">
                        <i className="fas fa-plus project-new"></i>
                      </div>
                    </div>
                  </div>
                  <p className="label-projects">New Project</p>
                </div>
              </button>
            </div>
          </section>
          <h1 className="project-index">Members</h1> 
          <section className="main-projects">
            <div className="projects-list">
              {members.map(member => (
                <MemberIndexItem key={member.id}
                  openModal={this.props.openModal}
                  deleteMember={this.props.deleteMember}
                  member={member}
                  teamId={teamId}/>
                ))}
              <button className="project-index-item new-project" onClick={() => {
                  openModal('Create Member');
                }}>
                <div className="tile-structure">
                  <div className="tile-s-child">
                    <div className="tile-new">
                      <div className="card">
                        <i className="fas fa-plus project-new"></i>
                      </div>
                    </div>
                  </div>
                  <p className="label-projects">New Member</p>
                </div>
              </button>
            </div>
          </section>     
        </section>
        </div>
      </div>
    );
  }
}

export default MainSectionProjectIndex;
