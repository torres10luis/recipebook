import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
    {
      name: 'A new recipe',
      description: 'test recipe',
      imagepath: 'https://memphisgrills.com/wp-content/uploads/2016/09/Korean-Tacos.jpg'
    },
    new Recipe ( 'a test recipe', 'this is a sample test.', 'https://memphisgrills.com/wp-content/uploads/2016/09/Korean-Tacos.jpg')
  ];

  getRecipes(): Recipe [] {
    return this.recipes.slice(); // return exact copy of original array
  }

}
