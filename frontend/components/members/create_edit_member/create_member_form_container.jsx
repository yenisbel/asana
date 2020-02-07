import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MemberForm from './member_form';
import { requestAllUsers } from "../../../actions/user_action";
import { selectAllUsers } from "../../../reducers/selectors";
import { createMember} from '../../../actions/member_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { Link } from 'react-router-dom';
import React from 'react';

const msp = ({ errors, session, entities }, ownProps) => {
  
  const teamId = session.currentTeamId;
  return {
    formType: 'Add Member',
    errors: errors.team,
    formMessage: "New Member",
    member: {username: '', teamId: `${teamId}`},
    teamId,
    users: entities.users
  };
};

const mdp = dispatch => {
  return {
    action: (member, teamId) => dispatch(createMember(member, teamId)),
    closeModal: () => dispatch(closeModal()),
    requestAllUsers: () => dispatch(requestAllUsers())
  };
};

export default connect(msp, mdp)(MemberForm);