import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

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

    return loginObservable;
  }

  logout() {
    console.log('logout');
  }
}
