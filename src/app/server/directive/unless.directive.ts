import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';


// dknote 91: custom structure/structural directive
@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  // have input same as selector so it can be assigned to selector when used
  @Input() set appUnless(condition: boolean) {
    if (condition) {
      // not show
      this.vcRef.clear();
    } else {
      // show
      this.vcRef.createEmbeddedView(this.templateRef);
    }

  }

  // inject reference to TemplateContainer(content to display) and ViewContainer(where it placed)
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {
  }

}
