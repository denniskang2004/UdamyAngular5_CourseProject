import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';
import {Http, Response} from '@angular/http';

@Injectable()
export class RecipesService{
  recipeSelected = new EventEmitter<Recipe>(); // dknote 106: add an eventEmitter to communicate across component
  recipeChanged = new Subject<Recipe[]>();

  constructor(private http:Http){

  }
  private recipes: Recipe[] = [
    new Recipe(
      'Grilled Mushroom',
      'this is only test recipe',
      'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg',
      [
        new Ingredient('Meet',1),
        new Ingredient('Sugar',5)
      ]
      ),
    new Recipe(
      'Pasta Combo',
      'pasta of the day',
      'http://images.media-allrecipes.com/images/75131.jpg',
      [
        new Ingredient('Meet',1),
        new Ingredient('Pasta',10)
      ]
    ),
    new Recipe(
      'Spicy Chicken',
      'recipe name2',
      'http://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18180350/051SIP112-grilled-mustard-rosemary-chicken-recipe-alt-main.jpg',
      [
        new Ingredient('Chicken',1),
        new Ingredient('Spice',5)
      ]
    ),

  ];

  public addRecipe(rp:Recipe){
    this.recipes.push(rp);
    this.recipeChanged.next(this.recipes.slice());
  }

  public updateRecipe(index:number, newRecipe:Recipe){
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  public getRecipes(){
    return this.recipes.slice();
  }

  public getRecipe(index:number){
    return this.recipes.slice()[index];
  }

  public deleteRecipe(index:number){
    this.recipes.splice(index,1);
    this.recipeChanged.next(this.recipes.slice());
  }

  // dknote 244: save recipes to firebase
  public storeRecipes(){
    return this.http.put('https://recipes-8f81a.firebaseio.com/data.json', this.recipes);
  }

  // dknote 245: fetch recipes from firebase
  public fetchRecipes(){
    return this.http.get('https://recipes-8f81a.firebaseio.com/data.json')
      .map(
        (reponse:Response)=>{
          const recipes:Recipe[] = reponse.json();
          for(let rcp of recipes){
            if(!rcp['ingredients']){
              rcp['ingredients'] = [];//dknote: preprocess reponse by adding missing property
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes:Recipe[])=>{
          const recipesFetched = recipes;
          this.setRecipes(recipesFetched);
          console.log(recipesFetched);
        }
      )
  }

  public setRecipes(newrecipes:Recipe[]){
    this.recipes = newrecipes;
    this.recipeChanged.next(this.recipes.slice());
  }
}
