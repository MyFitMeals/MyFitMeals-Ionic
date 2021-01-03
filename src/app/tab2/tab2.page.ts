import { LoadingController } from '@ionic/angular';
import { AuthService } from './../services/auth.service';
import { FavoritesService } from './../services/favorites.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {





  constructor(private favoritesService: FavoritesService, public loadingController: LoadingController) {}

  getFavorites()
  {
   return this.favoritesService.getFavorites()
  }

  noFavorites()
  {
    return this.favoritesService.getFavorites().length == 0;
  }


}
