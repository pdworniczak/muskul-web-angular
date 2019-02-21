import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';
import { ROUTES } from '../../../routes/routes.enum';
import { Login } from '../../login';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  login() {
    this.userService.login().subscribe({
      next: (data: Login) => console.log(data),
      complete: () => {
        console.log('login successfull');
        this.router.navigate([`/${ROUTES.APP}`]);
      }
    });
  }

  logout() {
    this.userService.logout();
  }

  register() {
    console.log(ROUTES.REGISTER);
    this.router.navigate([`/${ROUTES.REGISTER}`]);
  }
}
