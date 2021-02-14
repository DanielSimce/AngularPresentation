import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTimeout]'
})
export class TimeoutDirective {
  @Input() set appTimeout(timeout: number){
    this.vcRef.clear();
    setTimeout(() => {
      this.vcRef.createEmbeddedView(this.templateRef);
    }, timeout);
  }
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
