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
  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000);
  };
  ngOnInit() {}
  onCreateServer() {
    this.serverCreationStatus = 'server was created '+ this.serverName;
  };
  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
  };

}
