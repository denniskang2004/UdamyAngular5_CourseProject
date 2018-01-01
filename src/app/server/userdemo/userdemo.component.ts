import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ObsHelperService} from '../obs-demo/obs-helper.service';
import {Subscription} from 'rxjs/Subscription';
import {UserService} from './user.service';

@Component({
  selector: 'app-userdemo',
  templateUrl: './userdemo.component.html',
  styleUrls: ['./userdemo.component.css'],
  providers:[UserService]
})
export class UserdemoComponent implements OnInit, OnDestroy {
  index:number = 3;
  users:{id:number,name:string}[] = [
    {id:1, name:'dennis'},
    {id:2, name:'mike'}
  ];
  msg:string;
  msgSubscription: Subscription;

  constructor(
    private obsService:ObsHelperService,
    private userService:UserService) {  }

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

  // dknote 234: set up firebase
  // URL: https://udamy-angular5-completeguide.firebaseio.com/

  onAddUser(){
    this.users.push({
      id: this.index++,
      name: 'User'+Math.random()
    });


  }

  // dknote 234: http service
  onSaveUser(){
    this.userService.storeUser(this.users).subscribe(
      (response)=>{
        console.log(response)
      },
      (error)=>{
        console.log(error)
      }
    )
  }

}
