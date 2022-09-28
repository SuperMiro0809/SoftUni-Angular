import { Injectable } from "@angular/core";
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { UserService } from '../../user/user.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivateChild, CanActivate {

    constructor(
        private userService: UserService,
        private router: Router
        ) {  }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const authRequired = route.data.isLogged;

        if(typeof authRequired == 'boolean' && authRequired === this.userService.getloggedStatus()) {
            return true;
        }

        this.router.navigate(['']);
        return false;
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const authRequired = childRoute.data.isLogged;

        if(typeof authRequired == 'boolean' && authRequired === this.userService.getloggedStatus()) {
            return true;
        }

        this.router.navigate(['']);
        return false;
    }

}