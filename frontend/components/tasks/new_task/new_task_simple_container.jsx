import React from 'react';
import { connect } from 'react-redux';

import NewTask from './new_task_simple';
import { createTask } from '../../../actions/task_actions';
import { hideTaskNew } from '../../../actions/ui_actions';

const msp = (state, ownProps) => {
  const teamId = state.session.currentTeamId;
  return {
    creatingT: state.ui.creatingT,
    projectId: ownProps.projectId,
    columnId: ownProps.columnId,
    currentColumn: state.entities.columns[state.session.currentColumnId],
    teamId
  };
};

const mdp = dispatch => {
  return {
    createTask: (task, columnId, projectId, teamId) => dispatch(createTask(task, columnId, projectId, teamId)),
    hideTaskNew: () => dispatch(hideTaskNew())
  };
};

export default connect(msp, mdp)(NewTask);
