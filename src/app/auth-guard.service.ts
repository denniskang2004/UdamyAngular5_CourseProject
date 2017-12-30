import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';


// dknote 134, dknote 135: protect route using guard
@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild{
  constructor(private router:Router){

  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // let flag = false;
    // let proms = new Promise(
    //   (resolve,reject)=>{
    //     if(flag)
    //       resolve(false);
    //     else
    //       reject(false);
    //   }
    // );
    //
    // return proms.then(
    //   (authenticated:boolean)=>{
    //     if(authenticated)
    //       return this.router.navigate(['/not-permitted']);
    //     else
    //         return this.router.navigate(['/not-permitted']);
    //   }
    //
    // );
    this.router.navigate(['/not-permitted']);
    return false;

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
