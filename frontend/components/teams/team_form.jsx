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
    this.props.action(this.state);
    // const team = Object.assign({}, this.state);
    // const { teamId } = this.props;
    // this.props.action(team).then((res) => {
    //   this.props.history.push(`/teams/${res.payload.team.id}`);
    // });
  }

  render() {
    return (
      <div>
        <h3>{this.props.formType}</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type='text'
              value={this.state.title}
              onChange={this.update('name')}
            />
          </label>
          <label>
            Description
            <textarea
              value={this.state.body}
              onChange={this.update('description')}
            />
          </label>
          <button type='submit' value={this.props.formType} />
        </form>
      </div>
    );
  }

}

export default TeamForm;