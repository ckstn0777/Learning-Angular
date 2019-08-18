import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[range]'
})
export class RangeDirective {
  _range: number[];

  @Input()
  set range(value) {
    this.viewContainer.clear();
    this._range = this.generateRange(value[0], value[1]);

    console.log(this._range);
    // 범위를 갖는 배열 _range를 순회하며 select 요소의 option 요소를 호스트 뷰에 추가한다.
    this._range.forEach(num => {
       // $implicit 프로퍼티 값 num은 ng-container의 로컬 변수 num에 할당된다.
      this.viewContainer.createEmbeddedView(this.templateRef, {
        $implicit: num
      });
    });
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  private generateRange(from, to) {
    const res = [];
    let i = from;
    while (i < to + 1) {
      res.push(i);
      i++;
    }
    return res;
  }
}
