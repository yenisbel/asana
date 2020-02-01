export const fetchAllMembers = (teamId) => {
  
    return $.ajax({
      method: 'GET',
      url: `api/teams/${teamId}/members`
    });
};
  
export const fetchSingleMember = (id, teamId) => {
    return $.ajax({
      method: 'GET',
      url: `api/teams/${teamId}/members/${id}`
    });
};
  
export const createMember = (member, teamId) => {
    return $.ajax({
      method: 'POST',
      url: `api/teams/${teamId}/members`,
      data: { member }
    });
};

export const deleteMember = (id, teamId) => {
    return $.ajax({
      method: 'DELETE',
      url: `api/teams/${teamId}/members/${id}`,
    });
};