import { Component, OnInit } from '@angular/core';
import {AccountService} from '../server/service/account.service';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.css']
})
export class AbcComponent implements OnInit {

  showTag:string;
  constructor(private accountService:AccountService) {


  }

  ngOnInit() {
    // dknote 101: cross component communication by event
    this.accountService.accountEvent.subscribe(
      (status:string) =>{
        alert('ABC got new status:'+status)
        this.showTag = status;
      }
    );

  }


}
