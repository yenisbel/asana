import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MemberForm from './member_form';
import { createMember} from '../../../actions/member_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { Link } from 'react-router-dom';
import React from 'react';

const msp = ({ session, entities }, ownProps) => {
  
  const teamId = session.currentTeamId;
  return {
    formType: 'Create Member',
    formMessage: "New Member",
    member: {username: '', teamId: `${teamId}`},
    teamId
  };
};

const mdp = dispatch => {
  return {
    action: (member, teamId) => dispatch(createMember(member, teamId)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(MemberForm);