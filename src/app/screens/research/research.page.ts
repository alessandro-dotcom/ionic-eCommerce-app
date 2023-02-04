import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-research',
  templateUrl: './research.page.html',
  styleUrls: ['./research.page.scss'],
})
export class ResearchPage implements OnInit {

  public drinks: any

  constructor(
    private toastController: ToastController,
    private dataService: DataService, 
    private router: Router
  ) { }

  ngOnInit() { 
    this.drinks = this.dataService.loadCocktail()
  }
  
  goProfileDrink(item: any) {
    let navExtra: NavigationExtras = {
      queryParams: {
        drink: JSON.stringify(item)
      }
    }
    this.router.navigate(['/profile-drink'], navExtra)
  }
}
