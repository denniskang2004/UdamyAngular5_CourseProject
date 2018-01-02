import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {HomedemoComponent} from './server/homedemo/homedemo.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';

// dknote 114: add routes/routing
const appRoutes: Routes = [
  // {path: '', redirectTo:'/recipes',pathMatch:'full'},
  // dknote 143: below are for projects
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
