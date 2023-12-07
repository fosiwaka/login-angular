import { Component, Input } from '@angular/core';
import { Caracter } from 'src/app/interfaces/caracters.interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardComponent {
  @Input() caracter: Caracter = {} as Caracter;
}
