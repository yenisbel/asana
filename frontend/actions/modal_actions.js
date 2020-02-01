export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal, projectId, taskId) => {
  return {
    type: OPEN_MODAL,
    modal,
    projectId,
    taskId 
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};
