import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MacrosCalculatorPageRoutingModule } from './macros-calculator-routing.module';

import { MacrosCalculatorPage } from './macros-calculator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MacrosCalculatorPageRoutingModule
  ],
  declarations: [MacrosCalculatorPage]
})
export class MacrosCalculatorPageModule {}
