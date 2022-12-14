import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }

]

export const AppRoutingModule = RouterModule.forRoot(routes);