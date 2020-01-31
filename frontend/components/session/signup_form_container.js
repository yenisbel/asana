import { connect } from "react-redux";
import React from "react";
import SessionForm from "./session_form";
import { signup, removeErrors } from "../../actions/session_actions";
import{openModal, closeModal} from '../../actions/modal_actions';
import {createTeam} from '../../actions/team_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'Signup',
        navMessage: "Already with us!",
        formTitle: 'Sign up'
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        processForm:(user) => dispatch (signup(user)),
        createTeam: (team) => dispatch(createTeam(team)),
        otherForm: (
            <button className="modal-login" onClick={() => dispatch(openModal('Log In'))}>
              Log In
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        removeErrors: () => dispatch(removeErrors()),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);