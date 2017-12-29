import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit , OnDestroy{
  user:{id:number,name:string};
  paramSubscription:Subscription;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {

    // get parameters static way
    this.user = {
      id:this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name']
    }

    // dknote 112: detect change on route parameters using Route Observable
    // without observable below, it will not reload on same page.
    this.paramSubscription = this.route.params
      .subscribe(
        (params:Params)=>{
          this.user.id = params['id'];
          this.user.name = params['name'];
        }
      )
  }

  ngOnDestroy(){
    //dknote 123: this is good practice to unsubscribe from memory:
    // but not a must in this case, because angular has done below behind the scene
    this.paramSubscription.unsubscribe();
  }

}
