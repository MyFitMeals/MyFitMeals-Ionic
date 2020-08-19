import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PickerController, ToastController } from '@ionic/angular';
import { PickerOptions } from "@ionic/core";


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {
  animals: string[] = [
    "Problème de paiement",
    "Problème de compte",
    "Problème de recette"
  ];

  contactUsForm: FormGroup;

  constructor(private pickerController: PickerController, private router: Router, 
    private toast: ToastController, private formBuilder: FormBuilder) { }

 
  ngOnInit() {
    this.contactUsForm = this.formBuilder.group({
      message: ['', [Validators.required]]
    });
  }
 


  async showPicker() {
    let options: PickerOptions = {
      buttons: [
        {
          text: "Cancel",
          role: 'cancel'
        },
        {
          text:'Ok',
          handler:(value:any) => {
            console.log(value);
          }
        }
      ],
      columns:[{
        name:'Animals',
        options:this.getColumnOptions()
      }]
    };

    let picker = await this.pickerController.create(options);
    picker.present()
  }

  getColumnOptions(){
    let options = [];
    this.animals.forEach(x => {
      options.push({text:x,value:x});
    });
    return options;
  }

  async presentToast() {
    const toast = await this.toast.create({
      message: 'Votre message a bien été envoyé !',
      duration: 500,
      animated: true,
      mode: 'ios'
    });
    toast.present();
  }

  onSubmit() {
    this.presentToast();
    this.router.navigate(['/tabs/tab1']);
  }

}