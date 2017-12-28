import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers:[ShoppingListService]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];// dknote 107: use shopping-list service instead

  constructor(private shopService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shopService.getShoppingList();

    // dknote 108: subscribe for list change notification
    this.shopService.shoppingListChanged.subscribe(
      (shoplistChanged:Ingredient[])=>{
        this.ingredients = this.shopService.getShoppingList();
      }
    )
  }

  //dknote 106: use shopping list service instead
  // listAddItem(item:Ingredient){
  //   this.ingredients.push(item);
  // }
}
