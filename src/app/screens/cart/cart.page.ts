import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  public cart: any
  public totale: any
  
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.cart = this.dataService.loadCart()
  }
}
