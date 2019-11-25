import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { auth } from 'firebase';

import { UserService } from '../../services/user.firebase.service';
import { ROUTES } from 'src/app/routes/routes.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  loading = false;

  loginForm = this.formBuilder.group({
    email: ['', Validators.compose([Validators.email, Validators.required])],
    password: ['', Validators.required]
  });

  login() {
    this.loading = true;
    this.userService
      .login(
        this.loginForm.get('email').value,
        this.loginForm.get('password').value
      )
      .subscribe({
        next: (data: auth.UserCredential) => {
          this.router.navigate([`/${ROUTES.APP}`]);
        },
        error: err => {
          this.loading = false;
          console.error('something wrong occurred: ' + err);
        }
      });
  }

  register() {
    console.log('Register!');
  }
}
