import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaractersComponent } from './caracters.component';

const routes: Routes = [
  { path: '', component: CaractersComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaractersRoutingModule { }
