import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFacade } from './user.facade';
import { userFeatureName, UsersState } from './store/state/user.state';
import { UserStoreEffects } from './store/effects/user.effects';
import { userRootReducer } from './store/reducers';
import { UserService } from './services/user.service';
import { environment } from 'src/environments/environment';
import { PaginationComponent } from './components/pagination/pagination.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderPlaceholderComponent } from './components/placeholders/header-placeholder/header-placeholder.component';
import { PaginationNumbersPipe } from './pipes/pagination-numbers.pipe';
import { ListUserComponent } from './components/list-user/list-user.component';
import { ListPlaceholderComponent } from './components/placeholders/list-placeholder/list-placeholder.component';

export const USER_REDUCER_TOKEN = new InjectionToken<
  ActionReducerMap<UsersState>
>('Feature User Reducers');

@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    HeaderComponent,
    HeaderPlaceholderComponent,
    ListUserComponent,
    ListPlaceholderComponent,
    PaginationNumbersPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(userFeatureName, USER_REDUCER_TOKEN),
    EffectsModule.forRoot([
      UserStoreEffects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
  ],
  providers: [
    PaginationNumbersPipe,
    UserFacade,
    {
      provide: USER_REDUCER_TOKEN,
      useValue: userRootReducer
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
