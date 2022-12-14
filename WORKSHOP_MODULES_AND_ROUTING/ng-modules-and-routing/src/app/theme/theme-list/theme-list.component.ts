import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';
import { ITheme } from '../../shared/interfaces';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css']
})
export class ThemeListComponent implements OnInit {

  themeList: ITheme[]

  constructor(public themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.getAllThemes().subscribe(themeList => {
      this.themeList = themeList;
   })
  }

}
