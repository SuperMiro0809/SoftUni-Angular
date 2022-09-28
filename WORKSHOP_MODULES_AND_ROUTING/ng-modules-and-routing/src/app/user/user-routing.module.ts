import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
    {
        path: 'user',
        canActivateChild: [
            AuthGuard
        ],
        children: [
            {
                path: 'register',
                pathMatch: 'full',
                component: RegisterComponent,
                data: {
                    isLogged: false
                }
            }, 
            {
                path: 'login',
                pathMatch: 'full',
                component: LoginComponent,
                data: {
                    isLogged: false
                }
            },
            {
                path: 'profile',
                pathMatch: 'full',
                component: ProfileComponent,
                data: {
                    isLogged: true
                }
            }
        ]
    }
]

export const userRoutingModule = RouterModule.forChild(routes);