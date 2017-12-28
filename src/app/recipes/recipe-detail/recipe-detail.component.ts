import { Component, OnInit ,Input} from '@angular/core';
import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() detailRecipSelected:Recipe;
  constructor(private shopService:ShoppingListService) { }

  ngOnInit() {

  }

  toShoppingList(ingrList:Ingredient[]){
    this.shopService.addIngredients(ingrList);
  }
}
