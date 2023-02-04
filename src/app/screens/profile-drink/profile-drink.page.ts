import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-profile-drink',
  templateUrl: './profile-drink.page.html',
  styleUrls: ['./profile-drink.page.scss'],
})
export class ProfileDrinkPage implements OnInit {
  
  public drink: any
  public ingredients: any
  public favorites: any
  public heartButton: any

  constructor(
    private toastController: ToastController,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() { 
    this.getIdDrink();
  }

  ionViewWillEnter() {
    this.getIdDrink();
  }

  getIdDrink() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if(JSON.parse(params['drink']))
        this.drink = JSON.parse(params['drink'])
      this.getIngredients()
      this.isFavorite()
    })
  }

  private getIngredients() {

  }

  private isFavorite() {

  }

  clickHeart(drink: any) {
    if(this.heartButton === 'heart-outline') {
      this.presentToast('Aggiunto')
      this.heartButton = 'heart'

    } else {
      this.presentToast('Rimosso')
      this.heartButton = 'heart-outline'
 
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      cssClass: "toast",
      message: message,
      duration: 1500,
      position: 'top'
    });

    await toast.present();
  }
}