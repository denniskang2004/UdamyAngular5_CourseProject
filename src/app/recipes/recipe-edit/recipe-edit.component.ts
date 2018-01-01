import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {RecipesService} from '../recipes.service';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number;
  isNew:boolean;
  editForm: FormGroup;
  editMode:boolean;


  constructor(
    private route:ActivatedRoute,
    private recipeService:RecipesService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (param:Params)=>{
        this.id = param['id'];
        this.isNew = this.id==null;
        this.editMode = this.id!==null;
        this.initForm();
      }
    )
  }

  initForm(){
    let name = '';
    let description = '';
    let imagePath = '';
    let ingredents = new FormArray([]);

    if(this.editMode){
      let recipe = this.recipeService.getRecipe(this.id);
      name = recipe.name;
      description = recipe.description;
      imagePath = recipe.imagePath;

      // dknote: populate FormArray from existing ingredients of a recipe
      if(recipe.ingredients){
        for(let ing of recipe.ingredients){
          ingredents.push(new FormGroup({
            name:new FormControl(ing.name),
            amount:new FormControl(ing.amount)
          }))
        }
      }

    }

    this.editForm = new FormGroup({
      'name': new FormControl(name),
      'imagePath': new FormControl(imagePath),
      'description': new FormControl(description),
      'ingredients': ingredents
    });
  }

}
