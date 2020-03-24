import { Action, createReducer, on } from '@ngrx/store';

import { Pagination } from 'src/app/models/pagination';
import { fetchPaginationSuccesAction } from '../actions/user.actions';

export const initialState: Pagination = {} as Pagination;

const featureReducer = createReducer(
  initialState,
  on(fetchPaginationSuccesAction, (state, { pagination }) => pagination)
);

export const paginationReducer = (state: Pagination, action: Action): Pagination => {
  return featureReducer(state, action);
};
