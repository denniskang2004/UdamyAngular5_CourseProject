import {Component, EventEmitter, OnInit,Output} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipesService} from '../recipes.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  //@Output() listItemSelected = new EventEmitter<Recipe>();// dknote 106: change to use Recipe Service
  recipes: Recipe[];//dknote 105: moved to RecipesService

  // dknote 105: inject service
  constructor(
    private recipeService:RecipesService,
    private router:Router,
    private route:ActivatedRoute
  ) {}

  ngOnInit() {
    // dknote 105: use service
    this.recipes = this.recipeService.getRecipes();

    // dknote 215: monitor changes of the list
    this.recipeService.recipeChanged.subscribe(
      (recipes:Recipe[])=>{
        this.recipes = recipes;
      }
    )
  }

  // onSelectItem(item:Recipe){
  //   //this.listItemSelected.emit(item);// dknote 106: change to use Recipe Service
  // }
  onAddNewRecipe(){
    //this.router.navigate(['/recipes','new']);//ABSOLTE
    this.router.navigate(['new'],{relativeTo:this.route});
  }
}
