import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

  displayRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }

}
