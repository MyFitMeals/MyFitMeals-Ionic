import { Component } from '@angular/core';
import { BackendService } from './../services/backend.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private value: string;

  constructor(private backendService: BackendService) {
    this.getHelloWorld();
  }

  async getHelloWorld() {
    await this.backendService.getHelloWorld();
    this.value = this.backendService.getData();
    console.log('value : ');
    console.log(this.value)
  }

}
