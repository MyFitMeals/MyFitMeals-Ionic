import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PolitiquePage } from './politique.page';

describe('PolitiquePage', () => {
  let component: PolitiquePage;
  let fixture: ComponentFixture<PolitiquePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolitiquePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PolitiquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
