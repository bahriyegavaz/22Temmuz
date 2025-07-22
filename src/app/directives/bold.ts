import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBold]',
  standalone: true,
})
export class Bold {
  @HostBinding('style.fontWeight') fontWeight = 'normal'
  @HostListener('mouseenter') onMouseEnter(){
    this.fontWeight = 'bold'
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.fontWeight = 'normal'
  }

  constructor() { }

}
