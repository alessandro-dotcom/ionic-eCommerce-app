import { Injectable } from '@angular/core';
import * as cocktail from '../../assets/json/thecocktaildb.json'
import * as favorites from '../../assets/json/favorites.json'
import * as cart from '../../assets/json/cart.json'

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor() { }

  loadCocktail() {
    return cocktail
  }

  loadFavorites() {
    return favorites
  }

  loadCart() {
    return cart
  }
}