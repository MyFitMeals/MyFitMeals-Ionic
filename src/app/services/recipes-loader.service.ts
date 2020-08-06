import { Recipe } from './../models/recipe';
import { BackendService } from './backend.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesLoaderService {

  private recipes: Recipe[];

  constructor(private backendService: BackendService) { }

  async loadRecipes() {
    await this.backendService.loadRecipes();
    this.recipes = this.backendService.getRecipes();
  }

  getRecipes()
  {
    return this.recipes;
  }

  filterMacros(proteins: number, fats: number, carbs: number)
  {
    this.recipes = this.recipes.filter(recipe =>
      {
        return Math.abs((recipe.proteins - proteins))  <= 10 &&
               Math.abs(recipe.fats - fats) <= 10 &&
               Math.abs(recipe.carbs - carbs) <= 10;
      });

      console.log(this.recipes);
  }
}
