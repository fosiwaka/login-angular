import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientsComponent } from './clients/clients.component';
import { ReportTemplatesComponent } from './report-templates/report-templates.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/pages/dashboard'},
   {
      path: '', component: PagesComponent,
      children: [
        // {
        //   path: 'welcome', loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule)
        // },
        {
          path: 'dashboard',
          component: DashboardComponent
        },
        {
          path: 'clients',
          component: ClientsComponent
        },
        {
          path: 'reportTemplates',
          component: ReportTemplatesComponent
        }
      ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
