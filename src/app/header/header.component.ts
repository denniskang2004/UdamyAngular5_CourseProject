import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // dknote 77: make output to app.component.html
  // @Output() selectedFeature = new EventEmitter<string>();// dknote 143: comment to use angular route

  constructor() { }

  // dknote 143: comment to use angular route
  // selectFeature(feature:string){
  //   this.selectedFeature.emit(feature);
  // }
  ngOnInit() {
  }

}
