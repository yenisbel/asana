import { combineReducers } from 'redux';
import users from './users_reducer';
import projects from './project_reducer';
import columns from './column_reducer';
import tasks from './task_reducer';
import teams from './team_reducer';
import members from './members_reducer'

export default combineReducers({
  users,
  teams,
  projects,
  columns,
  tasks,
  members
});
