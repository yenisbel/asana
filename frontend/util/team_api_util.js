export const fetchAllTeams = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/teams'
  });
};

export const fetchTeam = id => {

  return $.ajax({
    method: 'GET',
    url: `api/teams/${id}`
  });
};

export const createTeam = team => {
  return $.ajax({
    method: 'POST',
    url: 'api/teams',
    data: { team }
  });
};

export const updateTeam = team => {
  return $.ajax({
    method: 'PATCH',
    url: `api/teams/${team.id}`,
    data: { team }
  });
};

export const deleteTeam = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/teams/${id}`
  });
};
