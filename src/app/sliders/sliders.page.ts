import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.page.html',
  styleUrls: ['./sliders.page.scss'],
})
export class SlidersPage implements OnInit {
  // Optional parameters to pass to the swiper instance.
  // See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  constructor(private router: Router) { }

  ngOnInit() {
  }

  continue() {
    this.router.navigate(['register']);
  }

}
