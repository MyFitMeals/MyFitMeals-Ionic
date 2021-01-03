import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaloriesIntakePageRoutingModule } from './calories-intake-routing.module';

import { CaloriesIntakePage } from './calories-intake.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CaloriesIntakePageRoutingModule
  ],
  declarations: [CaloriesIntakePage]
})
export class CaloriesIntakePageModule {}
