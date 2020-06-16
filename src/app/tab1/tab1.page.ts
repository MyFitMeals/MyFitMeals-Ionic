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

  getHelloWorld() {
    return this.backendService.getHelloWorld().subscribe(data =>
      {
        this.value = data.value;
        console.log(data);
      })
  }

}
