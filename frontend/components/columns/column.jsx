import React from 'react';
import merge from 'lodash/merge';
import Task from '../tasks/task_container.jsx';
import NewTask from '../tasks/new_task/new_task_simple_container';

class Column extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.column.name
    };
    this.headerOrEdit = this.headerOrEdit.bind(this);
    this.dropdownOpen = this.dropdownOpen.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.deleteButton = this.deleteButton.bind(this);
    this.displayTasks = this.displayTasks.bind(this);
  }

  taskIds(){
    const { taskIds, creatingT, currentColumn, column } = this.props;
    return ((taskIds.length > 0) || (creatingT && currentColumn.id === column.id)) ? "not-empty" : "empty";
  }

  deleteButton(column) {
    const { teamId, deleteColumn, projectId, taskIds } = this.props;
    return (taskIds.length > 0) ? <span className="no-delete"></span> : <button className="column-menu-item" onClick={() => deleteColumn(column.id, projectId)}><span className="column-menu-item-label">Delete</span></button>;
  }

  handleEdit(e) {
    const { projectId, teamId } = this.props;
    e.preventDefault();
    this.props.column.name = this.state.name;
    const column = Object.assign({}, this.props.column );
    if (e.key === 'Enter'){
      this.props.deselectEdit();
      this.props.updateColumn(column, projectId, teamId);
    } else {
      this.update()(e);
    }
  }

  update() {
    return e => {
      if (e.key === undefined){
        return this.setState({ name: this.state.name.slice(0, -1)});
      } else {
        return this.setState({ name: this.state.name + e.key});
      }
    };
  }

  dropdownOpen(){
    const { dropdown, column, currentColumn, selectEdit, closeDropdown, deleteButton } = this.props;
    if (!currentColumn){
      return <div className="no-dropdown"></div>;
    } else if ((dropdown === true ) && (column.id === currentColumn.id)){


      return (
        <div className="layer-positioner">
          <div className="layer">
            <div className="dropdown-edit-delete">
              <div className="column-menu">
                  <button className="column-menu-item"
                    onClick={() => {
                      selectEdit(column.id);
                      closeDropdown();
                    }}>
                    <span className="column-menu-item-label">
                      Edit
                    </span>
                  </button>
                {this.deleteButton(column)}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  headerOrEdit(){
    const { column, currentColumn, openDropdown, deselectEdit, hideTaskNew, closeDropdownTask } = this.props;
    if ((this.props.editing === false) || (column.id != currentColumn.id)){
      return (
        <div className="column-header-wrapper">
          <h1>{column.name}</h1>
          <i className="fas fa-angle-down"
            onClick={() => {
              openDropdown(column.id);
              deselectEdit();
              hideTaskNew();
              closeDropdownTask();
            }}></i>
        </div>);
    } else {
      return (<form className="new-board-form" onKeyPress={this.handleEdit}>
        <input type="text" className="new-column-name"
          onChange={this.update()}
          value={this.state.name}
          placeholder="New Column"
          autoFocus></input>
      </form>);
    }
  }

  displayTasks(){
    const { tasks, column, projectId } = this.props;
    if (tasks.length === 0){
      return <div className="no-tasks"></div>;
    } else {
      return tasks.map(task => (
      <Task key={task.id}
        task={task}
        columnId={column.id}
        projectId={projectId}/>
    ));
    }
  }

  render(){
    const { column, projectId, deselectEdit, closeDropdown, dropdownOpen, currentColumn, tasks, displayTaskNew, hideTaskNew, openDropdownTask, closeDropdownTask } = this.props;
  
    return (
      <div className="column-wrapper">
        <div className="board-column">
          <div className="draggable">
            <div className="board-column-header" onClick={() => closeDropdownTask()}>
              {this.headerOrEdit()}
              {this.dropdownOpen()}
            </div>
          </div>
          <div className="board-column-body"
            onClick={() => {
              deselectEdit();
              closeDropdown();
            }}>
            <button className="add-card" onClick={() => displayTaskNew(column.id)}>
              <i className="fas fa-plus plus-task"></i>
            </button>
            <div className="card-container">
              <div className={this.taskIds()}>
                <div className="card-scrollable">
                  <div className="cards">
                    <NewTask projectId={projectId}
                      columnId={column.id}/>
                    <div className="tasks-main" onClick={() => hideTaskNew()}>
                      {this.displayTasks()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Column;
