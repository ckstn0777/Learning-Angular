// 위 결과를 살펴보면 ChildComponent의 컴포넌트 템플릿의 h3 요소에
// 어트리뷰트 _ngcontent-c1이 추가된 것을 확인할 수 있다.

// 이것은 Angular가 임의로 추가한 어트리뷰트로 기존 CSS 룰셋에 어트리뷰트 셀렉터를 추가하는 방식으로
// 해당 컴포넌트를 스코프로 한정하여 스타일이 적용될 수 있도록 한다.

//  위의 경우와 같이 Angular는 기본적으로 임의의 어트리뷰트를 추가하는 방식(Emulated)을 사용하여 뷰 캡슐화를 구현
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h3>Component Style: Child</h3>
    <button class="btn-primary1">Button</button>
  `,
  styleUrls: ['./child.component.css'],
  // 브라우저가 웹 컴포넌트를 지원한다는 전제 하에 웹 컴포넌트의 Shadow DOM을 이용하여 뷰 캡슐화(View Encapsulation)를 구현할 수도 있다.
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class ChildComponent {}
