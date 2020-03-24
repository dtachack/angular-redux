import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { fetchUsersSuccesAction } from '../actions/user.actions';

export const initialState: User[] = [];

const featureReducer = createReducer(
  initialState,
  on(fetchUsersSuccesAction, (state, { users }) => users)
);

export const userReducer = (state: User[], action: Action): User[] => {
  return featureReducer(state, action);
};
