import { AuthService } from './auth.service';
import { Recipe } from './../models/recipe';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  favorites: Recipe[];
  constructor(private authService: AuthService) {
    this.favorites = [];
    console.log('I am in favorites services');
   }

  addFavorite(recipe: Recipe)
  {
    this.favorites.push(recipe);
    this.addRecipe(recipe);
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

      this.removeRecipe(recipe);
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


  addRecipe(recipe: Recipe) {
    console.log(recipe);
    this.authService.addRecipeToFavorites(recipe).subscribe(res => {
      console.log(res);
    });
  }

  removeRecipe(recipe: Recipe) {
    this.authService.removeRecipeFromFavorites(recipe).subscribe(res => {
      console.log(res);
    });
  }

  async loadFavorites() {
    
    this.authService.loadFavorites().subscribe(result =>
      {
        console.log(result);
        this.authService.setFavorites(result);
        this.favorites = this.authService.getFavorites();
        console.log(this.favorites);
      })
    
    
  }

  getFavorites(): Recipe[]
  {
    return this.favorites;
  }
}
