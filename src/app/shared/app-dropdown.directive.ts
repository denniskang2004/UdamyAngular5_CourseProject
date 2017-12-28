import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

// attribute directive
@Directive({
  selector:'[appDropdown]'
})
export  class AppDropdownDirective{
  @HostBinding('class.open') isOpen:boolean;

  constructor(private eleRef:ElementRef){}

  @HostListener('click') clickIt(){
    this.isOpen = !this.isOpen;
    console.log('AppDropdownDirective click');

  }



}
