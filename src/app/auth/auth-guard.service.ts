import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class AuthGuardService2 implements CanActivate{
  constructor(
    private authService:AuthService,
    private router:Router){

  }

  //dknote 258: protect route by guard
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(!this.authService.isAuthenicated()){
      this.router.navigate(['/sign-in']);
    }
    return this.authService.isAuthenicated();
  }
}
