import React from 'react';
import { Link } from 'react-router-dom';


const ProjectIndexItem = ({ teamId, project, openModal, deleteProject }) => {

  return (
    <Link to={`/teams/${teamId}/projects/${project.id}`} className="project-index-item">
      <div className="tile-structure">
        <div className="tile-s-child">
          <div className="tile" style={{ backgroundColor: `#${project.color}` }}>
            <div className="card"></div>
            <button className="body-edit" onClick={(e) => {
                e.preventDefault();
                openModal('Update Project', project.id)
              }}>Edit</button>
            <button className="body-delete" onClick={(e) => {
                e.preventDefault();
                deleteProject(project.id, teamId);
              }}>Delete</button>
          </div>
        </div>
          <p className="label-projects">{project.name}</p>
      </div>
    </Link>
  )
}

export default ProjectIndexItem;
