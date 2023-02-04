import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user: any
  public email = 'Frodo'
  public password = 'Frodo'
  public showPassword = false;

  constructor(
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() { }

  login() {
    if(this.email == 'Frodo' && this.password == 'Frodo')
      this.router.navigate(['/tabs/research'])
    else
      this.presentAlert()
  }

  goNewUser() {
    this.router.navigate(['/new-user'])
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Errore',
      message: 'Autenticazione non riuscita. Riprova.',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
