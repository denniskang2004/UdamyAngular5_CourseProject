import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipesService} from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  encapsulation: ViewEncapsulation.None ,// dknote 67: change to apply css globally
  // providers:[RecipesService] //dknote 105 // dknote 110 shared by shopping list
})
export class RecipesComponent implements OnInit {
  recipeSelected:Recipe;

  // dknote 106: change to use Recipe Service
  constructor(private recipeService:RecipesService) {}

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe:Recipe) =>{
        this.recipeSelected = recipe;
      }
    )
  }

  // dknote 106: change to use Recipe Service
  // rcpSelectItem(itemSelected:Recipe){
  //   this.recipeSelected = itemSelected;
  //   console.log("selected item name:"+this.recipeSelected.name);
  // }
}
