import { RouterModule, Routes } from '@angular/router';
import { ThemeComponent } from './theme/theme.component';
import { AddNewComponent } from './add-new/add-new.component';
import { DetailsComponent } from './details/details.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
    {
        path: 'themes',
        pathMatch: 'full',
        component: ThemeComponent
    },
    {
        path: 'themes/:id',
        component: DetailsComponent
    },
    {
        path: 'add-theme',
        pathMatch: 'full',
        component: AddNewComponent,
        canActivate: [ AuthGuard ],
        data: {
            isLogged: true
        }
    }
]

export const themeRoutingModule = RouterModule.forRoot(routes)