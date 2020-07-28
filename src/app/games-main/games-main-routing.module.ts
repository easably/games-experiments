import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesMainPage } from './games-main.page';

const routes: Routes = [
  {
    path: '',
    component: GamesMainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesMainPageRoutingModule {}
