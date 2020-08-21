import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CgvPage } from './cgv.page';

describe('CgvPage', () => {
  let component: CgvPage;
  let fixture: ComponentFixture<CgvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CgvPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CgvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
