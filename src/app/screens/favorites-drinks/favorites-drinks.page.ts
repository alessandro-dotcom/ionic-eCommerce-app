import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-favorites-drinks',
  templateUrl: './favorites-drinks.page.html',
  styleUrls: ['./favorites-drinks.page.scss'],
})
export class FavoritesDrinksPage implements OnInit {

  public favorites: any

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.favorites = this.dataService.loadFavorites()
  }

  goProfileDrink(item: any) {
    let navExtra: NavigationExtras = {
      queryParams: {
        drink: JSON.stringify(item)
      }
    }
    this.router.navigate(['/profile-drink'], navExtra);
  }
}