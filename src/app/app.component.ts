import {Component, OnInit} from '@angular/core';
import {appLogging} from './server/service/logging.service';

// dknote: this is the root component (rootcomponent)
@Component({
  selector: 'app-root', // dknote: angular used to replace in index.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // dknote: 20
  // providers:[appLogging] //dknote 101: moved to app.module.ts
})
export class AppComponent implements OnInit{
  title = 'app';

  // dknote 77: route thru ngIf
  // 1. header click event
  featureSelected:string;

  constructor(private loger:appLogging){

  }
  ngOnInit(){
    this.loger.setName('appComp');
    this.loger.logStatus('AppComponent ngOnInit');
  }
  onSelectFeature(feature:string){
    this.featureSelected = feature;
  }
}
