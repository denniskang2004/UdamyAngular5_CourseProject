import {NgModule} from '@angular/core';
import {ServersComponent} from './servers.component';
import {NotPermittedComponent} from '../shared/not-permitted/not-permitted.component';
import {ObsDemoComponent} from '../server/obs-demo/obs-demo.component';
import {InformationComponent} from './information/information.component';
import {PageNotFoundComponent} from '../shared/page-not-found/page-not-found.component';
import {UserEditComponent} from '../server/userdemo/user-edit/user-edit.component';
import {FormDemoReactiveComponent} from '../server/form-demo-reactive/form-demo-reactive.component';
import {UserResolverService} from '../server/userdemo/user/user-resolver.service';
import {UserdemoComponent} from '../server/userdemo/userdemo.component';
import {UserComponent} from '../server/userdemo/user/user.component';
import {FormDemoComponent} from '../server/form-demo/form-demo.component';
import {RouterModule} from '@angular/router';


const serversRoutes = [
  {path: 'servers', component: ServersComponent},
  // dknote: below are for course demo
  // dknote 134, dknote 135: protect routes using CanActivate
  {
    path: 'users',
    /*canActivate:[AuthGuardService],
    canActivateChild:[AuthGuardService],*/
    component: UserdemoComponent, children: [
      {path: ':id/:name', component: UserComponent, resolve: {userResolver: UserResolverService}},// dknote 127: nested route
      {path: ':id/:name/edit', component: UserEditComponent} //dknote 128
    ]
  },
  // {path:'users/:id/:name',component:UserComponent}, // dknote 120: pass parameter to route
  {path: 'servers/info', component: InformationComponent}, // local:4200/servers/users   // dknote 119: relative route in programming
  {path: 'not-permitted', component: NotPermittedComponent},
  {path: 'not-found', component: PageNotFoundComponent, data: {message: 'page not found message here static passed'}}, //dknote 130: define page not found //// dknote 138: get static data from route config
  {path: 'obs', component: ObsDemoComponent},
  {path: 'forms', component: FormDemoComponent},
  {path: 'forms-reactive', component: FormDemoReactiveComponent},
  //{path: '**', redirectTo: 'not-found'}//dknote 130: put wildcard ** in last route declaration, redirect to this page
];
@NgModule({
  imports:[
    RouterModule.forChild(serversRoutes)
  ],
  exports:[RouterModule]
})
export class ServersRoutingModule{}
