// Angular는 콘텐트 프로젝션(Content projection)을 통해 자식 컴포넌트의 콘텐츠를 지정할 수 있다
// 콘텐트 프로젝션은 부모 컴포넌트가 자신의 템플릿 일부를 자식 컴포넌트의 콘텐츠로 전달할 수 있는 기능
// 자식 컴포넌트는 부모 컴포넌트가 전달한 콘텐츠를 전달받아 표시할 위치를 ngContent 디렉티브를 사용하여 지정한다.
import { Component } from '@angular/core';

@Component({
  selector: 'single-content-projection',
  template: `
    <h3>Single-slot content projection</h3>
    <div>
      <ng-content></ng-content>
    </div>
  `
})
export class SingleContentProjectionComponent {

}
