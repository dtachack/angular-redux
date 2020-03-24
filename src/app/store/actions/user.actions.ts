import { createAction, props } from '@ngrx/store';
import { type } from 'src/app/util';

import { PaginationUsers } from 'src/app/models/pagination';
import { User } from 'src/app/models/user';

export const fetchUsersAction = createAction(type('[User/API] Fetch users'), props<{ page: number }>());
export const fetchUsersSuccesAction = createAction(type('[User/API] Fetch users succesful'), props<{ users: User[] }>());
export const fetchPaginationSuccesAction = createAction(type('[User/API] Fetch pagination succesful'), props<{ pagination: PaginationUsers }>());

export const userActions = {
  fetchUsersAction
};
