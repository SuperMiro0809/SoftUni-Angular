import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeComponent } from './theme/theme.component';
import { themeRoutingModule } from './theme-routing.module';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeListItemComponent } from './theme-list-item/theme-list-item.component';
import { AddNewComponent } from './add-new/add-new.component';
import { PostModule } from '../post/post.module';
import { SharedModule } from '../shared/shared.module';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    ThemeComponent,
    ThemeListComponent,
    ThemeListItemComponent,
    AddNewComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    themeRoutingModule,
    PostModule,
    SharedModule
  ]
})
export class ThemeModule { }
