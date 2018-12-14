import {FETCH_TASKS} from '../services/constants';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_TASKS:
      console.log(FETCH_TASKS);
      state = action.payload;
      return state;
    default:
      return state;
  }
};
