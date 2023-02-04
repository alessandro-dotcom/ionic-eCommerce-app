import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileDrinkPage } from './profile-drink.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileDrinkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileDrinkPageRoutingModule {}
