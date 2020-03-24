import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap, mergeMap } from 'rxjs/operators';

import { UserService } from 'src/app/services/user.service';
import { fetchUsersAction, fetchUsersSuccesAction, fetchPaginationSuccesAction } from '../actions/user.actions';

@Injectable()
export class UserStoreEffects {

  constructor(
    private action$: Actions,
    private service: UserService) { }

  fetchUsers$: Observable<Action> = createEffect(() => this.action$
    .pipe(
      ofType(fetchUsersAction),
      switchMap(action => this.service.users(action.page)),
      mergeMap(response => [
        fetchUsersSuccesAction({ users: response.data }),
        fetchPaginationSuccesAction({ pagination: response })
      ])
    ));
}
