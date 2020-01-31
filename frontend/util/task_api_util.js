
export const fetchTasks = (teamId, projectId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/teams/${teamId}/projects/${projectId}/tasks`
    });
};


export const fetchTask = (teamId, projectId, id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/teams/${teamId}/projects/${projectId}/tasks/${id}`
    });
};

export const createTask = (task, teamId, projectId) => {
    return $.ajax({
        method: 'POST',
        url: `/api/teams/${teamId}/projects/${projectId}/tasks`,
        data: { task }
    });
};

export const updateTask = (task, teamId, projectId) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/teams/${teamId}/projects/${projectId}/tasks/${task.id}`,
        data: { task }
    });
};

export const deleteTask = (teamId, projectId, id) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/teams/${teamId}/projects/${projectId}/tasks/${id}`
    });
};