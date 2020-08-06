import { MacrosService } from './../../services/macros.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-macronutriments',
  templateUrl: './macronutriments.component.html',
  styleUrls: ['./macronutriments.component.scss'],
})
export class MacronutrimentsComponent implements OnInit {

  private value: string;
  yudsegment: string;
  proteinsRange: string;
  carbsRange: string;
  fatsRange: string;

  constructor(private macrosService: MacrosService) { }

  ngOnInit() {
    this.yudsegment = "proteins";
    this.proteinsRange = "0";
    this.carbsRange = "0";
    this.fatsRange = "0";
  }
  

}
