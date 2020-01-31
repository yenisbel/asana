import React from 'react';
import { Link } from 'react-router-dom';

const TeamIndexItem = props => (
  <li>
    <Link to={`/teams/${props.team.id}`}>{props.team.name}</Link>
    <Link to={`/teams/${props.team.id}/edit`}>Edit</Link>
    <button onClick={() => props.deleteTeam(props.team.id)}>Delete Team</button>
  </li>
);

export default TeamIndexItem;