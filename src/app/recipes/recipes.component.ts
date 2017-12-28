import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  encapsulation: ViewEncapsulation.None // dknote 67: change to apply css globally
})
export class RecipesComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
