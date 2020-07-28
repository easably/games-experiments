import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'games-main',
    loadChildren: () => import('./games-main/games-main.module').then( m => m.GamesMainPageModule)
  },
  {
    path: '**',
    redirectTo: 'games-main'
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
