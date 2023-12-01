import { Component } from "@angular/core";

@Component({
    selector: '[app-server]',
    templateUrl: './app.server.component.html'
})
export class ServerComponent{
    serverId = 10;
    serverStatus = "offline";
    getServerStatus(): string {
        return this.serverStatus;
    }
}