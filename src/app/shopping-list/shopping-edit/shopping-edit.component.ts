import {Component, OnInit, ViewChild, Output, EventEmitter, ElementRef, OnDestroy} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @Output() itemAdded = new EventEmitter<Ingredient>(); // dknote 80: pass data out // dknote 106: use shopping list service
  // @ViewChild('inputName') inputName:ElementRef; // dknote 80: use VeiwChild
  // @ViewChild('inputAmount') inputAmount:ElementRef;

  // dknote 108: use shopping list service
  constructor(private shopService: ShoppingListService) {
  }

  @ViewChild('f') editForm: NgForm;
  shopEditSubscription: Subscription;
  shopItemEdited: Ingredient;
  shopItemIndexEdited: number;
  editMode = false;

  ngOnInit() {

    //dknote 203~205: populate form based on list selection
    this.shopEditSubscription = this.shopService.shoppingListEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.shopItemIndexEdited = index;
        this.shopItemEdited = this.shopService.getShoppingItem(index);
        this.editForm.setValue(
          {
            name: this.shopItemEdited.name,
            amount: this.shopItemEdited.amount
          }
        );
      }
    );
  }

  ngOnDestroy() {
    this.shopEditSubscription.unsubscribe();
  }

  // dknote 80: use the ViewChild
  onAddItem() {
    // dknote 108: use shopping list service
    // this.itemAdded.emit(
    //   new Ingredient(this.inputName.nativeElement.value,this.inputAmount.nativeElement.value)
    // );

    // let newIngredient = new Ingredient(this.inputName.nativeElement.value,this.inputAmount.nativeElement.value);
    // this.shopService.addShoppingItem(newIngredient);

    // dknote 201/202: change to use template driven form:
    let newIngredient = new Ingredient(this.editForm.value.name, this.editForm.value.amount);
    if (this.editMode) {
      this.shopService.updateShoppingItem(this.shopItemIndexEdited, newIngredient);
    } else {
      this.shopService.addShoppingItem(newIngredient);
    }

    // dknote 206: reset form after edit/add
    this.editForm.reset();
    this.editMode = false;
  }

  onClear(){
    // dknote 206: reset form after edit/add
    this.editForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.shopService.deleteShoppingItem(this.shopItemIndexEdited);
    this.onClear();
  }
}
