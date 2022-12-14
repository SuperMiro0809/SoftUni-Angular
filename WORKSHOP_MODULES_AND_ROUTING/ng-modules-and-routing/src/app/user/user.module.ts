import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { userRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    LoginComponent, 
    RegisterComponent, 
    ProfileComponent
  ],
  imports: [
    CommonModule,
    userRoutingModule
  ]
})
export class UserModule { }
