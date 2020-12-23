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
  private age: Number;
  private height: Number;
  private weight: Number;


  constructor(private favoritesService: FavoritesService,
    private authService: AuthService) {
      this.loadInformations();
    }

  loadInformations() {
    console.log(this.authService.userInformations);
    this.firstName = this.authService.userInformations['user']['firstName'];
    this.lastName = this.authService.userInformations['user']['lastName'];
    this.age = this.authService.userInformations['user']['age'];
    this.weight = this.authService.userInformations['user']['weight'];
    this.height = this.authService.userInformations['user']['height'];
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

  getAge() {
    return this.age;
  }

  getWeight() {
    return this.weight;
  }

  getHeight() {
    return this.height;
  }
}
