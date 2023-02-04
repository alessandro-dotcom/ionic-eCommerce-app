import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./screens/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./screens/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'profile-drink',
    loadChildren: () => import('./screens/profile-drink/profile-drink.module').then( m => m.ProfileDrinkPageModule)
  },
  {
    path: 'research',
    loadChildren: () => import('./screens/research/research.module').then( m => m.ResearchPageModule)
  },
  {
    path: 'favorites-drinks',
    loadChildren: () => import('./screens/favorites-drinks/favorites-drinks.module').then( m => m.FavoritesDrinksPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./screens/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'profile-user',
    loadChildren: () => import('./screens/profile-user/profile-user.module').then( m => m.ProfileUserPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
