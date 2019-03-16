import {CHANGE_ACTIVE_ITEM, FETCH_LIST} from '../../../services/constants';
export const changeActiveItem = activeItem => ({
  type: CHANGE_ACTIVE_ITEM,
  payload: activeItem,
});

export const fetchList = () => ({
  type: FETCH_LIST,
});
