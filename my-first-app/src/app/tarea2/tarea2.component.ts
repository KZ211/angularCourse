import { Component } from '@angular/core';

@Component({
  selector: 'app-tarea2',
  templateUrl: './tarea2.component.html',
  styleUrl: './tarea2.component.css'
})
export class Tarea2Component {
  nombreDeUsuario = "";

  restablecer():void {
      this.nombreDeUsuario = "";
  }
}
