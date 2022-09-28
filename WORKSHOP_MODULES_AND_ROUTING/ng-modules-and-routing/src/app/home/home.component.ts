import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  get isLogged(): boolean {
    return this.userService.getloggedStatus();
  }

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

}
