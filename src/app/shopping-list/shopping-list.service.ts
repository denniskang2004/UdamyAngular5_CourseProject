import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 10)
  ];
  //newShoppingItem = new EventEmitter<Ingredient>();
  //shoppingListChanged = new EventEmitter<Ingredient[]>();
  shoppingListChanged = new Subject<Ingredient[]>(); //dknote 166: use ReactiveX Subject

  public getShoppingList() {
    return this.ingredients.slice();
  }

  public addShoppingItem(item: Ingredient) {
    this.ingredients.push(item);

    // dknote 108: after add, notify other parties by event
    // this.shoppingListChanged.emit(this.ingredients);
    this.shoppingListChanged.next(this.ingredients);//dknote 166
  }

  public addIngredients(ingredientList:Ingredient[]){
    this.ingredients = this.ingredients.concat(ingredientList);

    //this.shoppingListChanged.emit(this.ingredients);
    this.shoppingListChanged.next(this.ingredients);//dknote 166
  }
}
