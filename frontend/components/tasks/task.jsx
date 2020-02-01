import React from 'react';

class Task extends React.Component {
  constructor(props){
    super(props);
    this.dropdownTaskOpen = this.dropdownTaskOpen.bind(this);
  }

  dropdownTaskOpen(){
    const { dropdownTask, task, currentTask, selectEdit, closeDropdown, deleteTask, deselectEdit, columnId, projectId, teamId } = this.props;
    //
    if (!currentTask){
      return <div className="no-dropdown"></div>;
    } else if ((dropdownTask === true ) && (task.id === currentTask.id)){

      return (
        <div className="layer-positioner-task">
          <div className="layer">
            <div className="dropdown-delete">
              <div className="task-menu">
                <button className="delete-task" onClick={() => {
                    deleteTask(task.id, columnId, projectId, teamId);
                    closeDropdown();
                    deselectEdit();
                  }}><span>Delete</span></button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  render(){
    const { dropdownTask2, task, hideTaskNew, openDropdownTask, deselectEdit, deselectNewColumn, openModal, projectId, closeModal, closeDropdownTask } = this.props;
    return (
      <div className="draggable-task-wrapper">
        <div className="task-container" onClick={() => hideTaskNew()}>
          <div className="task-content">
            <div className="task-properties">
              <div className="task-properties-title">
                <h1 className="task-h1" onClick={() => {
                    openModal('Task Modal', projectId, task.id);
                    closeDropdownTask();
                  }}>
                  {task.title}
                </h1>
                  <i className="fas task-angle-down fa-angle-down"
                    onClick={() => {
                      openDropdownTask(task.id);
                      deselectEdit();
                      deselectNewColumn();
                      hideTaskNew();
                    }}></i>
              </div>
              <div className="task-dropdown" >
                {this.dropdownTaskOpen()}
              </div>
            </div>
            <div className="task-meta-data" onClick={() => {
                openModal('Task Modal', projectId, task.id);
                closeDropdownTask();
              }}>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Task;
