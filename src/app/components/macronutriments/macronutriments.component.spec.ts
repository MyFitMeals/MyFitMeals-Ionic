import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MacronutrimentsComponent } from './macronutriments.component';

describe('MacronutrimentsComponent', () => {
  let component: MacronutrimentsComponent;
  let fixture: ComponentFixture<MacronutrimentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacronutrimentsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MacronutrimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
