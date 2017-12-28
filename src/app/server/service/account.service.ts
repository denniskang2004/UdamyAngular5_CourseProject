import {appLogging} from './logging.service';
import {EventEmitter, Injectable} from '@angular/core';


@Injectable() // dknote 101: this enable angular to inject appLogging service
export class AccountService{
  accounts:string[] =[];
  accountEvent = new EventEmitter<string>();

  constructor(private logger:appLogging){

  }
  addAccount(accName:HTMLInputElement){
    this.accounts.push(accName.value);
    this.logger.logStatus('AddAccount:'+accName);
    this.accountEvent.emit(accName.value);//dknote 102: cross component communication by event
  }

  getAccount(index:number){
    this.logger.logStatus('GetAccount:'+index);
    if(this.accounts.length-1>=index)
      return this.accounts[index];
    else
      return "N/A";
  }

}
