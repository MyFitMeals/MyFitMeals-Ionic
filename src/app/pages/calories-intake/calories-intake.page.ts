import { AuthService } from '../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calories-intake',
  templateUrl: './calories-intake.page.html',
  styleUrls: ['./calories-intake.page.scss'],
})
export class CaloriesIntakePage implements OnInit {

  credentialsForm: FormGroup;
 
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }
 
  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      calories: ['', [Validators.required]],
      proteins: ['F', [Validators.required]],
      carbs: ['', [Validators.required]],
      fats: ['', [Validators.required]],
      email: [this.authService.temporary_email]
    });
  }
 
  onSubmit() {
    this.authService.addCalories(this.credentialsForm.value).subscribe(res => {
      // Call Login to automatically login the new user
      this.router.navigate(['login']);
      this.authService.showAlert('Tu t\'es inscrit avec succès ! Contacte ton coach sportif pour pouvoir t\'abonner ;)');
    });
  }

}
