import {combineReducers} from 'redux';
import tasksReducer from '../screens/Dashboard/reduxFiles/reducerTasks';
import permissionReducer from '../screens/Dashboard/reduxFiles/reducerPermission';
export default combineReducers({
  tasks: tasksReducer,
  isPermitted: permissionReducer,
});
