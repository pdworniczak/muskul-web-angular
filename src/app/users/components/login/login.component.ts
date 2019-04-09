import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { UserService } from '../../services/user.service';
import { ROUTES } from '../../../routes/routes.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  loading = false;

  loginForm = this.formBuilder.group({
    email: ['', Validators.compose([Validators.email, Validators.required])],
    password: ['', Validators.required]
  });

  login() {
    this.loading = true;
    this.userService.login();
  }

  register() {
    console.log('Register!');
  }
}
