import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {RecipesService} from '../recipes.service';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  isNew: boolean;
  editForm: FormGroup;
  editMode: boolean;
  imagePathInput:string;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipesService,
    private router:Router
    ) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (param: Params) => {
        this.id = param['id'];
        this.isNew = this.id == null;
        this.editMode = this.id ? true : false;
        this.initForm();
      }
    );


  }

  initForm() {
    let name = '';
    let description = '';
    let imagePath = '';
    let ingredients = new FormArray([]);

    if (this.editMode) {
      let recipe = this.recipeService.getRecipe(this.id);
      name = recipe.name;
      description = recipe.description;
      imagePath = recipe.imagePath;

      // dknote: populate FormArray from existing ingredients of a recipe
      if (recipe.ingredients) {
        for (let ing of recipe.ingredients) {
          ingredients.push(new FormGroup({
            name: new FormControl(ing.name, Validators.required),
            amount: new FormControl(ing.amount, [
              Validators.required,
              Validators.pattern('^[1-9]+[0-9]*$')])
          }));
        }
      }

    }

    this.editForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'imagePath': new FormControl(imagePath, Validators.required),
      'description': new FormControl(description, Validators.required),
      'ingredients': ingredients
    });
  }

  onAddIngredient() {
    (<FormArray>this.editForm.get('ingredients')).push(new FormGroup(
      {
        name: new FormControl(null),
        amount: new FormControl(null)
      }
    ));
  }

  onRemoveIngredient(index: number) {
    (<FormArray>this.editForm.get('ingredients')).removeAt(index);
  }

  onEditAdd() {
    if (this.editMode) {
      //dknote 215: directly use the form.value as entity
      this.recipeService.updateRecipe(this.id, this.editForm.value);
    } else {
      this.recipeService.addRecipe(this.editForm.value);
    }

    // dknote 216: save/edit will navigate back to details
    this.router.navigate(['../'],{relativeTo:this.route});
  }

  onSubmit() {

  }
  onCancel(){
    this.router.navigate(['../'],{relativeTo:this.route});
  }
}
