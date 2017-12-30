import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit , OnDestroy{
  user:{id:number,name:string};
  paramSubscription:Subscription;

  constructor(
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {

    // get parameters static way
    // this.user = {
    //   id:this.route.snapshot.params['id'],
    //   name:this.route.snapshot.params['name']
    // }
    // dknote 139: change to get from resolver
    this.user = this.route.snapshot.data['userResolver'];


    // dknote 112: detect change on route parameters using Route Observable
    // without observable below, it will not reload on same page.
    this.paramSubscription = this.route.params
      .subscribe(
        (params:Params)=>{
          this.user.id = params['id'];
          this.user.name = params['name'];
        }
      )

    // dknote 128: get parameter in static way
    let param = this.route.snapshot.queryParams['allowEdit'];
    console.log('User  Param:'+param);


  }

  ngOnDestroy(){
    //dknote 123: this is good practice to unsubscribe from memory:
    // but not a must in this case, because angular has done below behind the scene
    this.paramSubscription.unsubscribe();
  }

  // dknote 128: use relative path to navigate to edit page
  onEditUser(){
    console.log('onEditUser');
    this.router.navigate(
      ['edit'], // dknote 128: relative to this route

      //dknote 129: keep query param when navigate to new page using queryParamsHandling preserve
      {relativeTo:this.route, queryParamsHandling:'preserve'});
  }

}
