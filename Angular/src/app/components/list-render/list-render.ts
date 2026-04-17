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
    {name: "Bidu", type: "Dog"},
    {name: "Tom", Type: "Cat"},
    {name: "Frida", Type: "Fish"},
    {name: "Clóvis", Type: "Bird"}
  ]

}
