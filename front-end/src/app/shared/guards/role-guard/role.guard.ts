import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate, CanActivateChild {

  constructor( private router: Router, private authService: AuthenticationService ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // const userRole = this.authService.getRole()
      // if(route.data.role && route.data.role.indexOf(userRole) === -1) {
      //   this.router.navigate(['/home']);
      //   return false
      // }
      console.log('Parent Auth Guard Called');
      let url: string = state.url;
      return this.checkUserLogin(route, url);
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('Child Auth Guard Called');
      return this.canActivate(childRoute, state);
  }

  checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {
    if (this.authService.isLogin) {
      console.log('ATUH GUARD SAYD THEY ARE ALREADY LOGGED IN!');
      return true
    } else {
      return false
    }
    
  } 
  
}
