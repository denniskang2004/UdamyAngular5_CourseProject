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
import {RouterModule, Routes} from '@angular/router';
import { InformationComponent } from './servers/information/information.component';
import { UserComponent } from './server/userdemo/user/user.component';



// dknote 114: add routes/routing
const appRoutes: Routes = [
  {path:'recipes',component:RecipesComponent},
  {path:'shopping-list',component:ShoppingListComponent},
  {path:'home',component:HomedemoComponent},
  {path:'servers',component:ServersComponent},
  {path:'users',component:UserdemoComponent, children:[
      {path:':id/:name',component:UserComponent},// dknote 127: nested route
    ]},
  // {path:'users/:id/:name',component:UserComponent}, // dknote 120: pass parameter to route
  {path:'servers/info',component:InformationComponent}, // local:4200/servers/users   // dknote 119: relative route in programming
]

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
  ],
  imports: [
    BrowserModule,
    FormsModule,

    // dknote 114: register routes
    RouterModule.forRoot(appRoutes)
  ],
  // dknote 101: add to appModule to make available to whole app, even to service
  providers: [
    RecipesService,
    ShoppingListService,
    AccountService,//demo only
    appLogging, //demo only

  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
