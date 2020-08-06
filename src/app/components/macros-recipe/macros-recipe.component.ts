import { Recipe } from './../../models/recipe';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-macros-recipe',
  templateUrl: './macros-recipe.component.html',
  styleUrls: ['./macros-recipe.component.scss'],
})
export class MacrosRecipeComponent implements OnInit {

  @Input() private recipe: Recipe;
  constructor() { }

  ngOnInit() {}

  getRecipe(): Recipe
  {
    return this.recipe;
  }

}
