import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PixiPage } from './pixi.page';

describe('Tab2Page', () => {
  let component: PixiPage;
  let fixture: ComponentFixture<PixiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PixiPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PixiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
