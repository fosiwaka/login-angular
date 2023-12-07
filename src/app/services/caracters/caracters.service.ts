import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request/http-request.service';
import { Caracter } from 'src/app/interfaces/caracters.interfaces';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaractersService {

  constructor(
    private http: HttpRequestService
  ) { }

  getCaracters(): Observable<Array<Caracter>> {
    return this.http.get({endpoint: 'https://rickandmortyapi.com/api/character', isPublicRoute: true}).pipe(
      map((response: {results: Array<Caracter>}) => response.results)
    )
  }
}
