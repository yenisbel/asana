import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TaskForm from './edit_task';
import { closeModal } from '../../../actions/modal_actions';
import { updateTask, fetchTask } from '../../../actions/task_actions';

const msp =({ session, entities }) => {
  const task = entities.tasks[session.currentTaskId] || {};
  const column = entities.columns[task.column_id] || {};
  const teamId = session.currentTeamId;
  return {
    project: entities.projects[session.currentProjectId],
    task,
    column,
    teamId
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
