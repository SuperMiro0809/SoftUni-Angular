import { Component, OnInit, Input } from '@angular/core';
import { ITheme } from '../../shared/interfaces';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-theme-list-item',
  templateUrl: './theme-list-item.component.html',
  styleUrls: ['./theme-list-item.component.css']
})
export class ThemeListItemComponent implements OnInit {
  @Input() theme: ITheme;

  get isLogged(): boolean {
    return this.userService.getloggedStatus();
  }

  get userId(): string {
    return this.userService.getUserId();
  }

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

}
