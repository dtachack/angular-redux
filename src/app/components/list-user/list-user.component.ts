import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { UserFacade } from 'src/app/user.facade';

import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.sass'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListUserComponent {

  constructor(
    private userFacade: UserFacade
  ) { }

  get users$(): Observable<User[]> {
    return this.userFacade.users$;
  }
  
  get isLoading$(): Observable<boolean> {
    return this.userFacade.isLoading$;
  }

}
