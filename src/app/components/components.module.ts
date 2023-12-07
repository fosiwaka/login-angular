import { NgModule } from '@angular/core';
import { DependenciesModule } from '../dependencies/dependencies.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { CardComponent } from './cards/cards.component';

@NgModule({
  imports: [
    DependenciesModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [CardComponent],
  exports: [  CardComponent ]
})
export class ComponentsModule { }
