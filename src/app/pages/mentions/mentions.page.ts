import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentions',
  templateUrl: './mentions.page.html',
  styleUrls: ['./mentions.page.scss'],
})
export class MentionsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  goToPolitique()
  {
    this.router.navigate(['/politique']);
  }

}
