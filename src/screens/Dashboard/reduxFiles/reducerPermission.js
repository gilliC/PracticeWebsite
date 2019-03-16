import {FETCH_PERMISSION} from '../../../services/constants';
const initialState = {
  type: false,
  error: '',
};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PERMISSION:
      state = action.payload;
      return state;
    default:
      return state;
  }
};
