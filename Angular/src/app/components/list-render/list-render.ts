import { Component } from '@angular/core';
import { Animal } from '../../Animal';

@Component({
  selector: 'app-list-render',
  imports: [],
  templateUrl: './list-render.html',
  styleUrl: './list-render.css',
})
export class ListRender {

  animalDetails = ''

  // Por padrão os dados vem de um banco, mas para a prática veremos esse dados mocado
  animals: Animal[] = [
    {id: 1, name: "Bidu", type: "Dog", age: 5},
    {id: 2, name: "Tom", type: "Cat", age: 7},
    {id: 3, name: "Frida", type: "Fish"},
    {id: 4, name: "Clóvis", type: "Bird", age: 12},
    // for(){}, no angular mais atual pode gerar algumu problema, se não tiver um item para ele usar no track
    {id: 5,name: "Clóvis", type: "Bird"}
  ]

  showAge(animal : Animal): void{
    if (animal.age !== undefined){
      this.animalDetails = ` O pet tem :${animal.age} ano(s)`
    }
    else{
      this.animalDetails = 'O pet não possui idade registrada!'
    }
  }

  names : any = [ {id: 1, name: "Alex", ismy: "Eu"},
    {id: 2, name: "Pedro", ismy: "Brother"},
    {id: 3, name: "Gabi", ismy: "Sister"},
    {id: 4, name: "Ana", ismy: "Mother"},
    {id: 5, name: "Clóvis", ismy: "Grandmother"}]

}
