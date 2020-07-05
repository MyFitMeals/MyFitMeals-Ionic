import { Recipe } from './../../models/recipe';
import { BackendService } from './../../services/backend.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {

  private recipeId;
  private recipe: Recipe;
  featureSegment;

  constructor(private activatedRoute: ActivatedRoute, private backendService: BackendService, public loadingController: LoadingController) { }

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
            })
        })
        let loading = this.presentLoading();
        this.featureSegment = "A propos";
  })
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

}
