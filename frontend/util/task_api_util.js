export const fetchProjectTasks = (teamId, projectId, columnId) => {

  return $.ajax({
    method: 'GET',
    url: `api/teams/${teamId}/projects/${projectId}/columns/${columnId}/tasks`
  });
};

export const createTask = (task, columnId, projectId, teamId) => {
  return $.ajax({
    method: 'POST',
    url: `api/teams/${teamId}/projects/${projectId}/columns/${columnId}/tasks/`,
    data: { task }
  });
};

export const updateTask = (task, columnId, projectId, teamId) => {
  //test
  return $.ajax({
    method: 'PATCH',
    url: `api/teams/${teamId}/projects/${projectId}/columns/${columnId}/tasks/${task.id}`,
    data: { task }
  });
};

export const deleteTask = (taskId, columnId, projectId, teamId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/teams/${teamId}/projects/${projectId}/columns/${columnId}/tasks/${taskId}`
  });
};

export const fetchTask = (taskId, columnId, projectId, teamId) => {
  return $.ajax({
    method: 'GET',
    url: `api/teams/${teamId}/projects/${projectId}/columns/${columnId}/tasks/${taskId}`
  });
};
