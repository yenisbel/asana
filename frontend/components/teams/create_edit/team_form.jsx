import React from 'react';
import { withRouter } from 'react-router-dom';

class TeamForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.team;
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  update(field) {
    return e => this.setState({ [field]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const team = Object.assign({}, this.state);
    const { teamId } = this.props;
    this.props.action(team).then((res) => {
      this.props.closeModal();
      this.props.history.push(`/teams/${res.payload.team.id}`);
    });
  }

  // componentWillUnmount() {
  //   if (this.props.formType === 'Create Team' || this.props.formType === 'Edit Team'){
  //     this.props.removeErrors();
  //   }
  // }

  

  render() {
    return (
      <section className="team-modal">
        <div className="new-edit-header">
          <div onClick={this.props.closeModal} className="close-x">&times;</div>
          <h1>{this.props.formMessage}</h1>
        </div>
        <form onSubmit={this.handleSubmit} className="create-edit-box">
          <div className="create-edit-form">
            <div className="create-edit-name">
              <label htmlFor="team-name" className="label-team-name">
                Team Name
              </label>
                <input id="team" type="text"
                  onChange={this.update('name')}
                  value={this.state.name}
                  className="create-edit-input-name"/>
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

export default withRouter(TeamForm);
