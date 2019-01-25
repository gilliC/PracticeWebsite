import {combineReducers} from 'redux';
import tasksReducer from '../Dashboard/reducers/reducerTasks';
import permissionReducer from '../Dashboard/reducers/reducerPermission';

export default combineReducers({
  tasks: tasksReducer,
  isPermitted: permissionReducer,
});
