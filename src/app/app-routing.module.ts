import {NgModule} from '@angular/core';
import {ServersComponent} from './servers/servers.component';
import {RecipesComponent} from './recipes/recipes.component';
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
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {NoSelectComponent} from './recipes/recipe-detail/no-select/no-select.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';
import {ObsDemoComponent} from './server/obs-demo/obs-demo.component';
import {FormDemoComponent} from './server/form-demo/form-demo.component';
import {FormDemoReactiveComponent} from './server/form-demo-reactive/form-demo-reactive.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';

// dknote 114: add routes/routing
const appRoutes: Routes = [
  // dknote 143: below are for projects
  {
    path: 'recipes', component: RecipesComponent, children: [
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailComponent}, //dknote 148: add children routes for recipes
      {path: ':id/edit', component: RecipeEditComponent},
      {path: '**', component: NoSelectComponent}
    ]
  },
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'sign-up',component:SignupComponent},
  {path: 'sign-in',component:SigninComponent},
  {path: 'home', component: HomedemoComponent},
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
  {path: '**', redirectTo: 'not-found'}//dknote 130: put wildcard ** in last route declaration, redirect to this page
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
