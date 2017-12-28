import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Recipe} from '../../recipe.model';
import {RecipesService} from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  // @Output() itemSelected = new EventEmitter<Recipe>(); // dknote 106: change to use Recipe Service


  constructor(private recipeService:RecipesService) {}

  ngOnInit() {
  }

  onClickItem(item: Recipe) {
    // this.itemSelected.emit(item); // dknote 106: change to use Recipe Service
    this.recipeService.recipeSelected.emit(item);
  }
}
