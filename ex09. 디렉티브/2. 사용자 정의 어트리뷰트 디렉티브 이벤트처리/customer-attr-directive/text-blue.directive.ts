import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[textBlue]'
})
export class TextBlueDirective {
  // 생성자에 ElementRef 타입의 인스턴스가 주입
  // ElementRef 클래스는 템플릿 내부의 DOM 요소를 감싼 래퍼 객체를 생성하며
  // 네이티브 DOM 요소를 가리키는 nativeElement 프로퍼티를 소유한다.
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  // ElementRef를 사용하여 DOM에 직접 접근하는 경우, XSS 공격에 노출될 수 있는 단점이 있다.
  // 그래서 Renderer2를 사용하는게 권장됨
  // el.nativeElement.style.color = 'blue';

  // 호스트 요소에서 발생한 mouseenter이벤트의 핸들러를 정의
  @HostListener('mouseenter') handleMouseEnter() {
    this.textColor('blue');
  }

  // 호스트 요소에서 발생한 mouseleave 이벤트의 핸들러 정의
  @HostListener('mouseleave') handleMouseLeave() {
    this.textColor(null);
  }

  private textColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }

}
