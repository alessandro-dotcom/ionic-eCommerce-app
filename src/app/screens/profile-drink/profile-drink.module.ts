import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileDrinkPageRoutingModule } from './profile-drink-routing.module';

import { ProfileDrinkPage } from './profile-drink.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileDrinkPageRoutingModule
  ],
  declarations: [ProfileDrinkPage]
})
export class ProfileDrinkPageModule {}
