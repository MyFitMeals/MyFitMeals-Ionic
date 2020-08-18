import { RecipesLoaderService } from './../services/recipes-loader.service';
import { Component, OnInit } from '@angular/core';
import { PopoverController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.page.html',
  styleUrls: ['./add-recipe.page.scss'],
})
export class AddRecipePage implements OnInit {

  ngOnInit() {
  }

  private images;

  registerForm = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      calories: new FormControl('', Validators.required),
      proteins: new FormControl('', Validators.required),
      fats: new FormControl('', Validators.required),
      carbs: new FormControl('', Validators.required),
      instructions: new FormControl('', Validators.required),
      preparationTime: new FormControl('', Validators.required),
      ingredients: new FormControl('', Validators.required),
      tips: new FormControl('', Validators.required),
    }
  );

  constructor(private http: HttpClient, private popoverController: PopoverController, 
    private toastController: ToastController, private router: Router, private recipesLoader: RecipesLoaderService) {}

  selectImage(event) {
    if(event.target.files.length > 0) 
    {
      const file = event.target.files[0];
      this.images = file;
    }
  }

  onSubmit() {

    const formData = new FormData();
    formData.append('file', this.images);
    formData.append('name', this.registerForm.value.name);
    formData.append('calories', this.registerForm.value.calories);
    formData.append('proteins', this.registerForm.value.proteins);
    formData.append('fats', this.registerForm.value.fats);
    formData.append('carbs', this.registerForm.value.carbs);
    formData.append('instructions', this.registerForm.value.instructions);
    formData.append('preparationTime', this.registerForm.value.preparationTime);
    formData.append('ingredients', this.registerForm.value.ingredients);
    formData.append('tips', this.registerForm.value.tips);


    this.http.post<any>('https://myfitmeals.herokuapp.com/recipes/', formData).subscribe(
      (res) =>
      {
        this.presentToast('Recette ajoutée avec succès !');
        console.log(res);
        this.recipesLoader.loadRecipes().then(result =>
          {
            this.router.navigate(['tabs/tab1']);
          })
        
      },
      (err) =>
      {
        console.log(err);
        this.presentToast('Echec d\'ajout de la recette... !')
      } 
    );
  }


  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1000
    });
    toast.present();
  }
}
