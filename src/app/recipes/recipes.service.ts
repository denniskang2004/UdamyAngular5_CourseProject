import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipesService{
  recipeSelected = new EventEmitter<Recipe>(); // dknote 106: add an eventEmitter to communicate across component

  private recipes: Recipe[] = [
    new Recipe(
      'Grilled Mushroom',
      'this is only test recipe',
      'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg',
      [
        new Ingredient('Meet',1),
        new Ingredient('Sugar',5)
      ]
      ),
    new Recipe(
      'Pasta Combo',
      'pasta of the day',
      'http://images.media-allrecipes.com/images/75131.jpg',
      [
        new Ingredient('Meet',1),
        new Ingredient('Pasta',10)
      ]
    ),
    new Recipe(
      'Spicy Chicken',
      'recipe name2',
      'http://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18180350/051SIP112-grilled-mustard-rosemary-chicken-recipe-alt-main.jpg',
      [
        new Ingredient('Chicken',1),
        new Ingredient('Spice',5)
      ]
    ),

  ];

  public addRecipe(rp:Recipe){
    this.recipes.push(rp);
  }

  public getRecipes(){
    return this.recipes.slice();
  }
}
