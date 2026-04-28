import { Injectable } from '@angular/core';
import {Animal} from '../Animal';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ListService {

  // private apiUrl

  remove(animals : Animal[], animal : Animal){
    return animals = animals.filter(param => animal.id !== param.id )
  }

  getAll(){

  }

}
