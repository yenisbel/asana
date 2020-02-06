import React from 'react';
import { withRouter } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'style-loader!css-loader!react-datepicker/dist/react-datepicker.css';
import UserListDropdown from "./user_list_dropdown";

class TaskForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: props.task.id,
      title: props.task.title,
      description: props.task.description,
      completed: props.task.completed,
      due_on: props.task.due_on,
      assignee_id: this.props.currentUserId,
      author_id: this.props.currentUserId,   
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.handleDateChange =this.handleDateChange.bind(this);
    this.selectUser = this.selectUser.bind(this);
    // this.setDateButton = this.setDateButton.bind(this);
    // this.setDueDate = this.setDueDate.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const { task, column, project, updateTask, closeModal, teamId } = this.props;
    this.update(e.target.id)(e);
    const newTask = Object.assign({}, this.state);
    updateTask(newTask, column.id, project.id, teamId);
  }

  componentDidUpdate(prevProps){
    const { task, column, project, fetchTask, updateTask, teamId } = this.props;

    if (this.needsUpdate(prevProps, this.state)){ 
      const newTask = Object.assign(task, this.state);
      updateTask(newTask, column.id, project.id, teamId);
    }
  }

  needsUpdate(prevProps, state){
    const prevDate = prevProps.task.due_date != "" ? new Date(prevProps.task.due_date) : "";
    const date = this.state.due_date != "" ? new Date(this.state.due_date) : "";
    if (prevProps.task.title != state.title){
      return true;
    } else if (prevProps.task.description != state.description) {
      return true;
    } else if (prevProps.task.completed != state.completed) {
      return true;
    } else if (this.myGetTime(prevDate) != this.myGetTime(date)) {
      return true;
    } else {
      return false;
    }
  }

  myGetTime(date){
    if (date === ""){
      return new Date(null).getTime();
    } else {
      return date.getTime();
    }
  }

  update(field) {
    return e => {
      if (e.key === undefined){
        this.setState({ [field]: this.state[field].slice(0, -1)});
      } else {
        this.setState({ [field]: this.state[field] + e.key });
      }
    };
  }

  toggleComplete(){
    const {updateTask, column, project, task } = this.props;
    if (this.state.completed === false){
      this.setState({completed: true});
    } else if (this.state.completed === true) {
      this.setState({completed: false});
    }
  }

  toggleLabel(){
    if(this.state.completed === false){
      return "Mark as Completed";
    } else if (this.state.completed === true) {
      return "Completed";
    }
  }

  handleDateChange(date){
    this.setState({
      due_on: date
    });
  }

  displayUserDropdown() {
    const userDropdown = document.getElementById("user-dropdown-menu")
    userDropdown.className = "user-dropdown-menu";
  }

  selectUser(id) {
    return e => {
      e.preventDefault();
      e.stopPropagation();
      const userDropdown = document.getElementById("user-dropdown-menu")
      userDropdown.className = "user-dropdown-menu-hidden";
      this.setState({ assignee_id: id });
    };
  }

  toggleTaskAssignment() {
    const { assignee_id } = this.state;
    const { users } = this.props;
    const assignee = users[assignee_id];
    const { full_name, username } = assignee;

    return (
        <div className="task-show-assign-button" onClick={this.displayUserDropdown}>
            <div>
              <p className="task-show-assign-text1"><i className="fas fa-users"></i> Assigned to:
                <span className="task-show-assign-text2">{full_name ? full_name : username}</span>
              </p>

              <UserListDropdown selectUser={this.selectUser} />
            </div>
        </div>
    );
  }

  toggleTaskAuthored() {
    const { author_id } = this.state;
    const { users } = this.props;
    const author = users[author_id];
    const { full_name, username } = author;

    return (
        <div>
            <div>
              <p className="task-show-assign-text1"><i className="fas fa-users"></i> Reported by:
                <span className="task-show-assign-text2">{full_name ? full_name : username}</span>
              </p>
            </div>
        </div>
    );
  }


  render(){
    const { task, column, project, closeModal } = this.props;
    return (
      <section className="task-pane">
        <div className="single-task-pane">
          <form className="task-box" onKeyPress={this.handleSubmit}>
            <div className="single-task-scrollable">
              <div className="task-toolbar">
                <div className="task-toolbar-items">
                  <div className={`complete-task ${this.state.completed}`} onClick={this.toggleComplete}>
                    <i className="fas fa-check"></i>
                    {this.toggleLabel()}
                  </div>
                </div>
                <div className="three-dot-menu-task">
                </div>
                <div className="close-x" onClick={() => closeModal()}>&times;</div>
              </div>
              <div className="task-title">
                <div className="title-task">
                  <textarea id="title" className="title-task-textarea"
                    rows="1"
                    onChange={this.update('title')}
                    value={this.state.title}>
                  </textarea>
                </div>
              </div>
              <div className="assignee-date-task">
                <div className="due-date-task">
                  <div className="due-date-task-token">
                    <div className="date-token-button" >
                      <div className="task-token-icon">
                        <div className="task-icon">
                          <i className="fas fa-calendar fa-task"></i>
                        </div>
                      </div>
                      <div className="task-token-label">
                        <DatePicker
                          selected={this.state.due_on != null ? new Date(this.state.due_on) : null}
                          onChange={this.handleDateChange}
                          dateFormat="MMMM d, yyyy"
                          className="date-picker"
                          placeholderText="Due Date"
                          minDate={new Date()}
                          showDisabledMonthNavigation
                          ></DatePicker>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
              <div className="task-description-pane">
                  <section className="task-show-section1">
                    <div className="task-show-section1-bottom">  
                      {/* {this.toggleTaskAssignment()} */}
                    </div>
                  </section>
              </div>
              <div className="task-description-pane">
                  <section className="task-show-section1">
                    <div>      
                      {this.toggleTaskAuthored()}
                    </div>
                  </section>
              </div>
              <div className="task-description-pane">
                <div className="task-description-label">
                  <i className="fas fa-align-left fa-task"></i>
                </div>
                <div className="task-description">
                  <div className="description-task">
                    <textarea id="description" className="description-task-textarea"
                      onChange={this.update('description')}
                      value={this.state.description}
                      placeholder="Description"
                      ></textarea>
                  </div>
                </div>
              </div>
              <div className="task-projects">
                <div className="task-projects-label">
                  <i className="fas fa-clipboard-list fa-task"></i>
                </div>
                <div className="task-projects">
                  <div className="task-project-list">
                    <div className="task-project-token">
                      <div className="task-project-link">
                        <div className="task-pill">
                          <span>{project.name}</span>
                        </div>
                      </div>
                      <div className="task-column-link">
                        <span>{column.name}</span>
                        <i></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default TaskForm;
