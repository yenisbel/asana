import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LogInFormContainer from '../session_form/login_form_container';
import SignUpFormContainer from '../session_form/signup_form_container';
import CreateProjectFormContainer from '../projects/create_edit_project/create_project_form_container';
import EditProjectFormContainer from '../projects/create_edit_project/edit_project_form_container';
import TaskFormContainer from '../tasks/edit_task/edit_task_container';
import CreateTeamFormContainer from '../teams/create_edit/create_team_container';
import UpdateTeamFormContainer from '../teams/create_edit/edit_team_container';

const Modal = ({ modal, closeModal }) => {

  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'Log In':
      component = <LogInFormContainer />;
      break;
    case 'Sign Up':
      component = <SignUpFormContainer />;
      break;
    case 'Create Project':
      component = <CreateProjectFormContainer />;
      break;
    case 'Update Project':
      component = <EditProjectFormContainer />;
      break;
    case 'Task Modal':
      component = <TaskFormContainer />;
      break;
    case 'Create Team':
      component = <CreateTeamFormContainer />;
      break;
    case 'Update Team':
      component = <UpdateTeamFormContainer />;
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

const msp = state => {
  return {
    modal: state.ui.modal
  };
};

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(Modal);
