import { createSelector } from '@ngrx/store';

import { usersRootSelector } from '../user.selector';
import { UsersState } from '../../state/user.state';

export const usersUISelector = createSelector(
    usersRootSelector,
  (state: UsersState) => state.ui
);
