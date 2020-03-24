import { createFeatureSelector } from '@ngrx/store';

import { userFeatureName, UsersState } from '../state/user.state';

export const usersRootSelector = createFeatureSelector<UsersState>(userFeatureName);
