import { Component, OnInit ,Input} from '@angular/core';
import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {ActivatedRoute, ActivatedRouteSnapshot, Params, Router} from '@angular/router';
import {RecipesService} from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @Input() detailRecipSelected:Recipe; //dknote 147
  detailRecipSelected:Recipe;
  index:number;

  constructor(
    private shopService:ShoppingListService,
    private route:ActivatedRoute,
    private rcpService:RecipesService,
    private router:Router) { }

  ngOnInit() {
    this.index = this.route.snapshot.params['id'];
    this.detailRecipSelected = this.rcpService.getRecipe(this.index );

    // dknote: dynamically fetach route parameter change
    this.route.params.subscribe(
      (param:Params)=>{
        this.index  = param['id'];
        this.detailRecipSelected = this.rcpService.getRecipe(this.index );
      }
    )
  }

  toShoppingList(ingrList:Ingredient[]){
    this.shopService.addIngredients(ingrList);
  }
  onEditRecipe(){

    //this.router.navigate(['/recipes',this.index,'edit']);
    this.router.navigate(['edit'],{relativeTo:this.route});//relative so no need id
  }
}
