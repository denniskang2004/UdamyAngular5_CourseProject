import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipesService} from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  encapsulation: ViewEncapsulation.None ,// dknote 67: change to apply css globally
  providers:[RecipesService] //dknote 105
})
export class RecipesComponent implements OnInit {
  recipeSelected:Recipe;
  constructor() {}

  ngOnInit() {
  
  }

  rcpSelectItem(itemSelected:Recipe){
    this.recipeSelected = itemSelected;
    console.log("selected item name:"+this.recipeSelected.name);
  }
}
