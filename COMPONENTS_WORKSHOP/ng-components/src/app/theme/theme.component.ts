import { Component, OnInit } from '@angular/core';
import { ITheme } from '../interfaces';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css'],
  providers: [ThemeService]
})
export class ThemeComponent implements OnInit {

  themeList: ITheme[];  

  constructor(public themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.getAllThemes().subscribe(themeList => {
       this.themeList = themeList;
    })

    console.log(this.themeList);
  }

}
