import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PixiPage } from './pixi.page';

const routes: Routes = [
  {
    path: '',
    component: PixiPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PixiPageRoutingModule {}
