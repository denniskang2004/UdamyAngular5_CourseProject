import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {serverComponent} from './server/server.component';
import {ServersComponent} from './servers/servers.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import {BasicHightlightDirective} from './server/directive/basic-hightlight.directive';
import { BetterHightlightDirective } from './server/directive/better-hightlight.directive';
import { ResponsiveHighlightDirective } from './server/directive/responsive-highlight.directive';
import { UnlessDirective } from './server/directive/unless.directive';
import {AppDropdownDirective} from './shared/app-dropdown.directive';
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
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { ObsDemoComponent } from './server/obs-demo/obs-demo.component';




// dknote: 15.2: register new component here (demo in lecture 16)
@NgModule({
  declarations: [
    AppComponent,
    serverComponent,
    ServersComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent, // register here
    BasicHightlightDirective,
    BetterHightlightDirective,
    ResponsiveHighlightDirective,
    UnlessDirective, // course demo directive
    AppDropdownDirective,
    AbcComponent,
    UserdemoComponent,
    HomedemoComponent,
    InformationComponent,
    UserComponent,
    UserEditComponent,
    PageNotFoundComponent,
    NotPermittedComponent,
    NoSelectComponent,
    RecipeEditComponent,
    ObsDemoComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,

    // dknote 114: register routes
    // RouterModule.forRoot(appRoutes) //dknote 132: separate to another module for routing
    AppRoutingModule //dknote 132: import routings
  ],
  // dknote 101: add to appModule to make available to whole app, even to service
  providers: [
    RecipesService,
    ShoppingListService,
    AccountService,//demo only
    appLogging, //demo only
    AuthGuardService, // dknote 134, dknote 135: protect route using guard
    UserResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
