import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PixiPage } from './pixi.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PixiPageRoutingModule } from './pixi-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    PixiPageRoutingModule
  ],
  declarations: [PixiPage]
})
export class PixiPageModule {}
