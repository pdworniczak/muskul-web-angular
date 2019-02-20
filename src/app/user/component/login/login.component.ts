import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../service/user.service';
import { ROUTES } from '../../../navigation/routes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  login() {
    this.userService.login();
  }

  logout() {
    this.userService.logout();
  }

  register() {
    console.log(ROUTES.REGISTER);
    this.router.navigate([`/${ROUTES.REGISTER}`]);
  }
}
