import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserResolverService implements Resolve<{ id: number, name: string }> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{ id: number; name: string }> | Promise<{ id: number; name: string }> | { id: number; name: string } {

    // dknote 139: set up resolver for route //simulate got from server
    return {
      id: route.params['id'],
      name: route.params['name']
    };


  }
}
