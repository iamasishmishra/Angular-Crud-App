import { Component } from '@angular/core';
import { FruitService } from '../fruit.service';
import { Fruit } from '../fruit';
import { OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fruits: Fruit[] = []

  constructor(private fruitService: FruitService, private router: Router) {

  }

  ngOnInit() {
    this.fruitService.getAll()
    .subscribe((result)=>{
      this.fruits = result;
    })
  }

  edit(fruit: Fruit) {
    this.router.navigate(['/edit', fruit.id]);
  }

  delete(id: number){
    this.fruitService.delete(id).subscribe({
      next: (data)=>{
        this.fruits=this.fruits.filter(_=>_.id != id)
      }
    })
  }

  
}
