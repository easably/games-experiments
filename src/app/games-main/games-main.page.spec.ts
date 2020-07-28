import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GamesMainPage } from './games-main.page';

describe('GamesMainPage', () => {
  let component: GamesMainPage;
  let fixture: ComponentFixture<GamesMainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesMainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GamesMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
