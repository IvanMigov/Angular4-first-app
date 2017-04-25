import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName = 'start value';
  serverCreated = false;
  servers = ['TestServer','RestServer 2'];

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000);
  };
  ngOnInit() {}
  onCreateServer() {
    this.serverCreationStatus = 'server was created '+ this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  };
  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
  };

}
