import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.page.html',
  styleUrls: ['./profile-user.page.scss'],
})
export class ProfileUserPage implements OnInit {

  public email = 'baggins@gmail.com'
  public address = '32 London Bridge St'

  constructor(
    private router: Router,
  ) { }

  ngOnInit() { }

  update(email:string, address:string) {
    this.email = email
    this.address = address
  }

  logout() {
    this.router.navigate(['/'])
  }
}
