import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { auth } from 'firebase';

import { AuthenticationService } from '../../services/authentication.firebase.service';
import { ROUTES } from 'src/app/routes/routes.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private authenticationService: AuthenticationService,
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
    this.authenticationService
      .login(
        this.loginForm.get('email').value,
        this.loginForm.get('password').value
      )
      .subscribe({
        next: (data: auth.UserCredential) => {
          console.log(data.additionalUserInfo);
        },
        error: err => {
          this.loading = false;
          console.error('something wrong occurred: ' + err);
        },
        complete: () => {
          console.log('complete');
          this.router.navigate([`/${ROUTES.APP}`]);
        }
      });
  }

  register() {
    console.log('Register!');
  }
}
