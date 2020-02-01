import { connect } from 'react-redux';
import NewColumn from './new_column_form';
import { createColumn } from '../../../actions/column_actions';
import React from 'react';
import { deselectEdit, closeDropdown, hideTaskNew, closeDropdownTask } from '../../../actions/ui_actions';

const msp = (state, ownProps) => {
  return {
    projectId: ownProps.projectId,
    teamId: state.session.currentTeamId
  };
};

const mdp = dispatch => {
  return {
    createColumn: (column, projectId, teamId) => dispatch(createColumn(column, projectId, teamId)),
    deselectEdit: () => dispatch(deselectEdit()),
    closeDropdown: () => dispatch(closeDropdown()),
    hideTaskNew: () => dispatch(hideTaskNew()),
    closeDropdownTask: () => dispatch(closeDropdownTask())
  };
};

export default connect(msp, mdp)(NewColumn);
