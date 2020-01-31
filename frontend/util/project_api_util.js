
export const fetchProjects = (teamId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/teams/${teamId}/projects`
    });
};

export const fetchProject = (teamId, id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/teams/${teamId}/projects/${id}`
    });
};

export const createProject = (teamId, project) => {
    return $.ajax({
        method: 'POST',
        url: `/api/teams/${teamId}/projects`,
        data: { project }
    });
};

export const updateProject = (teamId, project) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/teams/${teamId}/projects/${project.id}`,
        data: { project }
    });
};

export const deleteProject = (teamId, id) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/teams/${teamId}/projects/${id}`
    });
};