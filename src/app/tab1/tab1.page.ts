import { RecipesLoaderService } from './../services/recipes-loader.service';
import { MacrosComponent } from '../components/macros/macros.component';

import { Router } from '@angular/router';
import { Recipe } from './../models/recipe';
import { Component } from '@angular/core';
import { BackendService } from './../services/backend.service';
import { LoadingController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private value: string;/* 
  private recipes: Recipe[]; */

  constructor(private backendService: BackendService, public loadingController: LoadingController,
    private popoverController: PopoverController, private recipesLoder: RecipesLoaderService,
    private router: Router) {
    
  }

/*   ngOnInit() {
    console.log('Tab 1 entering Ion')
    this.loadRecipes().then(res =>
      {
        loading.then(loaded =>
          {
            loaded.dismiss();
          })
      });
    let loading = this.presentLoading();
  } */
  

  async loadRecipes() {
/*     await this.backendService.loadRecipes();
    this.recipes = this.backendService.getRecipes(); */

    this.recipesLoder.loadRecipes();
  }

  getRecipes() {
    return this.recipesLoder.getRecipes();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Veuillez patienter..'
    });
    await loading.present();
    return loading;
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: MacrosComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  goToRecipeDetails(recipe: Recipe)
  {
    this.router.navigate(['/recipes', recipe]);
  }

}
