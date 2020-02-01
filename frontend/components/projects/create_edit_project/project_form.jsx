import React from 'react';
import { withRouter } from 'react-router-dom';

class ProjectForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.project;
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  update(field) {
    return e => this.setState({ [field]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const project = Object.assign({}, this.state);
    const { teamId } = this.props;
    this.props.action(project, teamId).then(({project}) => {
      this.props.closeModal();
      if (this.props.formType === 'Create Project'){
        this.props.history.push(`/teams/${teamId}/projects/${project.id}`);
      } else {
        this.props.history.push(`/teams/${teamId}`);
      }
    });
  }

  componentWillUnmount() {
    if (this.props.formType === 'Create Project' || this.props.formType === 'Edit Project'){
      this.props.removeErrors();
    }
  }

  renderErrors(){
    return (
      <ul className="project-errors">
        <div className="error-container">
          {this.props.errors.map((error, i) => (
            <li className="p-error" key={`error-${i}`}>
              {error}
            </li>
          ))}
        </div>
      </ul>
    );
  }

  render() {
    return (
      <section className="new-edit-modal">
        <div className="new-edit-header">
          <div onClick={this.props.closeModal} className="close-x">&times;</div>
          <h1>{this.props.formMessage}</h1>
        </div>
        <form onSubmit={this.handleSubmit} className="create-edit-box">
          {this.renderErrors()}
          <div className="create-edit-form">
            <div className="create-edit-name">
              <label htmlFor="name" className="label-name">
                Name
              </label>
                <input id="name" type="text"
                  onChange={this.update('name')}
                  value={this.state.name}
                  className="create-edit-input-name"/>
            </div>
            <div className="create-edit-description">
              <label htmlFor="description" className="label-description">
                Description
              </label>
              <textarea id="description" type="text"
                onChange={this.update('description')}
                value={this.state.description}
                className="create-edit-input-description"/>
            </div>
              <div className="create-edit-button">
                <input className="create-edit-submit" type="submit" value={this.props.formType}/>
              </div>
          </div>
        </form>
      </section>
    );
  }

}

export default withRouter(ProjectForm);
