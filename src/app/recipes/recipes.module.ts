import {NgModule} from '@angular/core';
import {RecipesComponent} from './recipes.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipeItemComponent} from './recipe-list/recipe-item/recipe-item.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {AppDropdownDirective} from '../shared/app-dropdown.directive';
import {CommonModule} from '@angular/common';
import {RecipesRoutingModule} from './recipes-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';


//dknote 265: create feature module
@NgModule({
  declarations:[
    RecipesComponent,
    RecipeEditComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeListComponent,
    // AppDropdownDirective // dknote 268: shared module
  ],
  imports:[
    CommonModule,//needed for feature module
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule
  ],
  providers:[

  ]


})
export class RecipesModule{

}
