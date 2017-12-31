import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ObsHelperService} from '../obs-demo/obs-helper.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-userdemo',
  templateUrl: './userdemo.component.html',
  styleUrls: ['./userdemo.component.css']
})
export class UserdemoComponent implements OnInit, OnDestroy {
  users:{id:number,name:string}[] = [
    {id:1, name:'dennis'},
    {id:2, name:'mike'}
  ];
  msg:string;
  msgSubscription: Subscription;

  constructor(private obsService:ObsHelperService) {  }

  ngOnInit() {
    this.msgSubscription = this.obsService.obsHelper.subscribe(
      (data:string)=>{
        this.msg = data;
      }
    )
  }

  ngOnDestroy(){
    this.msgSubscription.unsubscribe();
  }
  onSendMsg(){
    this.obsService.obsHelper.next('this is User Demo Component talking');
  }

}
