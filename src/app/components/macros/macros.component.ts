import { PopoverController } from '@ionic/angular';
import { MacrosService } from './../../services/macros.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-macros',
  templateUrl: './macros.component.html',
  styleUrls: ['./macros.component.scss'],
})
export class MacrosComponent implements OnInit {

  private proteins: number;
  private carbs: number;
  private fats: number;
  macrosForm: FormGroup;
  

  constructor(private macroService : MacrosService, private popOverController: PopoverController,
    private formBuilder: FormBuilder) { }

    ngOnInit() {
    this.macrosForm = this.formBuilder.group({
      proteins: ['', [Validators.required]],
      carbs: ['', [Validators.required]],
      fats: ['', [Validators.required]]
    });
  }



  setQuantity(macro: string, value)
  {
    if(macro === 'proteins')
    {
      this.proteins = value;
    }

    if(macro === 'carbs')
    {
      this.carbs = value;
    }

    if(macro === 'fats')
    {
      this.fats = value;
    }

    console.log(macro);
    console.log(value);
  }

  onSubmit()
  {
    this.macroService.applyMacros(this.proteins, this.fats, this.carbs);
    this.dismissPopover();
  }

  dismissPopover() {
    if (this.popOverController) {
      this.popOverController.dismiss().then(() => { this.popOverController = null; });
    }
  }

  resetMacros()
  {
    this.macroService.resetMacros();
  }

}
