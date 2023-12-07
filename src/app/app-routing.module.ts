import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoggedGuard } from './guards/logged/logged.guard';
import { LogoutGuard } from './guards/logout/logout.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/pages'},
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    canActivate: [LoggedGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LogoutGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
