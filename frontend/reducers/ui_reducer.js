import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import sidebarReducer from './sidebar_reducer';
import selectionReducer from './selection_reducer';
import EditReducer from './edit_reducer';
import DropdownReducer from './dropdown_reducer';
import CreateTaskReducer from './create_task_reducer';
import DropdownTaskReducer from './dropdown_task_reducer';
import TeamDropdownReducer from './team_dropdown_reducer';

export default combineReducers({
  modal: modalReducer,
  sidebar: sidebarReducer,
  creating: selectionReducer,
  editing: EditReducer,
  dropdown: DropdownReducer,
  creatingTask: CreateTaskReducer,
  dropdownTask: DropdownTaskReducer,
  teamsDropdown: TeamDropdownReducer
});