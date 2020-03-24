import { combineReducers } from '@ngrx/store';

import { UIUserRootReducer as ui } from './ui';
import { paginationReducer as pagination } from './pagintation.reducer';
import { userReducer as users } from './user.reducer';

export const userRootReducer = combineReducers({
  pagination,
  users,
  ui
});