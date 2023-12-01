import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: 'servers.component.css'
})
export class ServersComponent implements OnInit{
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TypeScript';
  serverCreated = false;

  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000)
  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created! Name is: ' + this.serverName;
    this.serverCreated = true;
  }

  onUpdateServerName(event:any){
    console.log(event.target.value);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
