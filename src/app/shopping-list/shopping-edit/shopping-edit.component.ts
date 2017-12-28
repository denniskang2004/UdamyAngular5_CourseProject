import {Component, OnInit, ViewChild, Output, EventEmitter,ElementRef} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() itemAdded = new EventEmitter<Ingredient>(); // dknote 80: pass data out
  @ViewChild('inputName') inputName:ElementRef; // dknote 80: use VeiwChild
  @ViewChild('inputAmount') inputAmount:ElementRef;

  constructor() { }

  ngOnInit() {
  }

  // dknote 80: use the ViewChild
  onAddItem(){
    this.itemAdded.emit(
      new Ingredient(this.inputName.nativeElement.value,this.inputAmount.nativeElement.value)
    );
  }
}
