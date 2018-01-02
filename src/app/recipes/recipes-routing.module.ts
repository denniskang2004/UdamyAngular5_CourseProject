import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {NoSelectComponent} from './recipe-detail/no-select/no-select.component';
import {RecipesComponent} from './recipes.component';
import {AuthGuardService2} from '../auth/auth-guard.service';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';

const recipesRoutes: Routes = [
  {
    path: 'recipes', component: RecipesComponent, children: [
      {path: '', component: NoSelectComponent},
      {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService2]},
      {path: ':id', component: RecipeDetailComponent}, //dknote 148: add children routes for recipes
      {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuardService2]},
      //{path: '**', component: NoSelectComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [RouterModule]
})
export class RecipesRoutingModule {

}
