import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Login } from '../login';

const sampleLoginResponse: Login = {
  logged: true,
  token: 'xyz'
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {}

  login(): Observable<Login> {
    const loginObservable: Observable<Login> = of(sampleLoginResponse);

    return loginObservable.pipe(delay(1000));
  }

  logout() {
    console.log('logout');
  }

  isAuthenticated(): Observable<boolean> {
    return of(true).pipe(delay(1000));
  }
}
