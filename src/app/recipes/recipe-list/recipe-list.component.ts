import { Component, OnInit} from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService ) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  // onRecipeSelected(recipes: Recipe) {
  //   this.recipeSelected.emit(recipes);

  //   // this.selectedRecipe = recipe;
  //   // console.log('recipe-item');
  // }

}
