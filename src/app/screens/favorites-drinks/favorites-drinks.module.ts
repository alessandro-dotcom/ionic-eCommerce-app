import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritesDrinksPageRoutingModule } from './favorites-drinks-routing.module';

import { FavoritesDrinksPage } from './favorites-drinks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritesDrinksPageRoutingModule
  ],
  declarations: [FavoritesDrinksPage]
})
export class FavoritesDrinksPageModule {}
