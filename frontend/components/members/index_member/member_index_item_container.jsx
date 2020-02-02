import React from 'react';
import { Link } from 'react-router-dom';
 
const MemberIndexItem  = ({ teamId, member, openModal, deleteMember }) => {

  return (
    <Link to={`/teams/${teamId}/members/${member.id}`} className="project-index-item">
      <div className="tile-structure">
        <div className="tile-s-child">
          <div className="tile" style={{ backgroundColor: `#pink` }}>
            <div className="card"></div>
            <button className="body-delete" onClick={(e) => {
                e.preventDefault();
                deleteMember(member.id, teamId);
              }}>Delete</button>
          </div>
        </div>
        <p className="label-projects">{`${member.username}`}</p>
      </div>
    </Link>
  )
}

export default MemberIndexItem;