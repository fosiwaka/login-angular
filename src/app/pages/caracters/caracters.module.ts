import { NgModule } from '@angular/core';
import { CaractersRoutingModule } from './caracters-routing.module';
import { CaractersComponent } from './caracters.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { CommonModule } from '@angular/common';
import { DependenciesModule } from 'src/app/dependencies/dependencies.module';

@NgModule({
  imports: [CaractersRoutingModule, ComponentsModule, CommonModule, DependenciesModule],
  declarations: [CaractersComponent],
  exports: [CaractersComponent]
})
export class CaractersModule { }
