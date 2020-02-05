export const selectProject = ({ projects }, projectId) =>{
  
  return projects[projectId] || {taskIds : [], column};
};

export const selectAllProjects = state => {
  return Object.values(state.entities.projects);
};


export const selectAllTasks = state => {
  return Object.values(state.entities.tasks);
};

export const selectAllUsers = state => {
  return Object.values(state.entities.users);
}

export const selectAllTeams = state => {
  return Object.values(state.entities.teams);
}