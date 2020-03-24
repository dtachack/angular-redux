import { Action, createReducer, on } from '@ngrx/store';

import { fetchPaginationSuccesAction, fetchUsersAction } from '../../actions/user.actions';

export const initialState = false;

const featureReducer = createReducer(
  initialState,
  on(fetchUsersAction, () => true),
  on(fetchPaginationSuccesAction, () => false)
);

export const isLoadingReducer = (state: boolean, action: Action): boolean => {
  return featureReducer(state, action);
};
