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
      email: [this.authService.temporary_email],
      password: [this.authService.temporary_password]
    });
  }
 
  onSubmit() {
    this.authService.addInformations(this.credentialsForm.value).subscribe(res => {
      // Call Login to automatically login the new user
      this.router.navigate(['login']);
      this.authService.showAlert('Tu t\'es inscrit avec succès ! Contacte ton coach sportif pour pouvoir t\'abonner ;)');
    });
  }

  onChange(event) {
    this.selectedGender = event.target.value;
    console.log(this.selectedGender);
  }

}
