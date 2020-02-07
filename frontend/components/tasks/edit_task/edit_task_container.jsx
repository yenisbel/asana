import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TaskForm from './edit_task';
import { closeModal } from '../../../actions/modal_actions';
import { updateTask, fetchTask } from '../../../actions/task_actions';
import { selectAllUsers } from '../../../reducers/selectors';

const msp =({ session, entities }, ownProps) => {
  const task = entities.tasks[session.currentTaskId] || {};
  const column = entities.columns[task.column_id] || {};
  const teamId = session.currentTeamId;
  const users = entities.users;
  const currentUserId = session.currentUserId;
  const currentUser = users[currentUserId];
  
  return {
    project: entities.projects[session.currentProjectId],
    task,
    users,
    column,
    teamId,
    currentUser,
    currentUserId,
  }
}

const mdp = dispatch => {
  return {
    updateTask: (task, columnId, projectId, teamId) => dispatch(updateTask(task, columnId, projectId, teamId)),
    closeModal: () => dispatch(closeModal()),
    fetchTask: (id, columnId, projectId, teamId) => dispatch(fetchTask(id, columnId, projectId, teamId))
  }
}

export default connect(msp, mdp)(TaskForm);
