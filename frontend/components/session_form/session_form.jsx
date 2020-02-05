import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  update(field){
    return e => this.setState({ [field]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then((res) => {
      this.props.closeModal();
      this.props.history.push(`/teams/${res.team.id}`);
    });
  }

  componentWillUnmount() {

    if (this.props.formType === 'Log In' || this.props.formType === 'Sign Up'){
      this.props.removeErrors();
    }
  }

  renderErrors() {

    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {

    return (
      <div className="content">
        <div onClick={this.props.closeModal} className="close-x">&times;</div>
        <div className="login-form-container">
          <h1>{this.props.formTitle}</h1>
          <form onSubmit={this.handleSubmit} className="login-form-box">
            {this.renderErrors()}
            <div className="login-form">
              <label htmlFor="username">
                Username 
              </label>
                <input id="username" type="text"
                  onChange={this.update('username')}
                  value={this.state.username}
                  className="login-input" required placeholder="username or email"/>
              <label htmlFor="password">
                Password
              </label>
                <input id="password" type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input" required placeholder="Password"/>
                <input className="session-submit button" type="submit" value={this.props.formType} />                
            </div>
          </form>
          <footer>
            <p>{this.props.navMessage}</p> {this.props.otherForm}
          </footer>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
