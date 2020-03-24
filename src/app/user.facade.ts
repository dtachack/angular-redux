import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { User } from './models/user';
import { usersRootSelector } from './store/selectors/user.selector';
import { fetchUsersAction } from './store/actions/user.actions';
import { UsersState } from './store/state/user.state';
import { Pagination } from './models/pagination';
import { usersUISelector } from './store/selectors/ui/ui.selector';

@Injectable()
export class UserFacade {

  constructor(private store: Store<UsersState>) { }

  public users$: Observable<User[]> = this.store.pipe(
    select(usersRootSelector),
    map(state => state.users)
  );

  public pagintation$: Observable<Pagination> = this.store.pipe(
    select(usersRootSelector),
    map(state => state.pagination)
  );

  public isLoading$: Observable<boolean> = this.store.pipe(
    select(usersUISelector),
    map(state => state.isLoading)
  );

  public fetchUsers(page: number): void {
    this.store.dispatch(fetchUsersAction({ page }));
  }
}