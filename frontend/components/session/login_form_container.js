import { connect } from "react-redux";
import React from "react";
import SessionForm from "./session_form";
import { login, signup } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'login'
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        processForm:(user) => dispatch (login(user)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);