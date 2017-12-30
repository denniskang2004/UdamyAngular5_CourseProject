import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';//dknote 159: build use rxjs package
import {Subscription} from 'rxjs/Subscription';
import {Observer} from 'rxjs/Observer';

@Component({
  selector: 'app-obs-demo',
  templateUrl: './obs-demo.component.html',
  styleUrls: ['./obs-demo.component.css']
})
export class ObsDemoComponent implements OnInit, OnDestroy {
  numSub: Subscription;
  strSub: Subscription;

  constructor() {
  }

  ngOnInit() {
    this.demo1();
    this.demo2();
  }

  // dknote 159: build first demo for observable
  demo1() {
    let myNumbers = Observable.interval(1000);

    this.numSub = myNumbers.subscribe(
      (num: number) => {
        console.log(num);
        if (num === 10)
          this.numSub.unsubscribe();
      }
    );
  }

  //dknote 160: better observable demo
  demo2() {
    const myObs = Observable.create(
      (observer: Observer<string>) => {
        setTimeout(() => {
          observer.next('first package');//emit data package
        }, 2000);
        setTimeout(() => {
          observer.next('second package');//emit data package
        }, 4000);
        setTimeout(() => {
          observer.error('Failure!');//emit data package
        }, 5000);

      }
    );

    // dknote: observer handles observable by 3 sections: data, error, complete
    this.strSub = myObs.subscribe(
      (data: string) => {  //data
        console.log('Subscription2 Got data:'+data);
      },
      (error: string) => { //error
        console.log('Subscription2 Got Error:'+error);
      },
      ()=>{ // complete
        console.log('Subscription2 Completed!');
      }
    );

  }

  ngOnDestroy() {
    this.numSub.unsubscribe(); //dknote: very import to unsubscribe to avoid leak!
    this.strSub.unsubscribe();

    //dknote 163: learn more about observable: reactivex.io
  }
}
