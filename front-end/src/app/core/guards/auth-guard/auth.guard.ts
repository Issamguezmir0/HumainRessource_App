import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthenticationService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let url: string = state.url;
      return this.checkUserLogin(route, url);
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.canActivate(childRoute, state);
  }

  checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {
    if (this.authService.isLoggedIn()) {
      // const userRole = this.authService.getRole()
      // if(route.data.role && route.data.role.indexOf(userRole) === -1) {
      //   this.router.navigate(['/home']);
      //   return false
      // }
      return true
    }
    this.router.navigate(['/sign-in']);
    return false
  }
  
}
