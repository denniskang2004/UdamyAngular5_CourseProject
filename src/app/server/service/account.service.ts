import {appLogging} from './logging.service';
import {Injectable} from '@angular/core';


@Injectable() // dknote 101: this enable angular to inject appLogging service
export class AccountService{
  accounts:string[] =[];

  constructor(private logger:appLogging){

  }
  addAccount(accName:string){
    this.accounts.push(accName);
    this.logger.logStatus('AddAccount:'+accName);
  }

  getAccount(index:number){
    this.logger.logStatus('GetAccount:'+index);
    if(this.accounts.length-1>=index)
      return this.accounts[index];
    else
      return "N/A";


  }
}
