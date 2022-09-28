import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';

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

  getloggedStatus(): boolean {
    if(localStorage.getItem('loggedIn') === 'true') {
      this.loggedIn = true;
    }
    return this.loggedIn;
  }

  getUserId(): string {
    return localStorage.getItem('userId');
  }

  register(): void {
    this.loggedIn = true;
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('userId', '5fa64b162183ce1728ff371d');
    delay(3000);
  }

  login(): void {
    this.loggedIn = true;
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('userId', '5fa64b162183ce1728ff371d');
    delay(3000);
  }

  logout():void {
    this.loggedIn = false;
    localStorage.setItem('loggedIn', 'false');
    localStorage.setItem('userId', '');
  }
}
