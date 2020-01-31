export const OPEN_NAV = 'OPEN_NAV';
export const CLOSE_NAV = 'CLOSE_NAV';
export const DESELECT_NEW = 'DESELECT_NEW';
export const SELECT_NEW = 'SELECT_NEW';
export const OPEN_DROPDOWN = 'OPEN_DROPDOWN';
export const CLOSE_DROPDOWN = 'CLOSE_DROPDOWN';
export const DESELECT_EDIT = 'DESELECT_EDIT';
export const SELECT_EDIT = 'SELECT_EDIT';
export const OPEN_TASK_NEW = 'OPEN_TASK_NEW';
export const CLOSE_TASK_NEW = 'CLOSE_TASK_NEW';
export const OPEN_DROPDOWN_TASK = 'OPEN_DROPDOWN_TASK';
export const CLOSE_DROPDOWN_TASK = 'CLOSE_DROPDOWN_TASK';
export const OPEN_DROPDOWN_TEAM = 'OPEN_DROPDOWN_TEAM';
export const CLOSE_DROPDOWN_TEAM = 'CLOSE_DROPDOWN_TEAM';

export const openNav = () => {
  return {
    type: OPEN_NAV,
    sidebar: true
  };
};

export const closeNav = () => {

  return {
    type: CLOSE_NAV,
    sidebar: false
  };
};

export const deselectNewColumn = () => {
  return {
    type: DESELECT_NEW,
    creating: false
  };
};

export const selectNewColumn = () => {
  return {
    type: SELECT_NEW,
    creating: true
  };
};

export const openDropdownTask = (taskId) => {
  return {
    type: OPEN_DROPDOWN_TASK,
    dropdownTask: true,
    taskId
  };
};

export const closeDropdownTask = () => {
  return {
    type: CLOSE_DROPDOWN_TASK,
    dropdownTask: false,
  };
};

export const openDropdown = (columnId) => {
  return {
    type: OPEN_DROPDOWN,
    dropdown: true,
    columnId
  };
};

export const closeDropdown = () => {
  return {
    type: CLOSE_DROPDOWN,
    dropdown: false
  };
};

export const selectEdit = (columnId) => {
  return {
    type: SELECT_EDIT,
    editing: true,
    columnId
  };
};

export const deselectEdit = () => {
  return {
    type: DESELECT_EDIT,
    editing: false
  };
};

export const hideTaskNew = () => {
  return {
    type: CLOSE_TASK_NEW,
    creatingT: false
  };
};

export const displayTaskNew = (columnId) => {
  return {
    type: OPEN_TASK_NEW,
    creatingT: true,
    columnId
  };
};

export const openTeamDropdown = () => {
  return {
    type: OPEN_DROPDOWN_TEAM,
    teamsDropdown: true
  };
};

export const closeTeamDropdown = () => {
  return {
    type: CLOSE_DROPDOWN_TEAM,
    teamsDropdown: false
  };
};
