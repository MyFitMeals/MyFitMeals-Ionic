import { FavoritesService } from './../services/favorites.service';
import { RecipesLoaderService } from './../services/recipes-loader.service';
import { LoadingController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private favoritesService: FavoritesService, 
              private loadingController: LoadingController, 
              private recipesLoder: RecipesLoaderService) {}

  ngOnInit() {
    console.log('Tabs entering Ion')
    this.loadRecipes().then(res =>
      {
        loading.then(loaded =>
          {
            console.log('inside loading');
            loaded.dismiss();
          })
      });
    let loading = this.presentLoading();
  }

  async loadRecipes() {
    /*     await this.backendService.loadRecipes();
        this.recipes = this.backendService.getRecipes(); */
    
        await this.recipesLoder.loadRecipes();
        await this.favoritesService.loadFavorites();
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
