import {NgModule} from '@angular/core';
import {ServersComponent} from './servers/servers.component';
import {RecipesComponent} from './recipes/recipes.component';
import {InformationComponent} from './servers/information/information.component';
import {Router, RouterModule, Routes} from '@angular/router';
import {UserEditComponent} from './server/userdemo/user-edit/user-edit.component';
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {UserdemoComponent} from './server/userdemo/userdemo.component';
import {HomedemoComponent} from './server/homedemo/homedemo.component';
import {UserComponent} from './server/userdemo/user/user.component';

// dknote 114: add routes/routing
const appRoutes: Routes = [
  {path:'recipes',component:RecipesComponent},
  {path:'shopping-list',component:ShoppingListComponent},
  {path:'home',component:HomedemoComponent},
  {path:'servers',component:ServersComponent},
  {path:'users',component:UserdemoComponent, children:[
      {path:':id/:name',component:UserComponent},// dknote 127: nested route
      {path:':id/:name/edit',component:UserEditComponent} //dknote 128
    ]},
  // {path:'users/:id/:name',component:UserComponent}, // dknote 120: pass parameter to route
  {path:'servers/info',component:InformationComponent}, // local:4200/servers/users   // dknote 119: relative route in programming
  {path: 'not-found',component:PageNotFoundComponent}, //dknote 130: define page not found
  {path:'**',redirectTo:'not-found'}//dknote 130: put wildcard ** in last route declaration, redirect to this page
];

// dknote 132: outsource configuratoin to this separate module
@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule] // dknote 132: export this configuration out
})


export class AppRoutingModule{
  constructor(){

  }
}