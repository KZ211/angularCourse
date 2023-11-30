import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
})
export class ServersComponent implements OnInit{
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';

  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000)
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created!';
  }

  onUpdateServerName(event:any){
    console.log(event.target.value);
    this.serverName = "My Server name is " + (<HTMLInputElement>event.target).value;
  }
}
