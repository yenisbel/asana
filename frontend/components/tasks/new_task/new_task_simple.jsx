import React from 'react';

class NewTask extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      completed: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps){
    this._textarea.focus();
  }

  handleSubmit(e) {
    e.preventDefault();
    const { projectId, columnId, createTask, teamId } = this.props;
    const task = Object.assign({}, this.state);
    if (e.key === 'Enter'){
      if (this.state.title === ''){
        this.props.hideTaskNew();
      } else {

        createTask(task, columnId, projectId, teamId).then(() => this.setState({ title: ''}));
      }
    } else {
      this.update()(e);
    }
  }

  update() {
    return e => {

      if (e.key === undefined){
        return this.setState({ title: this.state.title.slice(0, -1)});
      } else {
        return this.setState({ title: this.state.title + e.key});
      }
    };
  }

  render(){
    const { creatingT, currentColumn, columnId } = this.props;

    return (
      <div className={(creatingT && (currentColumn.id === columnId)) ? "draggable-task-wrapper" : "task-wrapper-none"}>
        <div className={(creatingT && (currentColumn.id === columnId)) ? "task-container" : "container-none"}>
          <div className={(creatingT && (currentColumn.id === columnId)) ? "task-content" : "content-none"}>
            <div className={(creatingT && (currentColumn.id === columnId)) ? "task-properties" : "properties-none"}>
              <div className={(creatingT && (currentColumn.id === columnId)) ? "task-properties-title" : "properties-title-none"}>
                <form className={(creatingT && (currentColumn.id === columnId)) ? "new-task-form" : "new-task-form-none"} onKeyPress={this.handleSubmit}>
                  <textarea type="text" className="new-task-title"
                    rows="1"
                    onChange={this.update()}
                    value={this.state.title}
                    ref={c => this._textarea = c}
                    ></textarea>
                </form>
              </div>
              <div className="task-dropdown">
              </div>
            </div>
            <div className="task-meta-data">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewTask;
