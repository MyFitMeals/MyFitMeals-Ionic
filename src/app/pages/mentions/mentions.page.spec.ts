import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MentionsPage } from './mentions.page';

describe('MentionsPage', () => {
  let component: MentionsPage;
  let fixture: ComponentFixture<MentionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MentionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
