import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoritesDrinksPage } from './favorites-drinks.page';

const routes: Routes = [
  {
    path: '',
    component: FavoritesDrinksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritesDrinksPageRoutingModule {}
