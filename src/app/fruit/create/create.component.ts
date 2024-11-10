import { Component } from '@angular/core';
import { FruitService } from '../fruit.service';
import {  Router } from '@angular/router';
import { Fruit } from '../fruit';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  constructor(private fruitService: FruitService, private router: Router) {

  }

  formdata: Fruit = {
    id: 0,
    name: '',
    quantity: null,
    price: null,
  }

  create() {
    this.fruitService.create(this.formdata)
      .subscribe({
        next: () => {
          alert('Fruit created successfully!');

          this.router.navigate(['/']);
        },
        error: (err) => {
          alert('Error creating fruit: ' + err.message);
        }
      })
  }
}
