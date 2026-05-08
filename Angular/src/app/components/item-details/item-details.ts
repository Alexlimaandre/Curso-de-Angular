import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { inject } from '@angular/core';

import { Animal } from '../../Animal';
import { ListService } from '../../services/list-service';


@Component({
  selector: 'app-item-details',
  imports: [],
  templateUrl: './item-details.html',
  styleUrl: './item-details.css',
})

export class ItemDetails {

  private listService = inject(ListService);
  private route = inject(ActivatedRoute);

  animal?: Animal; // ?faz com que o dados seja opcional
  
  ngOnInit(){
    this.getAnimal();
  }

  getAnimal(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.listService.getItem(id).subscribe((animal) => (this.animal == animal));
  }


}
