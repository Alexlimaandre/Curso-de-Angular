import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  imports: [],  
  templateUrl: './first-component.html',
  styleUrl: './first-component.css',
})
export class FirstComponent {

  name: string = "Alexandre";
  idade: number = 19;
  job : string = "Programador";
  hobbies: string[] = ['Jogar', 'Estudar', 'Treinar'];
  jogo = {
    name: 'Rocket League',
    year: '2015',
    descricao: 'Jogo de carro com futebol'
  }

  constructor(){

  }

}
