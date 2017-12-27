import {
  Component,
  Input,
  EventEmitter,
  Output,
  SimpleChanges,
  OnInit,
  OnChanges,
  DoCheck,
  ContentChild,
  ElementRef,
  AfterContentInit, AfterContentChecked
} from '@angular/core';


// dknote 15: add a component:   component is a ts class

// dknote 15.1 metadata is in @component section
@Component({
  selector: 'app-server', // a reference by other places
  // selector: '[app-server]', // dknote 21: selector as attribute
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: green
    }
  `]
})
export class serverComponent
  implements OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit, AfterContentChecked {
  serverId = 18; // dknote 23: databinding: string interpolation
  serverStatus = 'offline';
  serverNumber = 0;
  @Input() showNgContent = false;

  // dknote 61: custom property binding @Input get input from containing DOM
  @Input() serverInput: any;
  @Input('srvNm') Name: string;
  @Input('showButton') showButton = false;

  // dknote 63: pass out data to parent component by @Output & EventEmitter
  // 1. define @output event variable "myNewName"
  // 2. define eventhandler to call event variable .i.e myNewName
  // 3. parent html: use the alias/eventVariable as event (newName) to call fun
  // 4. parent ts: call fun to pass $event the data
  @Output('newName') myNewName = new EventEmitter<string>();

  // dknote 74: use @ContentChild to access content rendered
  @ContentChild('myContent') content: ElementRef;

  constructor() {

    this.serverNumber = Math.random();
    if (this.serverNumber > 0.5) {
      this.serverStatus = 'online';
    } else {
      this.serverStatus = 'offline';
    }
  }

  getServerStatus() {// dknote 23
    return this.serverStatus;
  }

  getColor() {
    if (this.serverNumber > 0.5) {
      return 'red';
    } else {
      return 'blue';
    }
  }

  ClickMe() {
    // dknote 63: emit out
    this.myNewName.emit('NewName:' + Math.random());
  }

// dknote 71, dknote 72: component lifecycle hooks below
  // ngOnChanges: called when bounded property changes (@Input variables)
  // ngOnInit: component initialized after constructor
  // ngDoCheck: called when any change detection run on template
  // ngAfterContentInit: called after ng-content be projected
  // ngAfterContentChecked
  // ngAfterViewInit
  // ngAfterViewChecked
  // ngOnDestroy: before destroyed


  ngOnChanges(changes: SimpleChanges) {
    console.log('servers ngOnChanges called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('servers  ngOnInit called');
    console.log('content:' + this.content);
  }

  ngDoCheck() {
    console.log('servers  ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
    console.log('content:' + JSON.stringify(this.content));
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
    console.log('content:' + JSON.stringify(this.content));
    if(this.content){
      console.log('content details:' + JSON.stringify(this.content.nativeElement.textContent));
    }

  }
}

// dknote 18: create by CLI: ng generate component servers, then nested by <app-server>

