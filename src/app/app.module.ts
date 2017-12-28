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
    BetterHightlightDirective // course demo directive
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
