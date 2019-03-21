import {CHANGE_ACTIVE_ITEM} from '../../../services/constants';
import {linksList} from '../../../services/local_data_base';

export default function(state = {item: linksList[0]}, action) {
  switch (action.type) {
    case CHANGE_ACTIVE_ITEM:
      return {
        ...state,
        item: action.payload,
      };

    default:
      return state;
  }
}
