import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public userService: UserService,  private router: Router) { }

  ngOnInit(): void {
  }

  registerHandler(): void {
    this.userService.register();
    this.router.navigate(['/']);
  }

}
