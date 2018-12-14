import {combineReducers} from 'redux';
import dashboardReducer from '../Dashboard/dashboardTasksReducer';

export default combineReducers({
  tasks: dashboardReducer,
});
