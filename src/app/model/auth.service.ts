import { Injectable } from '@angular/core';
import { RestDataSource } from './rest.datasourse';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private datasource: RestDataSource) { }

  authenticate(username: string, password: string): Observable<boolean> {
    return this.datasource.authenticate(username, password);
  }

  get authenticated(): boolean {
    return this.datasource.authToken != null;
  }

  clear() {
    this.datasource.authToken = null;
  }
}
