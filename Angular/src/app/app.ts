import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './components/first-component/first-component';
import { Home } from './components/home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FirstComponent, Home ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('curso_angular');
}
