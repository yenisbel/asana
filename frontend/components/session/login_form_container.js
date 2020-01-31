import { connect } from "react-redux";
import React from "react";
import SessionForm from "./session_form";
import { login, removeErrors } from "../../actions/session_actions";
import{openModal, closeModal} from '../../actions/modal_actions';
import {requestTeams} from '../../actions/team_actions';


const mapStateToProps = (state) => {
    return {
        teamId: state.session.currentTeamId,
        errors: state.errors.session,
        formType: 'Login',
        navMessage: "Don't have an account yet?",
        formTitle: "Log in"
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        processForm:(user) => dispatch (login(user)),
        requestTeams: () => dispatch(requestTeams()),
        otherForm: (
            <button className="modal-signup" onClick={() => dispatch(openModal('Sign Up'))}>
              Sign Up
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        removeErrors: () => dispatch(removeErrors()),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);