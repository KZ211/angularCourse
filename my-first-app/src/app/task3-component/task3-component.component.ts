import { Component } from '@angular/core';
import { Task3Component } from '../task3/task3.component';

@Component({
  selector: 'app-task3-component',
  templateUrl: './task3-component.component.html',
  styleUrl: './task3-component.component.css'
})
export class Task3ComponentComponent extends Task3Component{
  count = this.count;

  ver(){
    console.log(this.count);
  }
}
