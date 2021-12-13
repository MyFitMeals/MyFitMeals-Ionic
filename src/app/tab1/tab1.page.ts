import { AuthService } from './../services/auth.service';
import { MacrosService } from './../services/macros.service';
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
  proteinFiltered: boolean = false;
  carbsFiltered: boolean = false;
  fatsFiltered: boolean = false;
  sweetOrsalt;

  constructor(private backendService: BackendService, public loadingController: LoadingController,
    private popoverController: PopoverController, private recipesLoder: RecipesLoaderService,
    private router: Router, private macrosService: MacrosService, private authService: AuthService) {
    
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

  async filterList(evt) {
    //this.recipesLoder. = this.foodListBackup;
    const searchTerm = evt.srcElement.value;
  
    if (!searchTerm) {
      console.log('empty');
      this.recipesLoder.loadRecipes();
    }

    else  this.recipesLoder.filterBySearch(searchTerm);
  }

  async filterBySaltOrSweet(event) {
    if(event.detail.checked) {
      this.recipesLoder.filterBySalty();
    }

    else {
      this.recipesLoder.filterBySweety();
    }
  }

  async resetRecipes() {
    this.recipesLoder.loadRecipes();
  }
  

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


  getProteins()
  {
    if(this.macrosService.getProteins() === 0 || !this.macrosService.getProteins())
    {
      this.proteinFiltered = false;
      return 0;
    }
    else {
      this.proteinFiltered = true;
      return this.macrosService.getProteins();
    }
  }

  getCarbs()
  {
    if(this.macrosService.getCarbs() === 0 || !this.macrosService.getCarbs())
    {
      this.carbsFiltered = false;
      return 0;
    }
    else {
      this.carbsFiltered = true;
      return this.macrosService.getCarbs();
    }
  }

  getFats()
  {
    if(this.macrosService.getFats() === 0 || !this.macrosService.getFats())
    {
      this.fatsFiltered = false;
      return 0;
    }
    else {
      this.fatsFiltered = true;
      return this.macrosService.getFats();
    }  
  }

  isAdmin()
  {
    return this.authService.isAdmin();
  }

}
