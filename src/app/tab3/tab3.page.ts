import { FavoritesService } from './../services/favorites.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private favoritesService: FavoritesService) {}


  getFavorites()
  {
    return this.favoritesService.getFavorites();
  }
}
