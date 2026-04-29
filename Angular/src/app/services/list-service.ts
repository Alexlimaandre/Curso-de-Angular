import { inject, Injectable } from '@angular/core';
import {Animal} from '../Animal';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListService {

  private httpcli = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/animais';

  remove(animals : Animal[], animal : Animal){
    return animals = animals.filter(param => animal.id !== param.id );
  }

  getAll(): Observable<Animal[]> {
    return this.httpcli.get<Animal[]>(this.apiUrl);
  }

}
