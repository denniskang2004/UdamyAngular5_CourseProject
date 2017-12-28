import {Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appResponsiveHighlight]'
})
export class ResponsiveHighlightDirective implements OnInit {
  // dknote 88: local variable binded to DOM attribute and control it in code
  @HostBinding('style.backgroundColor') backgroundColor: string ;

  @Input() defaultColor: string; // make the color flexible
  @Input() hightlightColor: string = 'lightblue';

  constructor(private eleRef: ElementRef, private render: Renderer2) {
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseover') mouseover() {
    // dknote 87: option1: use the Renderer2
    // this.render.setStyle(this.eleRef.nativeElement,'background-color','lightblue');

    // dknote 88: option2: use HostBinding
    this.backgroundColor = this.hightlightColor;

  }

  @HostListener('mouseleave') mouseleave() {
    // dknote 87: option1: use the Renderer2
    // this.render.setStyle(this.eleRef.nativeElement,'background-color','transparent');

    // option2: use the hostbinding property
    this.backgroundColor = this.defaultColor;
  }


}
