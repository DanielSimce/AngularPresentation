import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appLoop]'
})
export class LoopDirective {
  @Input() set appLoop(loop: number){
    for (let index = 0; index < loop; index++) {
      this.vcRef.createEmbeddedView(this.templateRef);

    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
