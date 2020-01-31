
import { Link } from 'react-router-dom';
import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    // this.props.processForm(user).then((res) => {
    //   this.props.closeModal();
    //   this.props.history.push(`/teams/${res.team.id}`);
    // });
  }


  componentWillUnmount() {
    if (this.props.formType === 'Login' || this.props.formType === 'Signup'){
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
    const link = this.props.formType === "Signup" ? <Link to="/login">Log in</Link> : <Link to="/signup">Sign up</Link>
    return (
      <div className="content">
        <div onClick={this.props.closeModal} className="close-x">&times;</div>
        <div className="login-form-container">
          {/* <h1>{this.props.formTitle}</h1> */}
          <form onSubmit={this.handleSubmit} className="login-form-box">
            {/* {this.renderErrors()} */}
            <h2>Please {this.props.formType} or {link}</h2> 
            <div className="login-form">
              <label>Email
                <input id="email" type="text" value={this.state.email} onChange={this.update("email")} className="login-input" required placeholder="myemail@company.com"/>
              </label>
                
              <label>Password
                <input id="password" type="password" value={this.state.password} onChange={this.update("password")} className="login-input" required placeholder="password"/>
              </label>
              <input className="session-submit button" type="submit" value={this.props.formType} />
            </div>
          </form>
          {/* <footer>
            <p>{this.props.navMessage}</p> {this.props.otherForm}
          </footer> */}
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);


// export default SessionForm;