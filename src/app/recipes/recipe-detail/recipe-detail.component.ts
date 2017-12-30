import { Component, OnInit ,Input} from '@angular/core';
import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {ActivatedRoute, ActivatedRouteSnapshot, Params} from '@angular/router';
import {RecipesService} from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @Input() detailRecipSelected:Recipe; //dknote 147
  detailRecipSelected:Recipe;

  constructor(
    private shopService:ShoppingListService,
    private route:ActivatedRoute,
    private rcpService:RecipesService) { }

  ngOnInit() {
    let index = this.route.snapshot.params['id'];
    this.detailRecipSelected = this.rcpService.getRecipe(index);

    // dknote: dynamically fetach route parameter change
    this.route.params.subscribe(
      (param:Params)=>{
        let index = param['id'];
        this.detailRecipSelected = this.rcpService.getRecipe(index);
      }
    )
  }

  toShoppingList(ingrList:Ingredient[]){
    this.shopService.addIngredients(ingrList);
  }
}
