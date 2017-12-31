import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  //providers:[ShoppingListService] // dknote 110: moved to module
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];// dknote 107: use shopping-list service instead
  shopServiceSubscription:Subscription;

  constructor(private shopService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shopService.getShoppingList();

    // dknote 108: subscribe for list change notification
    this.shopServiceSubscription = this.shopService.shoppingListChanged.subscribe(
      (shoplistChanged:Ingredient[])=>{
        this.ingredients = this.shopService.getShoppingList();
      }
    )
  }

  //dknote 106: use shopping list service instead
  // listAddItem(item:Ingredient){
  //   this.ingredients.push(item);
  // }

  // dknote 166: use ReactiveX Subject, must handled by ourselves
  ngOnDestroy(){
    this.shopServiceSubscription.unsubscribe();
  }
}
