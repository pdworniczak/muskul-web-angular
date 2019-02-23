import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { UserService } from '../../services/user.service';
import { ROUTES } from '../../../routes/routes.enum';
import { Login } from '../../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  loginForm = this.formBuilder.group({
    email: ['', Validators.compose([Validators.email, Validators.required])],
    password: ['', Validators.required]
  });

  login() {
    this.userService.login().subscribe({
      next: (data: Login) => {
        localStorage.setItem('token', data.token);
        this.router.navigate([`/${ROUTES.APP}`]);
      }
    });
  }

  logout() {
    this.userService.logout();
  }

  register() {
    this.router.navigate([`/${ROUTES.REGISTER}`]);
  }
}
