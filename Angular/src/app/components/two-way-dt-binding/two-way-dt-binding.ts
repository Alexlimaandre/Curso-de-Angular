import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-dt-binding',
  imports: [FormsModule],
  templateUrl: './two-way-dt-binding.html',
  styleUrl: './two-way-dt-binding.css',
})
export class TwoWayDtBinding {

  name = '';
  idade = 0;
}
