import { ElementRef, Renderer2, Directive } from '@angular/core';

@Directive({
  selector: '[textBlue]'
})
export class TextBlueDirective {
  constructor(el: ElementRef, renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'color','blue');
  }
}
