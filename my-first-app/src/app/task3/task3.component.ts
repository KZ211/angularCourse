import { Component } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrl: './task3.component.css',
  styles:`
    .fulanito{
      color: red;
    }
    .menganito{
      color: green;
    }
  `
})
export class Task3Component {
  clave = '';
  fulanito = false;
  count = [];
  num = 0;

  activar(){
    this.fulanito = this.fulanito != true ? true: false;
    this.count.push(this.num);
    this.num++;    
  }

  getColor(){
    return this.num >= 5 ? "blue" : "black";
  }
}
