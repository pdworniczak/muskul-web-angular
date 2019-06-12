import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Login } from '../login';
import { StorageService } from '../../common/services/storage.service';
import { ROUTES } from '../../routes/routes.enum';

const sampleLoginResponse: Login = {
  logged: true,
  token: 'token3'
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private router: Router, private storageService: StorageService) { }

  login() {
    of(sampleLoginResponse)
      .pipe(delay(1000))
      .subscribe({
        next: (data: Login) => {
          this.storageService.login(data.token);
          this.router.navigate([`/${ROUTES.APP}`]);
        }
      });
  }

  logout() {
    this.storageService.logout();
    this.router.navigate(['/']);
  }

  isAuthenticated(): boolean {
    return this.storageService.getUserToken() !== null;
  }
}
