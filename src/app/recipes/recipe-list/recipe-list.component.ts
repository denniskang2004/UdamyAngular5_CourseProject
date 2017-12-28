import {Component, EventEmitter, OnInit,Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() listItemSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Grilled Mushroom', 'this is only test recipe',
      'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg'),
    new Recipe('Spicy Chicken', 'recipe name2',
      'http://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18180350/051SIP112-grilled-mustard-rosemary-chicken-recipe-alt-main.jpg')
  ];

  constructor() {

  }

  ngOnInit() {
  }

  onSelectItem(item:Recipe){
    this.listItemSelected.emit(item);
  }
}
