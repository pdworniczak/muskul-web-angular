import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/users/services/user.firebase.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit() {}

  logout() {
    this.userService.logout();
  }
}
