import { NgModule } from '@angular/core';
import { DependenciesModule } from '../dependencies/dependencies.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    DependenciesModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [],
  exports: [ ]
})
export class ComponentsModule { }
