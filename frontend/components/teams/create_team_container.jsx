import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TeamForm from './team_form';
import { createTeam } from '../../actions/team_actions';
import { Link } from 'react-router-dom';
import React from 'react';

const mapStateToProps = state => ({
    team: {
      name: '',
      description: ''
    },
    formType: 'Create Team'
});

const mapDispatchToProps = dispatch => {
  return {
    action: (team) => dispatch(createTeam(team)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamForm);