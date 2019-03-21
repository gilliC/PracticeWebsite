import {combineReducers} from 'redux';
import tasksReducer from '../screens/Dashboard/reduxFiles/reducerTasks';
import permissionReducer from '../screens/Dashboard/reduxFiles/reducerPermission';
import articlesListReducer from '../screens/Bookmark/reduxFiles/list_reducer';
import activeListReducer from '../screens/Bookmark/reduxFiles/active_list_reducer';
export default combineReducers({
  tasks: tasksReducer,
  isPermitted: permissionReducer,
  list: articlesListReducer,
  activeList: activeListReducer,
});
