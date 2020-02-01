import * as ColumnAPIUtil from '../util/column_api_util';

export const RECEIVE_ALL_COLUMNS = 'RECEIVE_ALL_COLUMNS';
export const RECEIVE_COLUMN = 'RECEIVE_COLUMN';
export const REMOVE_COLUMN = 'REMOVE_COLUMN';

export const receiveColumns = (columns) => {
  return {
    type: RECEIVE_ALL_COLUMNS,
    columns
  };
};

export const receiveColumn = (payload) => {

  return {
    type: RECEIVE_COLUMN,
    payload
  };
};

export const removeColumn = (payload) => {

  return {
    type: REMOVE_COLUMN,
    payload
  };
};


export const requestAllColumns = (teamId, projectId) => dispatch => {
  return ColumnAPIUtil.fetchProjectColumns(teamId, projectId).then(columns => (
    dispatch(receiveColumns(columns))
  ));
};

export const createColumn = (column, projectId, teamId) => dispatch => {

  return ColumnAPIUtil.createColumn(column, projectId, teamId).then(res => {
    return dispatch(receiveColumn(res));
  });
};

export const updateColumn = (column, projectId, teamId) => dispatch => {
  return ColumnAPIUtil.updateColumn(column, projectId, teamId).then(res => (
    dispatch(receiveColumn(res))
  ));
};

// change to payload?

export const deleteColumn = (columnId, projectId, teamId) => dispatch => {

  return ColumnAPIUtil.deleteColumn(columnId, projectId, teamId).then(res => {

    return dispatch(removeColumn(res));
  });
};
