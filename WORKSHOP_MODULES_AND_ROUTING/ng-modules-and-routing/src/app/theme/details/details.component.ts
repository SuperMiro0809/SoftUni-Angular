import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';
import { ActivatedRoute } from '@angular/router';
import { ITheme, IPost } from '../../shared/interfaces';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  theme: ITheme<IPost>;

  get isLogged():boolean {
    return this.userService.getloggedStatus();
  }

  constructor(
    public themeService: ThemeService,
    public activatedRoute: ActivatedRoute,
    public userService: UserService
    ) { 
      const id = this.activatedRoute.snapshot.params.id;
      console.log(id)
      this.themeService.getThemeById(id).subscribe(theme => {
        this.theme = theme;
      })
    }

  ngOnInit(): void {
  }

}
