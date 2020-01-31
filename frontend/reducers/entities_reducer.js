import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import teamsReducer from './teams_reducer';
import projectsReducer from './projects_reducer';
import TasksReducer from './tasks_reducer';
import MembersReducer from './members_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    teams: teamsReducer,
    projects: projectsReducer,
    tasks: TasksReducer,
    members: MembersReducer
});

export default entitiesReducer