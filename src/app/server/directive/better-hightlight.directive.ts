import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

// dknote 85: custom directive recommended way using renderer
@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements  OnInit{

  constructor(private elementRef:ElementRef, private renderer:Renderer2) { }

  ngOnInit(){
    // dknote 85: remember to use 'element.Ref.nativeElement'
    // other renderer functions: https://angular.io/api/core/Renderer2
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color','lightblue');
  }
}
