import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  imports: [],
  templateUrl: './parent-data.html',
  styleUrl: './parent-data.css',
})
export class ParentData {

  @Input() name: string = '';// por padrão é necessário um valor, então é comum colocar "" e no component pai ele adiciona os dados
  @Input() userData!: {email: string, role: string};// o ! inicializa o dado

constructor () {
}


}  
