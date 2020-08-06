import { RecipesLoaderService } from './recipes-loader.service';
import { BackendService } from './backend.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MacrosService {

  private proteins: number;
  private carbs: number;
  private fats: number;
  constructor(private backendService: BackendService, private recipesLoader: RecipesLoaderService) { }


  getProteins()
  {
    return this.proteins;
  }

  getCarbs()
  {
    return this.carbs;
  }

  getFats()
  {
    return this.fats;
  }

  applyMacros(proteins: number, fats: number, carbs: number)
  {
    this.proteins = proteins;
    this.fats = fats;
    this.carbs = carbs;

    this.recipesLoader.filterMacros(this.proteins, this.fats, this.carbs);
}

resetMacros()
{
  this.proteins = 0;
  this.fats = 0;
  this.carbs = 0;

  this.recipesLoader.loadRecipes();
}

}
