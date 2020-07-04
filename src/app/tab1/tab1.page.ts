
import { Recipe } from './../models/recipe';
import { Component } from '@angular/core';
import { BackendService } from './../services/backend.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private value: string;
  private recipes: Recipe[];

  constructor(private backendService: BackendService, public loadingController: LoadingController) {
    
  }

  ngOnInit() {
    console.log('Tab 1 entering Ion')
    this.loadRecipes();
    this.presentLoading();
  }



  async getHelloWorld() {
    await this.backendService.getHelloWorld();
    this.value = this.backendService.getData();
    console.log('value : ');
    console.log(this.value)
  }
  

  async loadRecipes() {
    await this.backendService.loadRecipes();
    console.log(this.backendService.getRecipes());
    this.recipes = this.backendService.getRecipes();
  }

  getRecipes() {
    return this.recipes
  }

  getValue() {
    console.log(this.value);
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Veuillez patienter..',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

}
