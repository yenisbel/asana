import { connect } from 'react-redux';
import { requestAllColumns } from '../../../actions/column_actions';
import { requestProject } from '../../../actions/project_actions';
import { selectProject } from '../../../reducers/selectors';
import ProjectShow from './project_show';
import { requestAllTasks } from '../../../actions/task_actions';
import { deselectNewColumn, selectNewColumn, deselectEdit, hideTaskNew } from '../../../actions/ui_actions';
import React from 'react';

const msp = (state, { match }) => {
  const teamId = parseInt(match.params.teamId);
  const projectId = parseInt(match.params.projectId);
  const project = state.entities.projects[projectId];
  const columns = ((project && project.column_ids) ? project.column_ids.map(id => state.entities.columns[id]) : []);
  const columnId = columns.length !== 0 ? state.entities.projects[projectId].column_ids[0] : null;
  return {
    projectId,
    project,
    columns,
    sidebar: state.ui.sidebar,
    creating: state.ui.creating,
    teamId,
    columnId
  };
};

const mdp = dispatch => {
  return {
    requestAllColumns: (teamId, projectId) => dispatch(requestAllColumns(teamId, projectId)),
    requestProject: (id, teamId) => dispatch(requestProject(id, teamId)),
    deselectNewColumn: () => dispatch(deselectNewColumn()),
    selectNewColumn: () => dispatch(selectNewColumn()),
    deselectEdit: () => dispatch(deselectEdit()),
    hideTaskNew: () => dispatch(hideTaskNew()),
    requestAllTasks: (teamId, projectId, columnId) => dispatch(requestAllTasks(teamId, projectId, columnId))
  };
};

export default connect(msp, mdp)(ProjectShow);
