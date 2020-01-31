import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginForm from '../session/login_form_container';
import SignupForm from '../session/signup_form_container';
import CreateTeamContainer from '../teams/create_team_container';
import EditTeamContainer from '../teams/edit_team_container';

const Modal = ({ modal, closeModal }) => {

  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'Log In':
      component = <LoginForm />;
      break;
    case 'Sign Up':
      component = <SignupForm />;
      break;
    case 'Create Team':
      component = <CreateTeamContainer />;
      break;
    case 'Update Team':
      component = <EditTeamContainer />;
      break;
    default:
      return null;
  }
  const cases = modal.split(' ')
  const classname = `modal-background ${cases[0].toLowerCase()}-${cases[1].toLowerCase()}`
  return (
    <div className="top-layer">
      <div className={classname} onClick={closeModal}>
        <div className="top-buffer"></div>
          <div className={`modal-child ${cases[0].toLowerCase()}-${cases[1].toLowerCase()}-child`} onClick={e => e.stopPropagation()}>
            { component }
          </div>
        <div className="bottom-buffer"></div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
