import { Component } from '@angular/core';

// dknote: this is the root component (rootcomponent)
@Component({
  selector: 'app-root', // dknote: angular used to replace in index.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // dknote: 20
})
export class AppComponent {
  title = 'app';

  // dknote 77: route thru ngIf
  // 1. header click event
  featureSelected:string;

  onSelectFeature(feature:string){
    this.featureSelected = feature;
  }
}
