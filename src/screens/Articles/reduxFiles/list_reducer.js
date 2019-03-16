import {FETCH_LIST} from '../../../services/constants';
import {linksList} from '../../../services/local_data_base';

export default function(state = linksList, action) {
  switch (action.type) {
    case FETCH_LIST:
      return state;

    default:
      return state;
  }
}
