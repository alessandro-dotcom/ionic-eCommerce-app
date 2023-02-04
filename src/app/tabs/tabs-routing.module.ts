import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'research',
        loadChildren: () => import('../screens/research/research.module').then( m => m.ResearchPageModule)
      },
      {
        path: 'favorites-drinks',
        loadChildren: () => import('../screens/favorites-drinks/favorites-drinks.module').then( m => m.FavoritesDrinksPageModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('../screens/cart/cart.module').then( m => m.CartPageModule)
      },
      {
        path: 'profile-user',
        loadChildren: () => import('../screens/profile-user/profile-user.module').then( m => m.ProfileUserPageModule)
      },
      {
        path: '',
        redirectTo: 'research',
        pathMatch: 'full',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
