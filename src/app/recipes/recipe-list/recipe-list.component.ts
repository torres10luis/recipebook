import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    {
      name: 'A new recipe',
      description: 'test recipe',
      imagepath: 'https://memphisgrills.com/wp-content/uploads/2016/09/Korean-Tacos.jpg'
    },
    new Recipe ( 'a test recipe', 'this is a sample test.', 'https://memphisgrills.com/wp-content/uploads/2016/09/Korean-Tacos.jpg')

];
  constructor() { }

  ngOnInit() {
  }

}
