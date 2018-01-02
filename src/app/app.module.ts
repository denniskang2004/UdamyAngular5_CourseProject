import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {serverComponent} from './server/server.component';
import {ServersComponent} from './servers/servers.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import {BasicHightlightDirective} from './server/directive/basic-hightlight.directive';
import { BetterHightlightDirective } from './server/directive/better-hightlight.directive';
import { ResponsiveHighlightDirective } from './server/directive/responsive-highlight.directive';
import { UnlessDirective } from './server/directive/unless.directive';
import {AccountService} from './server/service/account.service';
import {appLogging} from './server/service/logging.service';
import {AbcComponent} from './servers/abc.component';
import {RecipesService} from './recipes/recipes.service';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import { UserdemoComponent } from './server/userdemo/userdemo.component';
import { HomedemoComponent } from './server/homedemo/homedemo.component';
import { InformationComponent } from './servers/information/information.component';
import { UserComponent } from './server/userdemo/user/user.component';
import { UserEditComponent } from './server/userdemo/user-edit/user-edit.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthGuardService} from './auth-guard.service';
import { NotPermittedComponent } from './shared/not-permitted/not-permitted.component';
import {UserResolverService} from './server/userdemo/user/user-resolver.service';
import {NoSelectComponent} from './recipes/recipe-detail/no-select/no-select.component';
import { ObsDemoComponent } from './server/obs-demo/obs-demo.component';
import {ObsHelperService} from './server/obs-demo/obs-helper.service';
import { FormDemoComponent } from './server/form-demo/form-demo.component';
import { FormDemoReactiveComponent } from './server/form-demo-reactive/form-demo-reactive.component';
import {HttpModule} from '@angular/http';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import {AuthService} from './auth/auth.service';
import {AuthGuardService2} from './auth/auth-guard.service';
import {RecipesModule} from './recipes/recipes.module';




// dknote: 15.2: register new component here (demo in lecture 16)
@NgModule({
  declarations: [
    AppComponent,
    serverComponent,
    ServersComponent,
    HeaderComponent,
    // RecipesComponent, //dknote 265: move to feature module
    // RecipeListComponent,//dknote 265: move to feature module
    // RecipeItemComponent,//dknote 265: move to feature module
    // RecipeDetailComponent,//dknote 265: move to feature module
    ShoppingListComponent,
    ShoppingEditComponent, // register here
    BasicHightlightDirective,
    BetterHightlightDirective,
    ResponsiveHighlightDirective,
    UnlessDirective, // course demo directive
    // AppDropdownDirective,//dknote 265: move to feature module
    AbcComponent,
    UserdemoComponent,
    HomedemoComponent,
    InformationComponent,
    UserComponent,
    UserEditComponent,
    PageNotFoundComponent,
    NotPermittedComponent,
    NoSelectComponent,
    //RecipeEditComponent,//dknote 265: move to feature module
    ObsDemoComponent,
    FormDemoComponent,
    FormDemoReactiveComponent,
    SignupComponent,
    SigninComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,//dknote 234: http service

    // dknote 114: register routes
    // RouterModule.forRoot(appRoutes) //dknote 132: separate to another module for routing
    ReactiveFormsModule ,// dknote 187: set up reactive form //dknote 265
    AppRoutingModule, //dknote 132: import routings
    RecipesModule
  ],
  // dknote 101: add to appModule to make available to whole app, even to service
  providers: [
    RecipesService,
    ShoppingListService,
    AccountService,//demo only
    appLogging, //demo only
    AuthGuardService, // dknote 134, dknote 135: protect route using guard
    UserResolverService,
    ObsHelperService, //dknote 163: use ReactiveX Subject (both Observable and Observer)
    AuthService ,//dknote 252: set up firebase authen
    AuthGuardService2
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
