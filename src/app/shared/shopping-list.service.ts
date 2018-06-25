import { Ingredient } from './ingredient.model';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    {
      name: 'Apple',
      amount: 5
    },
    new Ingredient('tomatoes', 10)
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredients: Ingredient) {
    this.ingredients.push(ingredients);
  }

}
