import { Component, OnInit } from '@angular/core';

import { UserFacade } from './user.facade';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  constructor(
    private userFacafe: UserFacade
  ) { }

  ngOnInit(): void {
    this.userFacafe.fetchUsers(1);
  }
}
