import { Component } from '@angular/core';
import { Animal } from '../../Animal';
import { ListService } from '../../services/list-service';
import { TitleCasePipe } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-render',
  imports: [TitleCasePipe],
  templateUrl: './list-render.html',
  styleUrl: './list-render.css',
})
export class ListRender {

  constructor(private listService: ListService, private router: Router) {}

  removeAnimal(animal : Animal){
    console.log("Removendo Animal...");
    this.animals = this.listService.remove(this.animals, animal);
  }

  animalDetails = ''

  // Por padrão os dados vem de um banco, mas para a prática veremos esse dados mocado
  animals: Animal[] = [
    {id: 1, name: "bidu", type: "dog", age: 5},
    {id: 2, name: "tom", type: "cat", age: 7},
    {id: 3, name: "frida", type: "fish"},
    {id: 4, name: "clóvis", type: "bird", age: 12},
    // for(){}, no angular mais atual pode gerar algumu problema, se não tiver um item para ele usar no track
    {id: 5,name: "clóvis", type: "bird"}
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
