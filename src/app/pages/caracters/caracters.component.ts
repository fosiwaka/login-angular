import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Caracter } from 'src/app/interfaces/caracters.interfaces';
import { CaractersService } from 'src/app/services/caracters/caracters.service';

@Component({
  selector: 'app-caracters',
  templateUrl: './caracters.component.html',
  styleUrls: ['./caracters.component.css']
})
export class CaractersComponent implements OnInit {

  caracters$: Observable<Array<Caracter>> = of([{} as Caracter]);

  constructor(
    private caractersService: CaractersService
  ) { }

  ngOnInit() {
    this.caracters$ = this.caractersService.getCaracters();
  }

}
