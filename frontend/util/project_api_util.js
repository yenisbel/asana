export const fetchAllProjects = (teamId) => {
  
  return $.ajax({
    method: 'GET',
    url: `api/teams/${teamId}/projects`
  });
};

export const fetchSingleProject = (id, teamId) => {

  return $.ajax({
    method: 'GET',
    url: `api/teams/${teamId}/projects/${id}`
  });
};

export const createProject = (project, teamId) => {
  return $.ajax({
    method: 'POST',
    url: `api/teams/${teamId}/projects`,
    data: { project }
  });
};

export const updateProject = (project, teamId) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/teams/${teamId}/projects/${project.id}`,
    data: { project }
  });
};

export const deleteProject = (id, teamId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/teams/${teamId}/projects/${id}`,
  });
};
