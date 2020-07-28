import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamesMainPageRoutingModule } from './games-main-routing.module';

import { GamesMainPage } from './games-main.page';
import {VideoGameComponent} from '../games/video-game/video-game.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamesMainPageRoutingModule
  ],
  declarations: [
      GamesMainPage,
      VideoGameComponent,
  ]
})
export class GamesMainPageModule {}
