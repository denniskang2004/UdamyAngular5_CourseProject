import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  message:string = '';
  constructor(private route:ActivatedRoute) { }

  // dknote 138: get static data from route config
  ngOnInit() {
    this.message = this.route.snapshot.data['message'];
  }


}
