import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './app.server.component.html'
})
export class ServerComponent{
    serverId = 10;
    serverStatus = Math.random() > 0.5 ? "offline": "online";
    getServerStatus(): string {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === "online" ? "green" : "red";
    }
}