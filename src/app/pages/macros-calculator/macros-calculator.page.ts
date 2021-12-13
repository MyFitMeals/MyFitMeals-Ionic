import { AuthService } from '../../services/auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-macros-calculator',
  templateUrl: './macros-calculator.page.html',
  styleUrls: ['./macros-calculator.page.scss'],
})
export class MacrosCalculatorPage implements OnInit {

  credentialsForm: FormGroup;
  selectedGender: any;
 
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }
 
  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      age: ['', [Validators.required]],
      gender: ['F', [Validators.required]],
      height: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      session: ['', [Validators.required]],
      walk: ['', [Validators.required]],
      email: [this.authService.temporary_email]
    });
  }
 
  onSubmit() {
    this.authService.addInformations(this.credentialsForm.value).subscribe(res => {
      // Call Login to automatically login the new user
      this.calculateCalories();
    });
  }

  onChange(event) {
    this.selectedGender = event.target.value;
    console.log(this.selectedGender);
  }

  calculateCalories() {
    let coef = 0;
    let BMR = 0;
    let proteins = 0;
    let fats = 0;
    let carbs = 0;

    if(this.credentialsForm.get('walk').value < 5000) {
      coef = 1.3;
    }

    else if(this.credentialsForm.get('walk').value < 10000) {
      coef = 1.5;
    }

    else if(this.credentialsForm.get('walk').value < 15000) {
      coef = 1.7;
    }

    else if(this.credentialsForm.get('walk').value > 15000) {
      coef = 1.9;
    }

    if(this.credentialsForm.get('gender').value == 'M') {
      BMR = (10 * this.credentialsForm.get('weight').value) + (6.25 * this.credentialsForm.get('height').value) - (5 * this.credentialsForm.get('age').value) + 5;
      
    }

    else {
      BMR = (10 * this.credentialsForm.get('weight').value) + (6.25 * this.credentialsForm.get('height').value) - (5 * this.credentialsForm.get('age').value) - 161;
    }

    proteins = (this.credentialsForm.get('height').value - 100) * 2;
    fats = (this.credentialsForm.get('height').value - 100) * 0.8;
    carbs = (BMR - (proteins * 4) - (fats * 9)) / 4;

    let calories_Calculator = {
      calories: BMR,
      proteins: proteins,
      carbs: carbs,
      fats: fats
    }

    console.log(BMR);
    console.log(proteins);
    console.log(fats);
    console.log(carbs);

    this.authService.addCalories(calories_Calculator).subscribe(res => {
      // Call Login to automatically login the new user
      this.router.navigate(['login']);
      this.authService.showAlert('Tu t\'es inscrit avec succès ! Contacte ton coach sportif pour pouvoir t\'abonner ;)');
    });


  }

}
