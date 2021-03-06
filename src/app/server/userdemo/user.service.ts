import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';


//dknote 234: used for Http service
@Injectable()
export class UserService{
  URL:string = "https://udamy-angular5-completeguide.firebaseio.com/data.json";

  constructor(private httpService:Http){

  }

  // dknote: save data to firebase
  storeUser(users:any[]){
    const headers = new Headers({'Content-Type':'applicatoin/json'})

    // dknote: this is observable returned, so need to subscribe
    return this.httpService.post(this.URL, users,{headers:headers});
  }

  getUser(){
    return this.httpService.get(this.URL)
      .map(
        (response:Response)=>{
          const data = response.json(); // dknote 238: convert in service level instead of component
          for(const usr of data){
            usr.name = "FETCHED_"+usr.name; //dknote 239: demo of map again
          }
          return data;
        }
      );
  }

  //dknote 237: override using put
  overrideUser(users:any[]){
    return this.httpService.put(this.URL, users);
  }

  // dknote 241: get app name
  getAppName(){
    return this.httpService.get("https://udamy-angular5-completeguide.firebaseio.com/AppName.json")
      .map(
        (response:Response)=> {
          return response.json();

        }
      )
  }
}
