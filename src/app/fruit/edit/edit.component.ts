// import { Component, OnInit } from '@angular/core';
// import { FruitService } from '../fruit.service';
// import { Fruit } from '../fruit';
// import { ActivatedRoute, Router } from '@angular/router';

// @Component({
//   selector: 'app-edit',
//   templateUrl: './edit.component.html',
//   styleUrls: ['./edit.component.css']
// })
// export class EditComponent implements OnInit {

//   formdata: Fruit = {
//     id: 0,
//     name: '',
//     quantity: 0,
//     price: 0,
//   };

//   constructor(
//     private fruitService: FruitService,
//     private route: ActivatedRoute,
//     private router: Router
//   ) {}

//   ngOnInit() {
//     this.route.paramMap.subscribe((param)=>{
//       let id = Number(param.get('id'))
//       this.getByid(id)
//     })
//   }

//   getByid(id: number){
//     this.fruitService.edit(id)
//     .subscribe((data)=>{
//       this.formdata=data;
//     })
//   }

//   // update() {
//   //   this.fruitService.create(this.formdata).subscribe(() => {
//   //     alert('Fruit updated successfully!');
//   //     this.router.navigate(['/']);
//   //   }, (err) => {
//   //     alert('Error updating fruit: ' + err.message);
//   //   });
//   // }
// }


import { Component } from '@angular/core';
import { FruitService } from '../fruit.service';
import { Fruit } from '../fruit';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  formdata: Fruit = {
    id: 0,
    name: '',
    quantity: 0,
    price: 0,
  };

  constructor(
    private fruitService: FruitService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // Initialize and get the ID from route params directly
    this.route.paramMap.subscribe((param) => {
      const id = Number(param.get('id'));
      this.getByid(id);
    });
  }

  getByid(id: number) {
    this.fruitService.edit(id).subscribe((data) => {
      this.formdata = data;
    });
  }

  update() {
    this.fruitService.update(this.formdata).subscribe(() => {
      alert('Fruit updated successfully!');
      this.router.navigate(['/']);
    }, (err) => {
      alert('Error updating fruit: ' + err.message);
    });
  }
}
