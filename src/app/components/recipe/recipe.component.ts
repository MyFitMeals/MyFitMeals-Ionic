import { FavoritesService } from './../../services/favorites.service';
import { Recipe } from './../../models/recipe';
import { BackendService } from './../../services/backend.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {

  private recipeId;
  private recipe: Recipe;
  featureSegment;
  isFavorite: boolean;

  constructor(private activatedRoute: ActivatedRoute, private backendService: BackendService, 
    public loadingController: LoadingController, public toastController: ToastController,
    private favoritesService: FavoritesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        //redirect
        return;
      }

      this.recipeId = paramMap.get('recipeId');
      console.log(this.recipeId);
      this.loadRecipe().then(res =>
        {
          loading.then(loaded =>
            {
              loaded.dismiss();
            });
            console.log(this.recipe);
            this.isFavorite = this.favoritesService.isFavorite(this.recipe);
            console.log(this.isFavorite);
        })
        let loading = this.presentLoading();
        this.featureSegment = "A propos";
  });

}

async loadRecipe() {
  await this.backendService.loadRecipeById(this.recipeId);
  this.recipe = this.backendService.getRecipe();
}

getRecipe(): Recipe {
  return this.recipe;
}

async presentLoading() {
  const loading = await this.loadingController.create({
    cssClass: 'my-custom-class',
    message: 'Veuillez patienter..'
  });
  await loading.present();
  return loading;
}

favoriteRecipe()
{
  this.isFavorite = true;
    this.addFavorite();
    this.presentToast('La recette ajoutée aux favoris avec succès !');
    console.log(this.favoritesService.getFavorites());
  
}

unfavoriteRecipe()
{
  this.isFavorite = false;
  this.removeFavorite();
  this.presentToast('La recette retirée de vos favoris');
  console.log(this.favoritesService.getFavorites());
}

async presentToast(msg: string) {
  const toast = await this.toastController.create({
    message: msg,
    duration: 2000
  });
  toast.present();
}

addFavorite()
{
  this.favoritesService.addFavorite(this.recipe);
}

removeFavorite()
{
  this.favoritesService.removeFavorite(this.recipe);
}

splitIngredients()
{
  let array = this.recipe.ingredients.split('-');
  array.shift();
  return array;
}

splitInstructions()
{
  let array = this.recipe.instructions.split('-');
  array.shift();
  return array;
}

splitTips()
{
  let array = this.recipe.tips.split('-');
  array.shift();
  return array;
}
}
