

// dknote 97: create a service (just a POJO)
export class appLogging{
  name:string = 'default';

  public setName(nm){
    this.name = nm;
  }
  logStatus(status:string){
    console.log('[' +this.name+ ']:' +status);
  }
}
