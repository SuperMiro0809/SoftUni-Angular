import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [UserService]
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {
  }

  get loggedStatus(): boolean {
    return this.userService.getloggedStatus();
  }

  constructor(public userService: UserService) { }

  logoutHandler(): void {
    this.userService.logout();
    
  }

}
