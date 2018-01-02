import {NgModule} from '@angular/core';
import {ServersComponent} from './servers/servers.component';
import {InformationComponent} from './servers/information/information.component';
import {RouterModule, Routes} from '@angular/router';
import {UserEditComponent} from './server/userdemo/user-edit/user-edit.component';
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {UserdemoComponent} from './server/userdemo/userdemo.component';
import {HomedemoComponent} from './server/homedemo/homedemo.component';
import {UserComponent} from './server/userdemo/user/user.component';
import {NotPermittedComponent} from './shared/not-permitted/not-permitted.component';
import {UserResolverService} from './server/userdemo/user/user-resolver.service';
import {ObsDemoComponent} from './server/obs-demo/obs-demo.component';
import {FormDemoComponent} from './server/form-demo/form-demo.component';
import {FormDemoReactiveComponent} from './server/form-demo-reactive/form-demo-reactive.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';

// dknote 114: add routes/routing
const appRoutes: Routes = [
  // {path: '', redirectTo:'/recipes',pathMatch:'full'},
  // dknote 143: below are for projects
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'sign-up',component:SignupComponent},
  {path: 'sign-in',component:SigninComponent},
  {path: 'home', component: HomedemoComponent},

];

// dknote 132: outsource configuratoin to this separate module
@NgModule({
  imports: [
    //RouterModule.forRoot(appRoutes, {useHash:true})  // dknote 140: use location strategies, supporting some special hosting servers
    RouterModule.forRoot(appRoutes) //dknote 143
  ],
  exports: [RouterModule] // dknote 132: export this configuration out
})


export class AppRoutingModule {
  constructor() {

  }
}
