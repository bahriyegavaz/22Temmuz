import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true 
})
export class Highlight {
  @Input('appHighlight') highlightColor: string = 'yellow'; 
  @Input() textColor:string = 'black';
  @Input() transistionDuration: string = '0.3s';

  @HostBinding('style.backgroundColor') bgColor: string = 'transparent';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.bgColor = this.highlightColor; // hover olunca renk uygula
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.bgColor = this.bgColor; // çıkınca sıfırla
  }

  constructor() {}
}
