import {Component, EventEmitter, OnInit,Output} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipesService} from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() listItemSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];//dknote 105: moved to RecipesService

  // dknote 105: inject service
  constructor(private recipeService:RecipesService) {}

  ngOnInit() {
    // dknote 105: use service
    this.recipes = this.recipeService.getRecipes();
  }

  onSelectItem(item:Recipe){
    this.listItemSelected.emit(item);
  }
}
