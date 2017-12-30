import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Recipe} from '../../recipe.model';
import {RecipesService} from '../../recipes.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() itemIndex:number;
  @Input() recipe: Recipe;
  // @Output() itemSelected = new EventEmitter<Recipe>(); // dknote 106: change to use Recipe Service


  constructor(
    private recipeService:RecipesService,
    private router:Router
  ) {}

  ngOnInit() {
  }

  // dknote 149, dknote 150: use router parameter
  // onClickItem(item: Recipe) {
  //   // this.itemSelected.emit(item); // dknote 106: change to use Recipe Service
  //   // this.recipeService.recipeSelected.emit(item); dknote: change to use router param
  //
  // }
}
