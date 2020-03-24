import { combineReducers } from '@ngrx/store';

import { isLoadingReducer as isLoading} from './user.ui.reducer';

export const UIUserRootReducer = combineReducers({
    isLoading
});
