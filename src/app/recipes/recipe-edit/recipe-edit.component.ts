import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {RecipesService} from '../recipes.service';

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

    if(this.editMode){
      let recipe = this.recipeService.getRecipe(this.id);
      name = recipe.name;
      description = recipe.description;
      imagePath = recipe.imagePath;
    }

    this.editForm = new FormGroup({
      'name': new FormControl(name),
      'imagePath': new FormControl(imagePath),
      'description': new FormControl(description)
    });
  }

}
