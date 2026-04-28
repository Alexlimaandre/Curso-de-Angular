import { Component, inject } from '@angular/core';
import { Animal } from '../../Animal';
import { ListService } from '../../services/list-service';
import { TitleCasePipe } from '@angular/common';
import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-list-render',
  imports: [TitleCasePipe],
  templateUrl: './list-render.html',
  styleUrl: './list-render.css',
})
export class ListRender {

  private listService = inject(ListService);
  private http = Inject(HttpClient)

  constructor(){
    this.getAnimals();
  }

  animalDetails = ''

  // Por padrão os dados vem de um banco, mas para a prática veremos esse dados mocado(ANTES) - AULA 18 muda isso!!!
  animals: Animal[] = [{id: 1, name: "bidu", type: "dog", age: 5}]

  //(DEPOIS) - teoria, pois os dados nãao vem de um banco 'ainda'
  //  animals: Animal[] = []

  showAge(animal : Animal): void
  {
    if (animal.age !== undefined){
      this.animalDetails = ` O pet tem :${animal.age} ano(s)`
    }
    else{
      this.animalDetails = 'O pet não possui idade registrada!'
    }
  }
  
  removeAnimal(animal : Animal)
  {
    console.log("Removendo Animal...");
    this.animals = this.listService.remove(this.animals, animal);
  }

  getAnimals(): void {
    this.listService.getAll();
  }

  // Dados mocados!
  names : any = [ {id: 1, name: "Alex", ismy: "Eu"},
    {id: 2, name: "Pedro", ismy: "Brother"},
    {id: 3, name: "Gabi", ismy: "Sister"},
    {id: 4, name: "Ana", ismy: "Mother"},
    {id: 5, name: "Clóvis", ismy: "Grandmother"}]

}
