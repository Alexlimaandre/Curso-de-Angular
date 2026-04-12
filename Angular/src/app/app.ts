import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './components/first-component/first-component';
import { Home } from './components/home/home';
import { ParentData } from './components/parent-data/parent-data';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FirstComponent, Home, ParentData],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('curso_angular');

  userName: string = "André";
  userData = {
    email: 'andre@gmail.com',
    role: 'ADMIN'
  };

  idade : number = 30;

  userEndereco = {
    logradouro : "Rua São João, 102",
    numero: 123,
    complemento: "Ap 141",
  };

}
