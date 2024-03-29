import { BackendService } from './../../services/backend.service';
import { Recipe } from './../../models/recipe';
import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private sanitizer: DomSanitizer, private backendService: BackendService) { }

  ngOnInit() {
  }

/*   getImage() {
    this.recipe.image.base64 = this.arrayBufferToBase64(this.recipe.image.data.data);
  }

  arrayBufferToBase64 = function(buffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  } */

  getRecipeIngredients(limit: number)
  {
    return this.recipe.ingredients.substring(0, limit) + '...';
  }

}
