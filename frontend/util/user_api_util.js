export const fetchUser = id => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  });
};

export const fetchUsers = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/users'
  });
};


export const updateUser = (user) => {
  const { username, password, full_name, photo_url } = user;
  return $.ajax({
      method: "PATCH",
      url: `api/users/${user.id}`,
      data: {
        user: {
          password, 
          username,   
          full_name,
          photo_url,
        }
      },
  });
};
