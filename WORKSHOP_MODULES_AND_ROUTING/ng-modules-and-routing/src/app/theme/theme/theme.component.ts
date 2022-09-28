import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user/user.service';


@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent { 

  get isLogged(): boolean {
    return this.userService.getloggedStatus();
  }

  constructor(public userService: UserService) { }


}
