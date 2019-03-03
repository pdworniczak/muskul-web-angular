import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Login } from '../login';
import { LocalStorageService } from '../../common/services/local-storage.service';
import { ROUTES } from '../../routes/routes.enum';

const sampleLoginResponse: Login = {
  logged: true,
  token: 'xyz'
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  login() {
    const loginObservable: Observable<Login> = of(sampleLoginResponse);

    loginObservable.pipe(delay(1000)).subscribe({
      next: (data: Login) => {
        this.localStorageService.login(data.token);
        this.router.navigate([`/${ROUTES.APP}`]);
      }
    });
  }

  logout() {
    this.localStorageService.logout();
    this.router.navigate(['/']);
  }

  isAuthenticated(): Observable<boolean> {
    return of(true).pipe(delay(1000));
  }
}
