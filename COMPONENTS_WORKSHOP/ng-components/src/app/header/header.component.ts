import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [UserService]
})
export class HeaderComponent implements OnInit {
  public loggedIn: boolean;

  ngOnInit(): void {
    this.loggedIn = this.userService.loggedIn;
  }

  get loggedStatus(): boolean {
    return this.userService.loggedIn;
  }

  constructor(public userService: UserService) { }

  registerHandler(): void {
    this.userService.register();
    
  }

  loginHandler(): void {
    this.userService.login();
    
  }

  logoutHandler(): void {
    this.userService.logout();
    
  }

}
