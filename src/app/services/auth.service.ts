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
  registerState = new BehaviorSubject(false);
  favorites;
  token;
  temporary_email;
 
  constructor(private http: HttpClient, private helper: JwtHelperService, private storage: Storage,
    private plt: Platform, private alertController: AlertController, private httpNative: HTTP, private loadingCtrl: LoadingController) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }
  
 
  checkToken() {
    this.storage.get(TOKEN_KEY).then(token => {
      if (token) {
        console.log(token);
        this.token = token;
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

  getToken(token)
  {
    let splitted = token.split(':')[1];
    let spl2 = splitted.substring(1);
    console.log(spl2.substring(0, (spl2.length - 3)))
    return spl2.substring(0, (spl2.length - 3));
  }

  loginAfterRegister(credentials) {
    return this.http.post(`${this.url}/users/login`, credentials)
     .pipe(
       tap(res => {
         this.storage.set(TOKEN_KEY, res['token']);
         this.user = this.helper.decodeToken(res['token']);
         if(this.user.paidStatus === false)
         {
           this.showAlert('Votre compte n\'est pas activé ! Veuillez contacter votre coach sportif.');
         }
         else this.registerState.next(true);
       }),
       catchError(e => {
         this.showAlert(e.error.msg);
         throw new Error(e);
       })
     );
 }

 
   register(credentials) {
     return this.http.post(`${this.url}/users/register`, credentials).pipe(
       tap( res => {
         console.log(res);
         this.temporary_email = res['email'];
         this.registerState.next(true);
       }),
      catchError(e => {
        console.log(e.error.msg);
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
   }
   
   addInformations(credentials) {
     console.log(this.temporary_email);
     console.log(credentials);
     return this.http.post(`${this.url}/users/informations`, credentials).pipe(
      tap( res => {
        console.log(res);
      }),
     catchError(e => {
       console.log(e.error.msg);
       this.showAlert(e.error.msg);
       throw new Error(e);
     })
   );
   }
/*     if(this.plt.is('cordova')) {
      return this.postHttpNative(`${this.url}/users/register`, credentials).pipe(
        catchError(e => {
          this.showAlert(e.error.msg);
          throw new Error(e);
        })
      )
    }

    else {
      return this.postHttp(`${this.url}/users/register`, credentials).pipe(
        catchError(e => {
          this.showAlert(e.error.msg);
          throw new Error(e);
        })
      )
    }
  } */
 
  login(credentials) {
     return this.http.post(`${this.url}/users/login`, credentials)
      .pipe(
        tap(res => {
          this.storage.set(TOKEN_KEY, res['token']);
          this.user = this.helper.decodeToken(res['token']);
          if(this.user.paidStatus === false)
          {
            this.showAlert('Votre compte n\'est pas activé ! Veuillez contacter votre coach sportif.');
          }
          else this.authenticationState.next(true);
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
          this.showAlert('Vous n\'êtes pas authentifié !');
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
          this.showAlert('Vous n\'êtes pas authentifié !');
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
          this.showAlert('Vous n\'êtes pas authentifié !');
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
          this.showAlert('Vous n\'êtes pas authentifié !');
          this.logout();
        }
        throw new Error(e);
      })
    )
  }

  getAllRecipes()
  {
    console.log('inside getAllRecipes');
    return this.http.get(`${this.url}/users/recipes`).pipe(
      catchError(e => {
        let status = e.status;
        if (status === 401) {
          this.showAlert('Vous n\'êtes pas authentifié !');
          this.logout();
        }
        throw new Error(e);
      })
    )
  }

   loadFavorites() {
    return this.http.get(`${this.url}/users/recipes`).pipe(
      catchError(e => {
        let status = e.status;
        if (status === 401) {
          this.showAlert('Vous n\'êtes pas authentifié !');
          this.logout();
        }
        throw new Error(e);
      })
    )
  }

  setFavorites(favorites)
  {
    this.favorites = favorites;
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
      header: 'Erreur',
      buttons: ['OK']
    });
    alert.then(alert => alert.present());
  }


  getHttp(ApiURL) {
    console.log('calling standard Http')

     return this.http.get(ApiURL);
  }

   getHttpNative(ApiURL) {
    console.log('Calling Native Http')
    console.log(this.token);
    let nativeCall = this.httpNative.get(ApiURL, {}, {
      'Content-Type': 'application/json',
      'auth': this.token
    });
    return from(nativeCall).pipe(
      );
     

  }

  postHttp(ApiURL, credentials) {
    console.log('calling standard POST Http')

     return this.http.post(ApiURL, credentials);
  }

   postHttpNative(ApiURL, credentials) {
    console.log('Calling Native POST Http')

    let nativeCall = this.httpNative.post(ApiURL,credentials, {
      'Content-Type': 'application/json'
    });

    return from(nativeCall).pipe(
    );
  }
}
