import { NgModule } from '@angular/core';
import { DependenciesModule } from 'src/app/dependencies/dependencies.module';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    DependenciesModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [PagesComponent],
  exports: [PagesComponent],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [PagesComponent]
})
export class PagesModule { }
