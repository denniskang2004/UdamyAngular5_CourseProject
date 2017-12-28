import {Component, OnInit, ViewChild, Output, EventEmitter,ElementRef} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // @Output() itemAdded = new EventEmitter<Ingredient>(); // dknote 80: pass data out // dknote 106: use shopping list service
  @ViewChild('inputName') inputName:ElementRef; // dknote 80: use VeiwChild
  @ViewChild('inputAmount') inputAmount:ElementRef;

  // dknote 108: use shopping list service
  constructor(private shopService:ShoppingListService) {  }

  ngOnInit() {
  }

  // dknote 80: use the ViewChild
  onAddItem(){
    // dknote 108: use shopping list service
    // this.itemAdded.emit(
    //   new Ingredient(this.inputName.nativeElement.value,this.inputAmount.nativeElement.value)
    // );

    let newIngredient = new Ingredient(this.inputName.nativeElement.value,this.inputAmount.nativeElement.value);
    this.shopService.addShoppingItem(newIngredient);

  }
}
