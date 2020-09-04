import { AuthService } from './../services/auth.service';
import { FavoritesService } from './../services/favorites.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  private firstName: String;
  private lastName: String;


  constructor(private favoritesService: FavoritesService,
    private authService: AuthService) {
      this.loadInformations();
    }


  getFavorites()
  {
    return this.favoritesService.getFavorites();
  }

  loadInformations() {
    this.authService.getInformations().subscribe(res => {
      this.firstName = res['user']['firstName'];
      this.lastName = res['user']['lastName'];
    });
  }

  getFirstName()
  {
    return this.firstName;
  }

  getLastName()
  {
    return this.lastName;
  }

  logout()
  {
    this.authService.logout();
  }
}
