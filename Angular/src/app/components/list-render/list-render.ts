import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  imports: [],
  templateUrl: './list-render.html',
  styleUrl: './list-render.css',
})
export class ListRender {

  // Por padrão os dados vem de um banco, mas para a prática veremos esse dados mocado
  animals: any = [
    {name: "Bidu", Type: "Dog"},
    {name: "Tom", Type: "Cat"},
    {name: "Frida", Type: "Fish"},
    {name: "Clóvis", Type: "Bird"},
    // for(){}, no formato atuualm oide gerar algumu problemaa
    {name: "Clóvis", Type: "Bird"}
  ]

  names : any = [ {id: 1, name: "Alex", ismy: "Eu"},
    {id: 2, name: "Pedro", ismy: "Brother"},
    {id: 3, name: "Gabi", ismy: "Sister"},
    {id: 4, name: "Ana", ismy: "Mother"},
    {id: 5, name: "Clóvis", ismy: "Grandmother"}]

}
