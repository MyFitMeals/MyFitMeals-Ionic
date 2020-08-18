import { environment } from './../../environments/environment';
import { Recipe } from './../models/recipe';
import { Platform, LoadingController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { finalize } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class BackendService {


  private data;
  private recipes;
  private recipe;
  private image;
  private favorites;
  private url = environment.heroku;

  constructor(private http: HttpClient, private httpNative: HTTP, private plt: Platform, private loadingCtrl: LoadingController) { }

   getHttp(ApiURL) {
    console.log('calling standard Http')

     return this.http.get(ApiURL).toPromise();
  }

   getHttpNative(ApiURL) {
    console.log('Calling Native Http')

    let nativeCall = this.httpNative.get(ApiURL, {}, {
      'Content-Type': 'application/json'
    });

    return from(nativeCall).pipe(
    ).toPromise();
  }

  async getHelloWorld() {
    console.log('Im here in service !')

    if(this.plt.is('cordova')) {
      await this.getHttpNative(this.url).then(data => {
        console.log(data);
        this.data = JSON.parse(data.data);
      })
    }

    else {
      await this.getHttp(this.url).then(data => {
        console.log(data);
        this.data = data;
      })
    } 

    console.log(this.data);

    return this.data
  }

  getData() {
    console.log(this.data)
    return this.data;
  }

  async loadRecipes() {
    if(this.plt.is('cordova')) {
      await this.getHttpNative(`${this.url}/recipes`).then(data => {
        console.log(data);
        this.recipes = JSON.parse(data.data);
      })
    }

    else {
      await this.getHttp(`${this.url}/recipes`).then(data => {
        console.log(data);
        this.recipes = data;
      })
    }
  }

  getRecipes(): Recipe[] {
    return this.recipes;
  }

  async loadRecipeById(recipeId) {
    if(this.plt.is('cordova')) {
      await this.getHttpNative(`${this.url}/recipes/${recipeId}`).then(data => {
        console.log(data);
        this.recipe = JSON.parse(data.data);
      })
    }

    else {
      await this.getHttp(`${this.url}/recipes/${recipeId}`).then(data => {
        console.log(data);
        this.recipe = data;
      })
    }
  }

  getRecipe(): Recipe {
    return this.recipe;
  }


  async loadFavorites() {
    if(this.plt.is('cordova')) {
      await this.getHttpNative(`${this.url}/users/recipes`).then(data => {
        console.log(data);
        this.favorites = JSON.parse(data.data);
      })
    }

    else {
      await this.getHttp(`${this.url}/users/recipes`).then(data => {
        console.log(data);
        this.favorites = data;
      })
    }
  }

  getFavorites(): Recipe[]
  {
    return this.favorites;
  }
}
