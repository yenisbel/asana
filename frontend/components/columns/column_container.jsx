import React from 'react';
import { connect } from 'react-redux';

import { deleteColumn, updateColumn } from '../../actions/column_actions';
import Column from './column';
import { selectEdit, deselectEdit, openDropdown, closeDropdown, displayTaskNew, hideTaskNew, openDropdownTask, closeDropdownTask } from '../../actions/ui_actions';

const msp = (state, ownProps) => {
  const columnId = parseInt(ownProps.column.id);
  const column = state.entities.columns[columnId] || {};
  const teamId = state.session.currentTeamId;
  const tasks = ((column && column.task_ids) ? column.task_ids.map(id => state.entities.tasks[id]) : []);
  const taskIds = column.task_ids;
  return {
    projectId: ownProps.column.project_id,
    editing: state.ui.editing,
    currentColumn: state.entities.columns[state.session.currentColumnId],
    dropdown: state.ui.dropdown,
    tasks,
    taskIds,
    creatingT: state.ui.creatingT,
    teamId
  };
};

const mdp = dispatch => {
  return {
    deleteColumn: (columnId, projectId, teamId) => dispatch(deleteColumn(columnId, projectId, teamId)),
    updateColumn: (column, projectId, teamId) => dispatch(updateColumn(column, projectId, teamId)),
    selectEdit: (columnId) => dispatch(selectEdit(columnId)),
    deselectEdit: () => dispatch(deselectEdit()),
    openDropdown: (columnId) => dispatch(openDropdown(columnId)),
    closeDropdown: () => dispatch(closeDropdown()),
    displayTaskNew: (columnId) => dispatch(displayTaskNew(columnId)),
    hideTaskNew: () => dispatch(hideTaskNew()),
    openDropdownTask: () => dispatch(openDropdownTask()),
    closeDropdownTask: () => dispatch(closeDropdownTask())
  };
};

export default connect(msp, mdp)(Column);
