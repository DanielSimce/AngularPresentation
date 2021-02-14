import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.borderRadius') borderRadius: string;
  @HostBinding('style.textTransform') textTransform: string;
  @Input('appColor') color: string;

  constructor(private elRef: ElementRef) { }

  @HostListener('mouseenter') MouseEnter(event: Event){
    this.backgroundColor = this.color;
    this.borderRadius = '100px';
    this.textTransform = 'uppercase';

  }

  @HostListener('mouseleave') MouseLeave(event: Event){
    this.backgroundColor = 'green';
    this.textTransform = 'lowercase';
  }

  @HostListener('dblclick') DblClick(event: Event){
    this.backgroundColor = 'blue';
  }

}
