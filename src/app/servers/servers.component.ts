import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {appLogging} from '../server/service/logging.service';
import {log} from 'util';


// dknote: 19:  use template instead of templateUrl, use back tick "`" for multiple line
// template is "must have"
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template:`<div app-server></div> //inline template
  // <hr/>
  // <div app-server></div>`,
  styleUrls: ['./servers.component.css'],
  //providers:[appLogging] // dknote 97: notify angular about service // this will be new instance, diff from one in appComponent
  // dknote 100: removing this providers, then it will share the instance same as parent in hierachy/tree.
})
export class ServersComponent implements OnInit{
  allowNewServer = false;
  serverCreationStatus = 'Server not created!';
  userInput = '';
  serverName = '';
  serverCreated = false;
  servers = ['S1', 'S2'];
  serverNewName = '';
  localInputValue = '';
  random = 0;
  inputValue:string;

  ngOnInit(){
    this.random = Math.random();

  }

  // dknote 97: inject service
  // dknote 100: to share the appComponent's loggingService instance, still need to inject into this constructor
  constructor(private loggingService:appLogging) {
    console.log('servers constructor called');
    // setTimeout(function abc(){
    //   this.allowNewServer = true;
    //   this.serverName = 'Name initially';
    // }, 3000);
    //
    // setTimeout(() => {
    //   this.allowNewServer = true;
    //   this.serverName = 'Name initially';
    // }, 2000);

    this.allowNewServer = true;
    this.serverName = 'Name initially';
    loggingService.logStatus('servers constructor called');
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server successfully created!!!';
    this.servers.push(this.userInput);
  }

  onInput(event: Event) {
    console.log(event);
    this.userInput = (<HTMLInputElement>event.target).value; // dknote
  }

  // dknote 63: @Output: parent get result from children
  parentClick(event: string) {
    this.serverNewName = event;
  }

  // dknote 68: local template reference
  getLocal(input: any) {
    this.localInputValue = input.value;
  }


}

