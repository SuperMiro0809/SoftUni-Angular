import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedIn = false;

  constructor() { 
    if(localStorage.getItem('loggedIn') === 'true') {
      this.loggedIn = true;
    }
  }

  register(): void {
    this.loggedIn = true;
    localStorage.setItem('loggedIn', 'true');
  }

  login(): void {
    this.loggedIn = true;
    localStorage.setItem('loggedIn', 'true');
  }

  logout():void {
    this.loggedIn = false;
    localStorage.setItem('loggedIn', 'false');
  }
}
