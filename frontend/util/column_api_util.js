export const fetchProjectColumns = (teamId, projectId) => {
  return $.ajax({
    method: 'GET',
    url: `api/teams/${teamId}/projects/${projectId}/columns`
  });
};

export const createColumn = (column, projectId, teamId) => {

  return $.ajax({
    method: 'POST',
    url: `api/teams/${teamId}/projects/${projectId}/columns/`,
    data: { column }
  });
};

export const updateColumn = (column, projectId, teamId) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/teams/${teamId}/projects/${projectId}/columns/${column.id}`,
    data: {column}
  });
};

export const deleteColumn = (columnId, projectId, teamId) => {

  return $.ajax({
    method: 'DELETE',
    url: `api/teams/${teamId}/projects/${projectId}/columns/${columnId}`
  });
};
