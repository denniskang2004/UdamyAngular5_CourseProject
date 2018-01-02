import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecipesService} from '../recipes/recipes.service';
import {Response} from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // dknote 77: make output to app.component.html
  // @Output() selectedFeature = new EventEmitter<string>();// dknote 143: comment to use angular route

  constructor(private recipeService:RecipesService) { }

  // dknote 143: comment to use angular route
  // selectFeature(feature:string){
  //   this.selectedFeature.emit(feature);
  // }
  ngOnInit() {
  }

  onSaveData(){
    this.recipeService.storeRecipes().subscribe(
      (reponse:Response)=>{
        console.log(reponse);
      },
      (error)=>{
        console.error(error);
      }
    );
  }

  //dknote 245: use http to fetch data.
  onFetchData(){
    this.recipeService.fetchRecipes()
      .subscribe(
        (reponse:Response)=>{
          const recipesFetched = reponse.json();
          this.recipeService.setRecipes(recipesFetched);
          console.log(recipesFetched);
        }
      )
  }
}
