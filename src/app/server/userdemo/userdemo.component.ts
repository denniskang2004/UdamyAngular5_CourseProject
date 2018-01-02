import {Component, OnDestroy, OnInit} from '@angular/core';
import {ObsHelperService} from '../obs-demo/obs-helper.service';
import {Subscription} from 'rxjs/Subscription';
import {UserService} from './user.service';
import {Response} from '@angular/http';

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

  // dknote 234: http service POST
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

  //dknote 236: http service GET
  onGetUser(){
    this.userService.getUser().subscribe(
      (data: any[])=>{
        //console.log(response)
        //const data = response.json();//dknote 236: convert to java object
        console.log(data); // dknote 238: service has converted it.
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  //dknote 237: override firebase using put
  onOverrideUsers(){
    this.userService.overrideUser(this.users).subscribe(
      (response)=>{
        console.log(response)
      },
      (error)=>{
        console.log(error)
      }
    )
  }

}
