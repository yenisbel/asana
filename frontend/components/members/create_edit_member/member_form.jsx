import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router-dom';
import Search from 'react-search';
import AutoComplete from "./auto";
import { requestAllUsers } from "../../../actions/user_action";


class MemberForm extends React.Component {
  constructor(props){
    super(props);
    // this.state = this.props.member;
    this.state = {
      full_name: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.requestAllUsers()
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const member = Object.assign({}, this.state);
    const { teamId } = this.props;
    this.props.action(member, teamId).then(({member}) => {
      this.props.closeModal();
      if (this.props.formType === 'Add Member'){
        this.props.history.push(`/teams/${teamId}`);
      } else {
        this.props.history.push(`/teams/${teamId}`);
      }
    });
  }


  render() {
      const {users} = this.props;
    return (
      <section className="new-edit-modal">
        <div className="new-edit-header">
          <div onClick={this.props.closeModal} className="close-x">&times;</div>
          <h1>{this.props.formMessage}</h1>
        </div>
        <form onSubmit={this.handleSubmit} className="create-edit-box">
          {/* {this.renderErrors()} */}
          <div className="create-edit-form">
                
            <div className="create-edit-name">
              <label htmlFor="username" className="label-name">
                Name
              </label>
                 <input id="username" type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="create-edit-input-name"/> 
            </div>
            <div className="interactive">
                <ul>
                  <p>Suggestions name to type... </p>
                  { Object.values(users).map((member, i) => (
                    <li key={`member-${i}`} member={member} className="just-suggest">{member.username}</li>
                    ))
                  }
                </ul>
                  
                  
                
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

export default withRouter(MemberForm);
