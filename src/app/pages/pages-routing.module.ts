import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
   {
      path: '', component: PagesComponent,
      children: [
        {
          path: 'welcome', loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule)
        },
        {
          path: 'caracters', loadChildren: () => import('./caracters/caracters.module').then(m => m.CaractersModule)
        }
      ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
