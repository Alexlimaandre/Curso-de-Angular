import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {

  // ngStyle
  size: number = 40;
  font: string = 'Arial';
  color: string = 'green';

  // ngClass
  classes : string[] = ['blue-title', 'small-title']
  underline : string = 'underline';
}
