import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaloriesIntakePage } from './calories-intake.page';

const routes: Routes = [
  {
    path: '',
    component: CaloriesIntakePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaloriesIntakePageRoutingModule {}
