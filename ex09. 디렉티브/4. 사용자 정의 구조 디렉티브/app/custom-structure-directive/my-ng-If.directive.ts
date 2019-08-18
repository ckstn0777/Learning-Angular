import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[myNgIf]'
})
export class MyNgIfDirective {
  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) {}

  @Input()
  set myNgIf(condition: boolean) {
    if (condition) {
      // 호스트 뷰에 ng-template 디렉티브를 추가
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      // 호스트 뷰에서 ng-template 디렉티브 제거
      this.viewContainer.clear();
    }
  }
}
// TemplateRef는 ng-template 디렉티브로 래핑된 요소를 가리키는 객체를 생성

// ViewContainerRef는 새로운 요소(컴포넌트나 ng-template 디렉티브로
// 래핑된 요소)를 DOM에 삽입하기 위해 필요한 컨테이너(DOM 요소)로써
// createComponent, createEmbeddedView 메소드를 통해 새로운 요소를 DOM에 삽입한다
