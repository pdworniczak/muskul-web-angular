import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() {}

  login(token) {
    localStorage.setItem('token', token);
  }

  logout() {
    localStorage.removeItem('token');
  }
}
