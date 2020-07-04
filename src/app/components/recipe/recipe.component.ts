import { Recipe } from './../../models/recipe';
import { BackendService } from './../../services/backend.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {

  private recipeId;
  private recipe: Recipe;

  constructor(private activatedRoute: ActivatedRoute, private backendService: BackendService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        //redirect
        return;
      }

      this.recipeId = paramMap.get('recipeId');
      console.log(this.recipeId);
      this.loadRecipe();
  })
}

async loadRecipe() {
  await this.backendService.loadRecipeById(this.recipeId);
  this.recipe = this.backendService.getRecipe();
}

getRecipe(): Recipe {
  return this.recipe;
}

}
