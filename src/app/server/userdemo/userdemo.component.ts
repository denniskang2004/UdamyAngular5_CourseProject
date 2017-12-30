import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-userdemo',
  templateUrl: './userdemo.component.html',
  styleUrls: ['./userdemo.component.css']
})
export class UserdemoComponent implements OnInit {
  users:{id:number,name:string}[] = [
    {id:1, name:'dennis'},
    {id:2, name:'mike'}
  ];
  constructor() {  }

  ngOnInit() {

  }


}
