import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { UsersApi } from 'src/app/users.api';
import { UserFacade } from 'src/app/user.facade';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  public imageUrl = UsersApi.image;

  constructor(
    private userFacade: UserFacade
  ) { }

  get isLoading$(): Observable<boolean> {
    return this.userFacade.isLoading$;
  }

}
