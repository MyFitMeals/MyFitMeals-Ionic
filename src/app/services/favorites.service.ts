import { Recipe } from './../models/recipe';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  favorites: Recipe[];
  constructor() {
    this.favorites = [];
    console.log('I am in favorites services');
   }

  addFavorite(recipe: Recipe)
  {
    this.favorites.push(recipe);
  }

  removeFavorite(recipe: Recipe)
  {
    this.favorites = this.favorites.filter(favorite =>
      {
        if(favorite._id !== recipe._id)
        {
          return true;
        }
      })
  }

  getFavorites()
  {
    return this.favorites;
  }

  isFavorite(recipe: Recipe)
  {
    return this.containsRecipe(recipe);
  }

  private containsRecipe(recipe: Recipe)
  {
    let result: boolean = false;
    this.favorites.forEach(favorite =>
      {
        console.log(favorite._id);
        console.log(recipe._id);
        if (favorite._id == recipe._id)
        {
          console.log('INSIDE TRUE');
          result = true;
        }
      })

      return result;
  }
}
