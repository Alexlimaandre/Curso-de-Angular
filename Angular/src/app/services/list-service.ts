import { Injectable } from '@angular/core';
import {Animal} from '../Animal';

@Injectable({
  providedIn: 'root',
})
export class ListService {


  remove(animals : Animal[], animal : Animal){
    return animals = animals.filter(param => animal.id !== param.id )
  }
}
