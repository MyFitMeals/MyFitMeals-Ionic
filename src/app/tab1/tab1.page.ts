import { RECIPES } from './../mocks/recipes';
import { Recipe } from './../models/recipe';
import { Component } from '@angular/core';
import { BackendService } from './../services/backend.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private value: string;
  private recipes: Recipe[];

  constructor(private backendService: BackendService) {
    
  }

  ionViewWillEnter() {
    this.loadRecipes();
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

}
