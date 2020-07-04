import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

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

  constructor(private http: HttpClient) {}

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


    this.http.post<any>('https://myfitmeals.herokuapp/recipes/', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

}
