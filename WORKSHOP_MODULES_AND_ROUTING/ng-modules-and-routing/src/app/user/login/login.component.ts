import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService} from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public userService: UserService,  private router: Router) { }

  ngOnInit(): void {
  }

  loginHandler(): void {
    this.userService.login();
    this.router.navigate(['/home']);
  }

}
