import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthenticationService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('Parent Auth Guard Called');
      let url: string = state.url;
      return this.checkUserAuth(route, url);
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('Child Auth Guard Called');
      let url: string = state.url;
      return this.checkUserAuth(childRoute, url);
  }

  canLoad( childRoute: ActivatedRouteSnapshot): boolean {
    return true;
  }

  /** Check User Login with cookies */
  checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {
    if (this.authService.isLogin) {
      console.log('ATUH GUARD SAYD THEY ARE ALREADY LOGGED IN!');
      return true
    } else {
      this.authService.getLoggedInUser().subscribe((user)=> {
        const loggedInUser = JSON.parse(user)
        console.log('AUTH GUARD GETTING USER', loggedInUser)
        if(loggedInUser._id) {
          this.authService.isLogin = true
          console.log("everything is fine")
          this.router.navigate(['/dashboard/accueil']);
          return true;

        } else {
          console.log('Validation failed')
          sessionStorage.clear()
          this.router.navigate(['/sign-in']);
          return false
        }
      }, (error) => {
        console.log('There was an error.', error);
        this.router.navigate(['/sign-in']);
        return false

      })
    }
    return false
  } 

  checkUserAuth(route: ActivatedRouteSnapshot, url: any): boolean {
    if (this.authService.isLoggedIn()) {
      console.log("auth guard working and loggedIn")
      return true
    }
    this.router.navigate(['/sign-in']);
    return false
  }
}

