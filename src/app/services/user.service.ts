import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as urlTemplate from 'url-template';

import { PaginationUsers } from '../models/pagination';
import { UsersApi } from '../users.api';
import { delay } from 'rxjs/operators';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  public users(page: number): Observable<PaginationUsers> {
    return this.http.get<PaginationUsers>(`${urlTemplate.parse(UsersApi.users).expand({ page })}`)
      .pipe(delay(1000)); // Implementación solo para animación (API Ligera)
  }
}
