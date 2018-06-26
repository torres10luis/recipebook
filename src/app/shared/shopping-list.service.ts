import { EventEmitter } from '@angular/core';
import { Ingredient } from './ingredient.model';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    {
      name: 'Apple',
      amount: 5
    },
    new Ingredient('tomatoes', 10)
  ];

  ingredientChanged = new EventEmitter<Ingredient[]>();

  getIngredients(): Ingredient[] {
    return this.ingredients;
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[] ) {
    // tslint:disable-next-line:prefer-const
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    // this makes an array of ingredients into a list one by one
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

}
