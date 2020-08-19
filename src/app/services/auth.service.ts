import { HTTP } from '@ionic-native/http/ngx';
import { Recipe } from './../models/recipe';
import { Storage } from '@ionic/storage';
import { Platform, AlertController, LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';


const TOKEN_KEY = 'access_token';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  url = environment.url;
  user = null;
  authenticationState = new BehaviorSubject(false);
  favorites;
 
  constructor(private http: HttpClient, private helper: JwtHelperService, private storage: Storage,
    private plt: Platform, private alertController: AlertController, private httpNative: HTTP, private loadingCtrl: LoadingController) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }
 
  checkToken() {
    this.storage.get(TOKEN_KEY).then(token => {
      if (token) {
        let decoded = this.helper.decodeToken(token);
        let isExpired = this.helper.isTokenExpired(token);
 
        if (!isExpired) {
          this.user = decoded;
          this.authenticationState.next(true);
        } else {
          this.storage.remove(TOKEN_KEY);
        }
      }
    });
  }
 
  register(credentials) {
    return this.http.post(`${this.url}/users/register`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
 
  login(credentials) {
    return this.http.post(`${this.url}/users/login`, credentials)
      .pipe(
        tap(res => {
          this.storage.set(TOKEN_KEY, res['token']);
          this.user = this.helper.decodeToken(res['token']);
          this.authenticationState.next(true);
        }),
        catchError(e => {
          this.showAlert(e.error.msg);
          throw new Error(e);
        })
      );
  }
 
  logout() {
    this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }
 
  getSpecialData() {
    return this.http.get(`${this.url}/users/special`).pipe(
      catchError(e => {
        let status = e.status;
        if (status === 401) {
          this.showAlert('You are not authorized for this!');
          this.logout();
        }
        throw new Error(e);
      })
    )
  }

  getInformations()
  {
    return this.http.get(`${this.url}/users/informations`).pipe(
      catchError(e => {
        let status = e.status;
        if (status === 401) {
          this.showAlert('You are not authorized for this!');
          this.logout();
        }
        throw new Error(e);
      })
    )
  }


  addRecipeToFavorites(recipe: Recipe)
  {
    console.log('inside addRecipe Auth');
    console.log(recipe);
    return this.http.post(`${this.url}/users/addRecipe`, recipe).pipe(
      catchError(e => {
        let status = e.status;
        console.log(status);
        if (status === 401) {
          this.showAlert('You are not authorized for this!');
          this.logout();
        }
        throw new Error(e);
      })
    )
  }

  removeRecipeFromFavorites(recipe: Recipe)
  {
    return this.http.post(`${this.url}/users/removeRecipe`, recipe).pipe(
      catchError(e => {
        let status = e.status;
        console.log(status);
        if (status === 401) {
          this.showAlert('You are not authorized for this!');
          this.logout();
        }
        throw new Error(e);
      })
    )
  }

  getAllRecipes()
  {
    return this.http.get(`${this.url}/users/recipes`).pipe(
      catchError(e => {
        let status = e.status;
        if (status === 401) {
          this.showAlert('You are not authorized for this!');
          this.logout();
        }
        throw new Error(e);
      })
    )
  }

  async loadFavorites() {
    let favorites;

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
    console.log('INSIDE GET FAVORITES');
    console.log(this.favorites);
    console.log(this.favorites.recipes);
    return this.favorites.recipes;
  }
 
  isAuthenticated() {
    return this.authenticationState.value;
  }

  isAdmin()
  {
    return this.user.admin;
  }
 
  showAlert(msg) {
    let alert = this.alertController.create({
      message: msg,
      header: 'Error',
      buttons: ['OK']
    });
    alert.then(alert => alert.present());
  }


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
}
