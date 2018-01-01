import {Injectable} from '@angular/core';
import {Http} from '@angular/http';


//dknote 234: used for Http service
@Injectable()
export class UserService{
  URL:string = "https://udamy-angular5-completeguide.firebaseio.com/data.json";

  constructor(private httpService:Http){

  }

  // dknote: save data to firebase
  storeUser(users:any[]){
    // dknote: this is observable returned, so need to subscribe
    return this.httpService.post(this.URL, users);
  }


}
