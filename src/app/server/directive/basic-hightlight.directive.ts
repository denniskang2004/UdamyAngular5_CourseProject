import {Directive, ElementRef, OnInit} from '@angular/core';

// dknote 84: first custom directive, not recommended way (DOM)
@Directive({
  selector: '[app-basic-highlight]'
})
export class  BasicHightlightDirective implements  OnInit{

  constructor(private elementRef: ElementRef){
  }

  ngOnInit(){

    // not good to directly access DOM
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
