import {Component, OnInit} from '@angular/core';


// dknote: 19:  use template instead of templateUrl, use back tick "`" for multiple line
// template is "must have"
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template:`<div app-server></div> //inline template
  // <hr/>
  // <div app-server></div>`,
  styleUrls: ['./servers.component.css']
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

  ngOnInit(){
    this.random = Math.random();
  }
  constructor() {
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

