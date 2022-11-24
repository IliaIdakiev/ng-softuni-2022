import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthActivate implements CanActivate {

  constructor(private authServce: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const loginRequired = route.data['loginRequired'];
    if (loginRequired === undefined || this.authServce.isLoggedIn === loginRequired) { return true; }
    const returnUrl = route.url.map(u => u.path).join('/');
    return this.router.createUrlTree(['/auth/login'], { queryParams: { returnUrl } });
  }

}