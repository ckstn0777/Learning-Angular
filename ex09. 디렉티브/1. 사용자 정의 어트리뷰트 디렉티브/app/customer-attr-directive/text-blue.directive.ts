import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[textBlue]'
})
export class TextBlueDirective {
  // 생성자에 ElementRef 타입의 인스턴스가 주입
  // ElementRef 클래스는 템플릿 내부의 DOM 요소를 감싼 래퍼 객체를 생성하며
  // 네이티브 DOM 요소를 가리키는 nativeElement 프로퍼티를 소유한다.
  constructor(el: ElementRef, renderer: Renderer2) {
    // ElementRef를 사용하여 DOM에 직접 접근하는 경우, XSS 공격에 노출될 수 있는 단점이 있다.
    // 그래서 Renderer2를 사용하는게 권장됨
    // el.nativeElement.style.color = 'blue';
    renderer.setStyle(el.nativeElement, 'color', 'blue');
  }
}
