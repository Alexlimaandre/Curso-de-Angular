import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {

  showMessege : boolean =  false;
  btnText : string = "Exibir";

  showMessage(): void{
    // toggle
    this.showMessege = !this.showMessege;
    // ternario
    this.btnText = !this.showMessege ? "Exibir" : "Esconder";
  }

}
