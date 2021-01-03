import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaloriesIntakePage } from './calories-intake.page';

describe('CaloriesIntakePage', () => {
  let component: CaloriesIntakePage;
  let fixture: ComponentFixture<CaloriesIntakePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaloriesIntakePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CaloriesIntakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
